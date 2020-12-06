import { DecimalPipe } from '@angular/common';

export class Item {
    id: number;
    description: string;
    value: number;
    categoryId: number;

    constructor(id: number, description: string, value: number, categoryId: number) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.categoryId = categoryId;
    }
}