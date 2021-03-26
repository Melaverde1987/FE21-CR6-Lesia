import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  home: string;
  blog: string;
  travels: string;

  constructor() {
    this.home = 'Home';
    this.blog = 'Blog';
    this.travels = 'Travels';
  }

  ngOnInit(): void {
  }

}
