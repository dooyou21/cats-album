import { Component, OnInit } from '@angular/core';
import Cat from '../class/cat';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
})
export class CatsComponent implements OnInit {
  cat: Cat = {
    id: 'MTgyMTg3Mw',
    url: 'https://cdn2.thecatapi.com/images/MTgyMTg3Mw.jpg',
  };

  constructor() {}

  ngOnInit() {}
}
