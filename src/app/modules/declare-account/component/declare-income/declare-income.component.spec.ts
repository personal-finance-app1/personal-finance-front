import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclareAccountService } from '../../service/declare-account.service';
import { DeclareIncomeComponent } from './declare-income.component';

describe('DeclareIncomeComponent', () => {
  let component: DeclareIncomeComponent;
  let fixture: ComponentFixture<DeclareIncomeComponent>;
  let service: DeclareAccountService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclareIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclareIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(DeclareAccountService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updateIncome()', () => {
    xit('should call updateAccountsTable', () => {
      let spy = spyOn(service, 'updateAccountsTable');
      component.updateAccount(0);
      expect(spy).toHaveBeenCalled();
    });

    xit('user input is negative', () => {
      spyOn(service, 'updateAccountsTable');
      //component.account.expenses = -1;
      component.updateAccount(-1);
      expect(component.error).toBe("Error: Input must be positive.");
      expect(component.account.expenses).toEqual(0);
    });

    xit('user input has a over two decimal places', () => {
      spyOn(service, 'updateAccountsTable');
      //component.account.expenses = 1.001;
      component.updateAccount(1.001);
      expect(component.error).toBe("Error: Input cannot exceed two decimal places.");
      expect(component.account.expenses).toEqual(0);
    });
  });

});
