import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { travels } from '../travels';
import { BasketService } from '../basket.service';

@Component({
  selector: 'travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
  travels: any;

  constructor(private route: ActivatedRoute, private basketService: BasketService) { }

  addToBasket(travels) {
    this.basketService.addToBasket(travels);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.travels = travels[+params.get('travelId')];
    });
  }

}
