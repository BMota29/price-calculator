import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Item } from 'src/app/models/item.model';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-items-board',
  templateUrl: './items-board.component.html',
  styleUrls: ['./items-board.component.scss']
})
export class ItemsBoardComponent implements OnInit {

  @Input()
  categoryId!: number;
  categoryName!: string;
  items: Item[];

  constructor(private catalogueService: CatalogueService) {
    this.items = [];
  }

  ngOnInit(): void {
    this.fetchItems();
    this.fetchCategory();
  }

  fetchItems(): void {
    this.catalogueService.fetchItems(this.categoryId).then((items) => {
      this.items = items;
    });
  };

  fetchCategory(): void {
    this.catalogueService.fetchCategories(this.categoryId).then(category => {
      this.categoryName = category[0].description;
    });
  }

}
