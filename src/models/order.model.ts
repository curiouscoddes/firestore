export interface Order {
    id?: string;
    productId: string;
    productName: string;
    buyerId: string;
    sellerId: string;
    quantity: number;
    unitsBought: number;
    pricePerUnit: number;
    totalPrice: number;
    accepted: string;
    cancelled: string;
}