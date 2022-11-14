import { Injectable } from '@angular/core';
import {Product} from './model/product.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endPointName = '/products'

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiUrl}${this.endPointName}`)
  }

  public add(product: Product): Observable<Product>{
     return this.http.post<Product>(`${environment.apiUrl}${this.endPointName}`, product)
  }

}
