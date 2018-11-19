export interface Order {
    id?: string;
    productId: string;
    productName: string;
    productImage: string;
    buyerId: string;
    sellerId: string;
    unitsBought: number;
    totalPrice: number;
    accepted: boolean;
    cancelled: boolean;
}