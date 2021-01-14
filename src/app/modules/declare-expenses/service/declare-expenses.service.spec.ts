import { TestBed } from '@angular/core/testing';

import { DeclareExpensesService } from './declare-expenses.service';

describe('DeclareExpensesService', () => {
  let service: DeclareExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclareExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
