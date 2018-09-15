import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { ShoppingCart } from '../../models/shopping-cart';
import { Observable} from 'rxjs/Observable';
import { Products} from '../../models/product.model';

/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartProvider {

  constructor( private afiredb: AngularFireDatabase) {
    //console.log('Hello CartProvider Provider');

  }
  async getCart(): Promise<Observable<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    return this.afiredb.object('/shopping-carts/'+ cartId).snapshotChanges()
    .map(x => new ShoppingCart(x.payload.val()?x.payload.val().items:{}));
  }

addToCart(product: Products){
  return this.updateItem(product, 1);

  }
removeFromCart( product: Products){
  return this.updateItem(product, -1);
}
async clearCart(){
  let cartId =  await this.getOrCreateCartId();
  return this.afiredb.object('/shopping-carts/' + cartId + '/items').remove();

}
private create(){
  return this.afiredb.list('/shopping-carts').push({
    dateCreated: new Date().getTime()
  })
}
private getItem(cartId: string, productkey){
  return this.afiredb.object('/shopping-carts/' + cartId + '/items' + productkey) 

}
private async getOrCreateCartId(){
  let cartId = localStorage.getItem('cartId');
  if(cartId) return cartId;
  let result = await this.create();
  localStorage.setItem('cartId', result.key);
  return result.key;


}
private async updateItem(product: Products, change: number){
  let cartId = await this.getOrCreateCartId();
  let items$ = this.getItem(cartId, product.id);
  items$.snapshotChanges().take().subscribe(item=>{
    let quantity = (!item.payload.exists())?change:item.payload.val().quantity + change;
    if (quantity ===0) items$.remove();
    else items$.update({
      title: product.name,
      imageUrl: product.imgUrl,
      price: product.price,
      quantity: quantity
    })
  })


}
}
