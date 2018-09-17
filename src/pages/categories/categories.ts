import { Observable } from 'rxjs';
import { CategoriesProvider } from './../../providers/categories/categories';
import { Category } from './../../models/category';
import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  categories: Observable<Category[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, public categoryService: CategoriesProvider) {
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories$(ref => ref);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  goToCategory(id){
    this.navCtrl.push('CategoryProductsPage',{categoryId: id})
  }
  getItems(){
    
  }


}
