import { Products } from './../../models/product.model';
import { Category } from './../../models/category';
import { AngularFirestore, QueryFn, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

/*
  Generated class for the CategoriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriesProvider {
//fetch all the categories
//add products to their categories
//fetch products for each category

readonly path = "Categories";
  constructor(public afs: AngularFirestore) {
    console.log('Hello CategoriesProvider Provider');
  }

  //fetch all categories
  getCategories$(ref?: QueryFn): Observable<Category[]> {
    return this.afs.collection<Category>(this.path, ref)
    .snapshotChanges().map(actions =>{
      return actions.map(a => {
        const data = a.payload.doc.data() as Category;
        const id= a.payload.doc.id;
        return {id, ...data};
      })
    })
  }

  getProductByCategory(categoryId: string): AngularFirestoreCollection<Products> {
    return this.afs.collection<Products>('Products',
    ref => 
    ref
    .where('category_id', '==',categoryId));

  }

}