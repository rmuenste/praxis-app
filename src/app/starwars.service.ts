import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  character;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    //return this.http.get('https://swapi.co/api/people/1/');
    return this.http.get<any[]>('https://praxismuenster.de/wp-json/wp/v2/posts?_embed', {
      params: {
        per_page: '6'
      }
    });
  }
}
