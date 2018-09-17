import { ProductProvider } from './../../providers/product/product';
import { Observable } from 'rxjs';
import { Products } from './../../models/product.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the MyProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-products',
  templateUrl: 'my-products.html',
})
export class MyProductsPage {

  myProducts$: Observable<Products[]>;

  constructor(public navCtrl: NavController, public productService: ProductProvider, public navParams: NavParams) {
  }

  ngOnInit() {
   this.myProducts$=this.productService.getUserProducts(firebase.auth().currentUser.uid).valueChanges();
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProductsPage');
  }
  addProduct(){
    this.navCtrl.push('AddProductPage');
  }

}
