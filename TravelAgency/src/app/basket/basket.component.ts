import { Component, OnInit, DoCheck } from '@angular/core';

import { BasketService } from '../basket.service';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  items;
  basketLength;
  price;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.items = this.basketService.getItems();
  }

  ngDoCheck() {
    this.basketLength = this.basketService.itemsLength();
    this.price = this.basketService.doSum();
  }

  onSubmit() {
    // Process checkout data here
    console.warn('Your order has been submitted');
    this.items = this.basketService.clearBasket();
  }

}
