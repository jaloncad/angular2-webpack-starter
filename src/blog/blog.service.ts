import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {
  private http: Http;
  constructor(http: Http) { 
      this.http = http;
  }

  get blogs() {
    return this.http.get(`http://localhost:4000/post`)
      .map(response => response.json());
  }
}