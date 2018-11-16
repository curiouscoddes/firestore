import { Component, ViewChild, NgZone, ElementRef, OnInit, } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { MapsAPILoader} from '@agm/core';
import { } from 'google-maps';



/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public placeName: string;

  @ViewChild("search")
  public searchElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private view: ViewController, private mapsApiLoader: MapsAPILoader,
              private ngZone: NgZone) {
    
                this.zoom = 4;
                this.latitude = 0;
                this.longitude = 0;
                this.placeName = "";
//search form control
                this.searchElementRef = new FormControl();
 //set current position               
                this.setCurrentPosition();
        }

        ionViewDidLoad() {
          this.zoom = 4;
          this.latitude = 0;
          this.longitude = 0;

          //search form control
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();
    //load places auto complete
    this.mapsApiLoader.load().then(()=>{
      let nativeHomeInputBox = document.getElementById("txtHome").getElementsByTagName('input') [0];
      let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox,{
        types: ["addresses"]
      });
      autocomplete.addListener("Place Changed", ()=>{
        this.ngZone.run(()=>{
        //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify results
        if (place.geometry == undefined || place.geometry == null){
          return;

        }
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.zoom = 12;
        this.placeName = place.name;

        })
      })
    })
          console.log('ionViewDidLoad MapPage');
  }
    
    
  seeCoords(){
            const localeData = {
              name: this.placeName,
              lat: this.latitude,
              lng: this.longitude
            };
            this.view.dismiss(localeData)
          }
  
 
private setCurrentPosition(){
  if("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position)=>{
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 12;
    });
  }
}

}
