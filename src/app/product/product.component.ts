import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('produit') prod!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
