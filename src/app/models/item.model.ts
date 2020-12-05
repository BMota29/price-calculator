import { DecimalPipe } from '@angular/common';

export class Item {
    name: string;
    value: number;
    imagePath: string;

    constructor(name: string, value: number, imagePath: string) {
        this.name = name;
        this.value = value;
        this.imagePath = imagePath;
    }
}