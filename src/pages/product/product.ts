import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Products} from '../../models/product.model';
import { ProductProvider} from '../../providers/product/product';


/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  selectedProduct;
  selectedProductId;
  public latitude: number;
  public longitude: number;
  public zoom: number;



  constructor(public navCtrl: NavController, public navParams: NavParams,
              public afs: AngularFirestore, public productService: ProductProvider) {
                this.selectedProduct = this.navParams.get('data');
                this.selectedProductId = this.selectedProduct.id;
                console.log(this.selectedProduct);
                console.log(this.selectedProductId);

                console.log(this.selectedProduct.price);
                console.log(this.selectedProduct.name);
                console.log(this.selectedProduct.units);
                console.log(this.selectedProduct.measurement);
                this.loadProductLocation();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
  loadProductLocation(){
    this.latitude = this.selectedProduct.lat;
    this.longitude = this.selectedProduct.lng;
    this.zoom = 15;
   }
}
