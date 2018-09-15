import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider} from '../../providers/cart/cart';
import { Products } from '../../models/product.model';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  @Input('product') product: Products;
  @Input('shopping-cart') shoppingCart;
  constructor(public navCtrl: NavController, public navParams: NavParams, public cartService: CartProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

}
