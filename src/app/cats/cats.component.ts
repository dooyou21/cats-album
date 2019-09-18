import { Component, OnInit } from '@angular/core';
import Cat from '../class/cat';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
})
export class CatsComponent implements OnInit {
  cats: Cat[] = [];

  constructor(private catService: CatService) {}

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.catService.getCats().subscribe(cats => (this.cats = cats));
  }
}
