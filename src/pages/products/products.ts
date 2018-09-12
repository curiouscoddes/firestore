import { Observable } from 'rxjs';
import { Products } from './../../models/product.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from './../../providers/product/product';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  products$: Observable<Products>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public productService: ProductProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  ngOnInit() {
    this.productService.getAllProducts(ref => ref);
  }

}
