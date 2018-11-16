import { Injectable } from '@angular/core';
import { AngularFirestore,
         AngularFirestoreCollection,
        AngularFirestoreDocument } 
        from 'angularfire2/firestore';

/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartProvider {

  constructor(public afs: AngularFirestore) {
    console.log('Hello CartProvider Provider');
  }
addToCart(uid: string, item: any): void {
  
    }

}
