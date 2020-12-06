import { TestBed } from '@angular/core/testing';

import { SumService } from './sum.service';

describe('SumService', () => {
  let service: SumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
