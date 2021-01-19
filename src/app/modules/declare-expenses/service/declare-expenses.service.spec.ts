import { TestBed } from '@angular/core/testing';

import { DeclareExpensesService } from './declare-expenses.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeclareExpensesService', () => {
  let service: DeclareExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DeclareExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
