import { TestBed } from '@angular/core/testing';

import { DeclareIncomeService } from './declare-income.service';

describe('DeclareIncomeService', () => {
  let service: DeclareIncomeService;

  let returnValue: number;
  let account: Account;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclareIncomeService);

     //httpSpy

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('sendIncome method', () => {

    it('should have userInput', () => { // Successful
      expect(service.account).toBeTruthy();
    });

    it('should return positive status code', () => { // Successful
      account = new Account(500, 300, 500);
      returnValue = service.sendIncome(account); // leverage httpSpy
      expect(returnValue).toBeLessThan(300);
    });

    xit('should return a negative status code', () => { // Negative
      account = new Account(-500, -300, -500);
      returnValue = service.sendIncome(account); // leverage httpSpy
      expect(returnValue).toBeGreaterThanOrEqual(400);
    });

    xit('should be given the correct parameters', () => { // Negative

      returnValue = service.sendIncome(account); // leverage httpSpy
      expect(returnValue).toBeFalsy();
    });

    //accomodate for an account that is passed with no validation,
    //such as sendIncome being called from a different method


  });
});

// describe('onSubmit method', () => {
//   it('should call the sendIncome method in the declare-incomeService', () => { // Successful
//     spy = spyOn(service, 'sendIncome');
//     component.onSubmit();
//     expect(spy).toHaveBeenCalled();
//   });
  
//   xit('should have userInput', () => { // Successful
//     //component.userInput = 15;
//     expect(component.userInput).toBeTruthy();
//   });

//   xit('if userInput is null', () => { // Negative
//     //component.userInput = null;
//     expect(component.userInput).toBeFalsy();
//   });

//   xit('if userInput is negative', () => { // Negative
//     expect(component.userInput).toBeLessThan(0);
//   });

//   xit('if userInput is incorrectly using the decimal', () => { // Negative
//     expect(component.userInput).toBeFalsy();
//   });
// });