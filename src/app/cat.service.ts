import { Injectable } from '@angular/core';
import Cat from './class/cat';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor() {}

  getCats(): Observable<Cat[]> {
    return of([
      {
        id: 'MTgyMTg3Mw',
        url: 'https://cdn2.thecatapi.com/images/MTgyMTg3Mw.jpg',
      },
      {
        id: 'MTgyMTg3Mw',
        url: 'https://cdn2.thecatapi.com/images/MTgyMTg3Mw.jpg',
      },
    ]);
  }
}
