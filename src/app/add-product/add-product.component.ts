import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  form!: FormGroup;
  formSubmitted = false;

  constructor(private ps: ProductService,
              private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      'active': true,
      'category': ['', Validators.required],
      'description': '',
      'id': '',
      'name': ['', Validators.required],
      'price': [0, [Validators.required, Validators.min(10), Validators.max(10000)]],
      'promo': 0,
    })
  }

  submit() {
    this.formSubmitted = true;
    if(this.form.valid){
      this.ps.add(this.form.value).subscribe(v => console.log("Inserted: ", v))
    }
  }
}
