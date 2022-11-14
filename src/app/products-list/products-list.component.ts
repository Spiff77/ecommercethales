import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = []
  productSelected: Product | undefined;
  filterStr = '';

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.ps.findAll().subscribe(v => this.products = v);
  }

  receiveProduct(product: Product){
    this.productSelected = product;
  }

  getFilteredProducts(): Product[]{
    return this.products.filter(p => p.name.includes(this.filterStr) || p.description.includes(this.filterStr))
  }

}
