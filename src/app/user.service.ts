import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../config';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  id = 2;
  getUserInfo() {
   // return this.http.get(`${API_URL}/${this.id}`);
  }
}

