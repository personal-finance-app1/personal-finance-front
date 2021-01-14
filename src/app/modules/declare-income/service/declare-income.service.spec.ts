import { TestBed } from '@angular/core/testing';

import { DeclareIncomeService } from './declare-income.service';

describe('DeclareIncomeService', () => {
  let service: DeclareIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclareIncomeService);

    service.sendIncome(15);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('sendIncome method', () => {
    xit('should have userInput', () => { // Successful
      //component.userInput = 15;
      expect().toBeTruthy(); //httpSpy
    });
    xit('if userInput is null', () => { // Negative
      //component.userInput = null;
      expect().toBeFalsy();
    });
  });


});