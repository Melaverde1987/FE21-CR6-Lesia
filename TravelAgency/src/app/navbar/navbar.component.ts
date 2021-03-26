import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  template: 'The href is: {{href}}'
})
export class NavbarComponent implements OnInit {

  home: string;
  blog: string;
  travels: string;
  
  href: string = "";

  constructor(private router: Router) {
    this.home = 'Home';
    this.blog = 'Blog';
    this.travels = 'Travels';
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.href = this.router.url;
    console.log(this.router.url);
  }

}
