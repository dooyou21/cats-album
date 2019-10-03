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
    this.catService.getCats().subscribe(cats => (this.cats = this.cats.concat(cats)));
  }

  onScroll(e) {
    // TODO: HostListener 찾아보기. body scroll 받아오는 방법은 없는지
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    if (scrollPercent === 100) {
      // TODO: throttle 어떻게 걸지... 70%일때 한번 받아오는 걸 하고싶은데
      this.getCats();
    }
  }
}
