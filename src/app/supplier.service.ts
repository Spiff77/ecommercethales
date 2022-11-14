import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {Supplier} from './model/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  endPointName = '/suppliers'

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Supplier[]>{
    return this.http.get<Supplier[]>(`${environment.apiUrl}${this.endPointName}`)
  }

  public add(supplier: Supplier): Observable<Supplier>{
    return this.http.post<Supplier>(`${environment.apiUrl}${this.endPointName}`, supplier)
  }

}
