import { Category } from './../../models/category';
import { CategoriesProvider } from './../../providers/categories/categories';
import { Observable } from 'rxjs';
import { Products } from './../../models/product.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the CategoryProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category-products',
  templateUrl: 'category-products.html',
})
export class CategoryProductsPage {
  categoryId = null;
  category = null;
  categoryTitle = '';
  products$: Observable<Products[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public categoryService: CategoriesProvider) {
    this.category = this.navParams.get('categoryId');
    this.categoryId = this.category.id;
    this.categoryTitle = this.category.title;
    console.log(this.categoryId.id)
  }


  ngOnInit() {
    this.products$ = this.categoryService.getProductByCategory(this.categoryId).valueChanges();
    console.log(this.products$);
    console.log(this.categoryId);
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryProductsPage');
  }
  addToCart() {
    
  }
  chatFarmer(){
    this.navCtrl.push('ChatsPage');
  }
  getItems(){
    
  }
  more(){
    
  }

}
