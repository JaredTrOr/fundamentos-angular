import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getUsers() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }

  getUserById(id : number) {
    return this.http.get(`http://jsonplaceholder.typicode.com/users/${id}`);
  }

  getPosts() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts');
  }

}
