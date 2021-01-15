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

  it('validate account balance should return true for positive balances', () => {
    expect(service.validateAccountBalance(100)).toBeTruthy();
  });

  it('validate account balance should return false for negative balances', () => {
    expect(service.validateAccountBalance(-100)).toBeFalsy();
  });

  it('set balance should return true', () => {
    expect(service.setBalance(100)).toBeTruthy();
  });

  it('set balance should return false', () => {
    expect(service.setBalance(-100)).toBeFalsy();
  });

  it('get balance should return null', () => {
    expect(service.getBalance()).toBeNull();
  });

  it('get balance should return number', () => {
    service.setBalance(10);
    expect(service.getBalance()).toBeTruthy();
  });

});
