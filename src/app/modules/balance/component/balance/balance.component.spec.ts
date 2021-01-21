import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceComponent } from './balance.component';
import { BalanceService } from '../../service/balance.service';

describe('BalanceComponent', () => {
  let component: BalanceComponent;
  let service: BalanceService;
  let fixture: ComponentFixture<BalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalanceComponent],
      providers: [BalanceService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(BalanceService);
    fixture.detectChanges();
  });

  describe("Component init", () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  })


  describe("Account balance on component init.", () => {
    it('should have a an account balance value of null to indicate the account balance has not been declared', () => {
      expect(component.accountBalance).toBeNull();
    })
  })


  describe("declareAccountBalance()", () => {
    it('should not have an account balance of null and a renderDeclareBalanceWidget of true, as the balance has been declared', () => {
      component.declareAccountBalance();
      //ensure test method modified state accordingly
      expect(component.renderDeclareBalanceWidget == false).toBeTrue()
    })
  })

  describe("updateAccountBalance()", () => {
    it('should not have a null balance value after calling update balance.', () => {
      component.accountBalance = 10; //Imitate user giving input.
      component.updateAccountBalance();
      expect(component.accountBalance).toBeGreaterThan(0);
    })
  })



  describe("invalidMessage init value", () => {
    it('should be an empty string', () => {
      //when we initialize our component, then there should be no error message, as the
      //user has not made an error.
      expect(component.invalidMessage).toBe('')
    });
  })

  describe("INVALID_BALANCE_MESSAGE init value", () => {
    it('should not be an empty string', () => {
      //Not sure what the invalid message is yey, but we're 100% it will be truthy.
      expect(component.INVALID_BALANCE_MESSAGE).toBeTruthy()
    });
  })
});
