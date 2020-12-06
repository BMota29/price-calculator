import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class SumService {

  total: number;
  itemsAdded: number[];

  constructor() {
    this.total = 0;
    this.itemsAdded = [];
  }

  public getItemsTotalValue = (): number => {
    return this.total;
  }

  public getItemsTotalAdded = (id: number): number => {
    let counter = 0;
    this.itemsAdded.filter(item => item === id).forEach(item => counter++);
    return counter;
  }

  public setItem = (item: Item): void => {
    this.total += item.value;
    this.itemsAdded.push(item.id);
  }

  public resetItems = (): void => {
    this.total = 0;
    this.itemsAdded = [];
  }


}
