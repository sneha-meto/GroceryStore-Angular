import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://apolis-grocery.herokuapp.com/api";
  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, data)
  }
  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, data)
  }
  logout() {
    localStorage.clear()
  }
  checkToken(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;

    }
  }
}
