import { Injectable } from '@angular/core';
import {  AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Order } from '../../models/order.model';
import 'rxjs/add/operator/map'
import * as firebase from 'firebase'
import { AngularFireDatabaseModule } from 'angularfire2/database';
/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderProvider {
readonly path="orders";
  constructor( public afs: AngularFirestore) {

    console.log('Hello OrderProvider Provider');
  }
  sendOrdersToDb(
    // id?: string;
    // productId: string;
    // productName: string;
    // buyerId: string;
    // sellerId: string;
    // quantity: number;
    // unitsBought: number;
    // totalPrice: number;
    // accepted: boolean;
    // cancelled: boolean;
    productId: string, productName: string, productImage: string, buyerId: string, sellerId:string,
    unitsBought: number, totalPrice:number, accepted: boolean, cancelled: boolean
  ): Promise<void> {
    const orderId: string = this.afs.createId();
    return this.afs.doc<Order>(`orders/${orderId}`).set({
      id: orderId,
      productId,
      productName,
      productImage,
      buyerId,
      sellerId,
      unitsBought,
      totalPrice,
      accepted,
      cancelled
    });
  }
  //retrieve orders created by the current user.
  getOrdersIMade(): AngularFirestoreCollection<Order> {
    const user_id = firebase.auth().currentUser.uid;
    return this.afs.collection<Order>('orders', ref => ref.where('buyerId', '==', user_id));
  }
  // retrieve orders made to the current user
  getOrdersMadeToMe(userId: string): AngularFirestoreCollection<Order>{
    return this.afs.collection<Order>('orders', ref => ref.where('sellerId', '==', userId));
  }

}
