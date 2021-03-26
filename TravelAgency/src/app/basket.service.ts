import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class BasketService {
  items = [];

  constructor() { }

  addToBasket(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  itemsLength() {
    return this.items.length;
  }

  doSum() {
    let totalPrice: number = 0;
    this.items.forEach(value => totalPrice += value.price);
    console.log(totalPrice);
    return totalPrice;
  }

  clearBasket() {
    this.items = [];
    return this.items;
  }
}
