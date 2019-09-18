import { Injectable } from '@angular/core';
import Cat from './class/cat';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private baseUrl = 'https://api.thecatapi.com/v1/';
  headers = new HttpHeaders({ 'x-api-key': '5f845da8-8e75-4d87-9d7c-e890be64a2c2' });

  constructor(private http: HttpClient) {}

  getCats(): Observable<Cat[]> {
    const path = 'images/search';
    const params = new HttpParams().set('limit', '30').set('size', 'small');
    return this.http.get<Cat[]>(`${this.baseUrl}${path}`, { headers: this.headers, params });
  }

  getCat(id: string): Observable<Cat> {
    const path = 'images/search';
    const params = new HttpParams().set('image_id', id);
    return this.http.get<Cat>(`${this.baseUrl}${path}`, { headers: this.headers, params });
  }
}
