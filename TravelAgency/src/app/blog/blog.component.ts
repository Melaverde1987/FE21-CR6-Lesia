import { Component, OnInit } from '@angular/core';

import { blogitems } from '../blog';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogitems = blogitems;

  constructor() { }

  ngOnInit(): void {
  }

}
