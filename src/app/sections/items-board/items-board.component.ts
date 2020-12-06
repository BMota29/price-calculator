import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-items-board',
  templateUrl: './items-board.component.html',
  styleUrls: ['./items-board.component.scss']
})
export class ItemsBoardComponent implements OnInit {

  items: Item[];

  constructor(private catalogueService: CatalogueService) {
    this.items = [];
  }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    this.catalogueService.fetchItems().then((items) => {
      this.items = items;
    });
  };

}
