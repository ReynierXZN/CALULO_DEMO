import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceFunctions {
  private products = [
    {name:"Iphone 12", stock: 3, price: 30000},
    {name:"Samsung S15", stock: 2, price: 20000},
    {name:"Ipad Mini 10", stock: 3, price: 20000},
    {name:"i9 DELL Laptop Workstation", stock: 0, price: 50000},
    {name:"Gaming PC", stock: 2, price: 80000},
  ];

  getProducts(){
    return this.products;
  }

  cartItems:any[] = [];
  getCartItems(){
    return this.cartItems;
  }


  addToCart(product:any){
    if(product.stock>0){
      product.stock-=1;

      const existingItem = this.cartItems.find(item => item.name === product.name);
      if(existingItem){
        existingItem.cartStock+=1;
      }
      else{
        this.cartItems.push({...product, cartStock:1});
      }
    }
  }

  getCartTotalItems(){
    let total = 0;
    for(let item of this.cartItems){
      total += item.cartStock;
    }
    return total;
  }

  getCartTotalPrice(){
    let total = 0;
    for(let item of this.cartItems){
      total += item.price * item.cartStock;
    }
    return total;
  }
}