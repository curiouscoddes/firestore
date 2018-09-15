import { Observable } from 'rxjs';
import { Products } from './../../models/product.model';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from './../../providers/product/product';
import { CartProvider} from './../../providers/cart/cart';
import { ShoppingCart} from './../../models/shopping-cart';
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
  @Input('product') product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  products$: Observable<Products[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public productService: ProductProvider, public cartService: CartProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  ngOnInit() {
    this.products$ =this.productService.getAllProducts(ref => ref);
  }
  addToCart() {
    this.cartService.addToCart(this.product);
  }

}
