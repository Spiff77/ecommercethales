import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  prod1: Product = {
    id: 1,
    name: 'Table',
    price: 30,
    promo: .4,
    description: 'un produit qu\'il est bien pour s\'en servir',
    category: 'Meuble'
  }
  prod2: Product = {
    id: 2,
    name: 'Chaise',
    price: 20,
    promo: .2,
    description: 'un produit qu\'il est bien pour s\'asseoir dessus',
    category: 'Meuble'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
