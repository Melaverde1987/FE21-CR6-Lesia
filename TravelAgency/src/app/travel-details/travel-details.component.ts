import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { travels } from '../travels';

@Component({
  selector: 'travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
  travels: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.travels = travels[+params.get('travelId')];
    });
  }

}
