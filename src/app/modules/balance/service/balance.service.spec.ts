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
    xit('validate account balance should return true for positive balances', () => {
      expect(service.validateAccountBalance(100)).toBeTruthy();
    });
  });

  describe('validateAccountBalance', () => {
    xit('validate account balance should return false for a balance of 0', () => {
      expect(service.validateAccountBalance(0)).toBeFalsy();
    });
  });

  describe('validateAccountBalance', () => {
    xit('validate account balance should return false for negative balances', () => {
      expect(service.validateAccountBalance(-100)).toBeFalsy();
    });
  });

  describe('setBalance', () => {
    xit('set balance should return true for positive balances', () => {
      expect(service.setBalance(100)).toBeTruthy();
    });
  });

  describe('setBalance', () => {
    xit('set balance should return false for negative balances', () => {
      expect(service.setBalance(-100)).toBeFalsy();
    });
  });

  describe('setBalance', () => {
    xit('set balance should return false for a balance of zero', () => {
      expect(service.setBalance(0)).toBeFalsy();
    });
  });

  describe('getBalance', () => {
    xit('get balance should return null with no set balance', () => {
      expect(service.getBalance()).toBeNull();
    });
  });

  describe('getBalance', () => {
    xit('get balance should return number with a set balance', () => {
      service.setBalance(10);
      expect(service.getBalance()).toBeTruthy();
    });
  });
});
