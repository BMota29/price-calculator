import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { SumService } from 'src/app/services/sum.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input()
  item!: Item;

  constructor(private sumService: SumService) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.sumService.setItem(this.item);
  }

  get itemAdded(): number {
    return this.sumService.getItemsTotalAdded(this.item.id);
  }

}
