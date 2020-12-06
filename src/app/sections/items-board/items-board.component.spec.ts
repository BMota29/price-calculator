import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsBoardComponent } from './items-board.component';

describe('ItemsBoardComponent', () => {
  let component: ItemsBoardComponent;
  let fixture: ComponentFixture<ItemsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
