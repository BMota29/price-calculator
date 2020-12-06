import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../models/item.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http: HttpClient) {
  }

  async fetchItems(categoryId: number): Promise<Item[]> {
    const response: any = await this.http.get('assets/config.json').toPromise();
    return (response.items as Item[]).filter(item => item.categoryId === categoryId);
  }

  async fetchCategories(categoryId: number): Promise<Category[]> {
    const response: any = await this.http.get('assets/config.json').toPromise();
    return (response.categories as Category[]).filter(category => category.id === categoryId);
  }


}
