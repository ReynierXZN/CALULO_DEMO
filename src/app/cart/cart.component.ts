import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceFunctions } from '../services/service.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',   
  styleUrls: ['./cart.component.css']   
})
export class CartComponent {             
  cartItems: any[] = [];

  constructor(private functions: ServiceFunctions) {}

  ngOnInit() {
    this.cartItems = this.functions.getCartItems();
  }

  get totalItems() {
    return this.functions.getCartTotalItems();
  }

  get totalPrice() {
    return this.functions.getCartTotalPrice();
  }
}
