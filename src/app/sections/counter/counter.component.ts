import { _ParseAST } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SumService } from '../../services/sum.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(private itemService: SumService,
              private sumService: SumService) { }

  ngOnInit(): void {
  }

  resetItems(): void {
    this.sumService.resetItems();
  }

  get itemTotalValue(): number {
    return this.itemService.getItemsTotalValue();
  }

}
