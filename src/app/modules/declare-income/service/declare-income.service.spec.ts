import { TestBed } from '@angular/core/testing';
import { Account } from 'src/app/models/account';
import { DeclareIncomeService } from './declare-income.service';

describe('DeclareIncomeService', () => {

  let service: DeclareIncomeService;
  let spy: any;
  let account: Account;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclareIncomeService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('sendIncome method', () => {

    it('should return positive status code', () => { // Successful
      account = new Account(300, 400, 500);
      expect(service.sendIncome(account)).toBeLessThan(300);
    });

    // xit('should return a negative status code', () => { // Negative
    //   account = new Account(-300, 400, 500);
    //   expect(service.sendIncome(account)).toBeGreaterThan(400);  // Positive status code
    // });

    //accomodate for an account that is passed with no validation,
    //such as sendIncome being called from a different method

    //spy = spyOn(http, 'put');
    // leverage httpSpy

  });
});

// service.sendIncome(account).subscribe((response) => {
//   expect(response.status).toEqual(200);
// });