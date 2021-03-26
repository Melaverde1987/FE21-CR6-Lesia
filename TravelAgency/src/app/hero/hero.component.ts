import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroHeading: string;

  constructor() {
    this.heroHeading = 'The happiest place on Earth';
   }

  ngOnInit(): void {
  }

}
