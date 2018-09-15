import { ShoppingCartItem} from './shopping-cart-item';
import { Products} from './product.model';

export class ShoppingCart{
items: ShoppingCartItem[] = [];

constructor( private itemsMap: {[productId: string]: any}){
    this.itemsMap = itemsMap || {};

    for(let productId in itemsMap){
        let item = itemsMap[productId];
        this.items.push(new ShoppingCartItem({
            ...item,
            key: productId
        }));
    }
}
get productIds(){
    return Object.keys(this.itemsMap);

}
get totalItemsCount(){
    let count = 0;
    for( let productId in this.itemsMap){
        count += this.itemsMap[productId].quantity;
    }
    return count;
}
getQuantity(product: Products){
    let item = this.itemsMap[product.id];
    return item ? item.quantity : 0;
}
get totalPrice(){
    let sum = 0;
    for(let productId in this.items){
        sum += this.items[productId].totalPrice;
        return sum;
    }
}
}