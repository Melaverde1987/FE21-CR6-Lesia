import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { BasketService } from '../basket.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  template: 'The href is: {{href}}' //find url for adding class for home
})
export class NavbarComponent implements OnInit, DoCheck {

  home: string;
  blog: string;
  travels: string;
  basketLength;
  
  href: string = "";

  constructor(private router: Router, private basketService: BasketService) {
    this.home = 'Home';
    this.blog = 'Blog';
    this.travels = 'Travels';
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.href = this.router.url;
    console.log(this.router.url);
    this.basketLength = this.basketService.itemsLength();
  }

}
