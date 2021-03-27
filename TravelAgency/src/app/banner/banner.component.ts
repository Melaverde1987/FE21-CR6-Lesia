import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  title: string;
  subtitle: string;
  firstItem: string;
  secondItem: string;
  thirdItem: string;
  firstText: string;
  secondText: string;
  thirdText: string;

  constructor() {
    this.title = 'Why we are the best';
    this.subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip';
    this.firstItem = 'Amazing Travel';
    this.secondItem = 'Nice support';
    this.thirdItem = 'Discover new destinations';

    this.firstText = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur';
    this.secondText = 'Nisi scelerisque eu ultrices vitae. Morbi tristique senectus et netus et malesuada. Augue lacus viverra vitae congue eu consequat. Ante in nibh mauris cursus mattis molestie a iaculis';
    this.thirdText = 'Ac odio tempor orci dapibus ultrices in iaculis nunc. Tristique risus nec feugiat in. Dolor sit amet consectetur adipiscing elit ut';
   }

  ngOnInit(): void {
  }

}
