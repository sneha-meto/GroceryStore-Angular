
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = "http://apolis-grocery.herokuapp.com/api";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/category`)
  }

  getSubcategoryByCatId(catId: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/subcategory/${catId}`)
  }

  getProductsByCatId(catId: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/products/cat/${catId}`)
  }

  getProductsBySubId(subId: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/products/sub/${subId}`)
  }

  getProductById(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/products/${id}`)
  }

}
