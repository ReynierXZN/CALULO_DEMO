import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceFunctions } from '../services/service.service';

@Component({
  selector: 'app-product-list',
  standalone: true, // add this if you are using standalone components
  imports: [FormsModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'] // ✅ plural
})
export class ProductListComponent {
  searchProduct: string = '';
  products: any[] = [];

  constructor(private functions: ServiceFunctions) {}

  ngOnInit() {
    this.products = this.functions.getProducts();
  }

  get filteredProduct() {
    return this.products.filter(product => 
      product.name.toLowerCase().includes(this.searchProduct.toLowerCase())      
    );
  }

  addToCart(product: any) {
    this.functions.addToCart(product);
    alert(product.name + ' is added to your cart!');
  }
} // ✅ no extra "};"
