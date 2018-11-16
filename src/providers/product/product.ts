import { Products } from './../../models/product.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { QueryFn } from 'angularfire2/firestore/interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';
import DocumentReference = firebase.firestore.DocumentReference;
/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {
//save new products
//edit new products
//delete new products
//get all products -> 15

readonly path = 'Products';
  constructor(private afs: AngularFirestore) {
    
  }

  addnewProduct(
    category_id: string,
    user_id: string,
    imgUrl: string,
    name: string,
    brief_description: string,
    description: string,
    units: number,
    measurement: string,
    price: number,
    location: string,
    lat: number,
    lng: number

  ): Promise<void> {
    const productId: string = this.afs.createId();
    return this.afs.doc<Products>(`Products/${productId}`)
    .set({
    id: productId,
    category_id,
    user_id,
    imgUrl,
    name,
    brief_description,
    description,
    units,
    measurement,
    price,
    location,
    lat,
    lng
    });
  }

  deleteProduct(id: string): Promise<void>{
    return this.afs.doc<Products>(`${this.path}/${id}`).delete();
  }

  update(id: string, data: Partial<Products>): Promise<void> {
    return this.afs.doc<Products>(`${this.path}/${id}`).update(data);
  }

  getAllProducts(ref?: QueryFn): Observable<Products[]> {
    return this.afs.collection<Products>(this.path, ref)
    .snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Products;
        const id= a.payload.doc.id;
        return {id, ...data};
      });
    });

  }

  getUserProducts(userId: string): AngularFirestoreCollection<Products> {
    return this.afs.collection<Products>('Products',
    ref => 
      ref
        .where('user_id', '==',userId)
    );
  }

  

}
