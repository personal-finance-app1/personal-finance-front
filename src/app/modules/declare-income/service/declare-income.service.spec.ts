import { TestBed } from '@angular/core/testing';

import { DeclareIncomeService } from './declare-income.service';

describe('DeclareIncomeService', () => {
  let service: DeclareIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclareIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//jasmine testing


//npm test
//karma