import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Products} from '../../models/product.model';
import { ProductProvider} from '../../providers/product/product';
import * as firebase from 'firebase';
import { OrderProvider} from '../../providers/order/order';
import { MyordersPage} from '../myorders/myorders';
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
              public afs: AngularFirestore, public productService: ProductProvider,
              private orderService: OrderProvider) {
                this.selectedProduct = this.navParams.get('data');
                this.selectedProductId = this.selectedProduct.id;
                console.log(this.selectedProduct);
                console.log(this.selectedProductId);

                console.log(this.selectedProduct.price);
                console.log(this.selectedProduct.name);
                console.log(this.selectedProduct.units);
                console.log(this.selectedProduct.measurement);
                console.log(this.selectedProduct.description);

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
   makeOrder(){
    const productId = this.selectedProduct.id;
    const productName= this.selectedProduct.name;
    const productImage = this.selectedProduct.imgUrl;
    const buyerId = firebase.auth().currentUser.uid;
    const sellerId = this.selectedProduct.user_id;
    const unitsBought = this.selectedProduct.units;
    const price = this.selectedProduct.price
    const accepted = false;
    const cancelled = false;

    this.orderService.sendOrdersToDb(
      productId,
      productName,
      productImage,
      buyerId,
      sellerId,
      unitsBought,
      price,
      accepted,
      cancelled
      ).then((res:any) =>{
        this.navCtrl.push(MyordersPage);
      })
   }
}
