import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private baseURL = 'http://localhost:3200';  // 🔁 CHANGE from 3000 to 3200

  constructor(private http: HttpClient) { }

  addUser(data: any) {
    return this.http.post(`${this.baseURL}/user`, data);  // ✅ should match your backend route
  }

  getUser() {
    return this.http.get(`${this.baseURL}/login`);
  }
}
