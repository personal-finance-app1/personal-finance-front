import { TestBed } from '@angular/core/testing';

import { BalanceService } from './balance.service';

describe('BalanceService', () => {
  let service: BalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalanceService);
  });


  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('validateAccountBalance', () => {
    it('validate account balance should return true for positive balances', () => {
      expect(service.validateAccountBalance(100)).toBeTruthy();
    });
  });

  describe('validateAccountBalance', () => {
    it('validate account balance should return false for a balance of 0', () => {
      expect(service.validateAccountBalance(0)).toBeFalsy();
    });
  });

  describe('validateAccountBalance', () => {
    it('validate account balance should return false for negative balances', () => {
      expect(service.validateAccountBalance(-100)).toBeFalsy();
    });
  });

  describe('setBalance', () => {
    it('set balance should return true for positive balances', () => {
      expect(service.setBalance(100)).toBeTruthy();
    });
  });

  describe('getBalance', () => {
    it('get balance should return number with a set balance', () => {
      service.setBalance(10);
      expect(service.getBalance()).toBeTruthy();
    });
  });
});
