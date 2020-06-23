import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EcommerceInterface } from './ecommerce.model';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
})
export class EcommerceComponent implements OnInit {
  products: EcommerceInterface[];
  priceList: string[];
  isGridSelected: boolean;
  filteredProducts: EcommerceInterface[];
  filteredPrice: string[];
  filterOpen: boolean;
  isLoading: boolean;
  sortby: string;

  constructor(private http: HttpClient) {
    this.products = [];
    this.isGridSelected = true;
    this.priceList = ['Low to High', 'High to Low'];
    this.filteredProducts = [];
    this.filteredPrice = [];
    this.filterOpen = false;
    this.isLoading = true;
    this.sortby = '';
  }

  ngOnInit(): void {
    const API = 'https://angular-assessment-api.herokuapp.com/';
    this.http.get<EcommerceInterface[]>(API).subscribe((response) => {
      this.isLoading = false;
      this.products = this.products.concat(response);
      this.filteredProducts = this.products;
    });
  }

  // Function to check if grid is selected by the user.
  onGridSelected(): void {
    this.isGridSelected = true;
  }

  // Function to check if list is selected by the user.
  onListSelected(): void {
    this.isGridSelected = false;
  }

  // Function to remove the price from `filteredPrice` if already present or user click on cancel icon
  // to remove the filter selection.
  removePrice(price: string): void {
    const index: number = this.filteredPrice.indexOf(price);
    this.filteredPrice.splice(index, 1);
    this.sortby = '';
  }

  // Function to rearranged the products based on ascending or descending order or reset to default state.
  filteredList(price: string): void {
    this.filterToggle();
    if (this.filteredPrice.includes(price)) {
      this.removePrice(price);
      this.sortby = '';
    } else {
      this.filteredPrice = [];
      this.filteredPrice.push(price);
      this.sortby = price === 'Low to High' ? 'asc' : 'desc';
    }
  }

  // Function to toggle the drop down option
  filterToggle() {
    this.filterOpen = !this.filterOpen;
  }
}
