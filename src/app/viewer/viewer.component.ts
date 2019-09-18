import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import Cat from '../class/cat';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent implements OnInit {
  url: string;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.getImageUrl();
  }

  getImageUrl(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.url = `https://cdn2.thecatapi.com/images/${id}.jpg`;
  }

  goBack(): void {
    this.location.back();
  }
}
