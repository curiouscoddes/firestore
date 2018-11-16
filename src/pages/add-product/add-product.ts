import { ProductProvider } from './../../providers/product/product';
import { ImghandlerProvider } from './../../providers/imghandler/imghandler';
import { Category } from './../../models/category';
import { Observable } from 'rxjs';
import { CategoriesProvider } from './../../providers/categories/categories';
import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { Products } from '../../models/product.model';
import * as firebase from 'firebase';
import { MapPage} from './../map/map';
/**
 * Generated class for the AddProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {
  product = {} as Products;
  imgUrl = "./../../assets/imgs/upload.png";
  placeName = "";
  latitude = 0;
  longitude = 0; 

  categories: Observable<Category[]>;

  constructor(public navCtrl: NavController,public productService: ProductProvider, 
              public navParams: NavParams,public categoryService: CategoriesProvider,
              public imgservice: ImghandlerProvider,public loadCtrl: LoadingController, 
              public zone: NgZone, public modalctrl: ModalController) {
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories$(ref => ref);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductPage');
  }

  chooseimg(){
    let loader = this.loadCtrl.create({
      content:'please wait'
    })
    loader.present();
    this.imgservice.uploadimage().then((uploadedurl:any)=>{
      loader.dismiss();
      this.zone.run(()=>{
        this.imgUrl = uploadedurl;
        this.product.imgUrl= this.imgUrl;
      })
    })
}

// category_id: string;
// user_id: string;
// imgUrl: string;
// name: string;
// brief_description: string;
// description: string;
// units: number;
// measurement: string;
// price: number;

  upload(){
    const name = this.product.name;
    const brief_description = this.product.brief_description;
    const description = this.product.description;
    const units = this.product.units;
    const measurement = this.product.measurement;
    const price = this.product.price;
    const imgUrl = this.product.imgUrl;
    const category_id = this.product.category_id;
    const user_id = firebase.auth().currentUser.uid;
    const location = this.placeName;
    const lat = this.latitude;
    const lng = this.longitude;

    console.log({name,brief_description,description,units,measurement,price,imgUrl,
                category_id,user_id,location,lat,lng});

    // category_id,
    // user_id,
    // imgUrl,
    // name,
    // brief_description,
    // description,
    // units,
    // measurement,
    // price

    this.productService.addnewProduct(category_id, user_id, imgUrl,name,brief_description,
                                      description,units,measurement,price,location,lat,lng)
                                      .then((res:any)=>{
      
      this.navCtrl.push('MyProductsPage');
    
      
    })
  }
   getLocation(){
     let mapModal = this.modalctrl.create(MapPage);
     mapModal.onDidDismiss(localeData =>{
       if(localeData != null ){
         this.placeName = localeData.name;
         this.latitude = localeData.lat;
         this.longitude = localeData.lng;
         console.log(localeData);
       }
       else{
         this.placeName = "Not Defined"
         this.latitude = 0;
         this.longitude = 0;


       }
     })
     mapModal.present();
   }

}
