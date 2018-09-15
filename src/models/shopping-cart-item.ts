export class ShoppingCartItem{
    key: string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;
    
    constructor(private init?: Partial<ShoppingCartItem>){
    Object.assign(this, init);
    }
    get totalPrice(){
        return this.quantity * this.price;
    }
    
    }