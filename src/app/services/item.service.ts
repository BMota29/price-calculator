import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[];

  constructor() {
    this.items = [];
  }

  public getItemsTotalValue = (): number => {
    let total = 0;
    this.items.forEach(item => total += item.value);
    return total;
  }

  public setItem = (item: Item): void => {
    this.items.push(item);
  }

  public resetItems = (): void => {
    this.items = [];
  }


}
