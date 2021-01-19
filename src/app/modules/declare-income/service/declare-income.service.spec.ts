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
  });
});

