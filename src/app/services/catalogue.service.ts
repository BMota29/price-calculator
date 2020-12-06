import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http: HttpClient) {
  }

  async fetchItems(): Promise<Item[]> {
    const response: any = await this.http.get('assets/config.json').toPromise();
    return response.items as Item[];
  }

  async fetchCategories(): Promise<any> {
    const response: any = await this.http.get('assets/config.json').toPromise();
    return response.items as any;
  }


}
