import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclareExpensesService } from '../../service/declare-expenses.service';

import { DeclareExpensesComponent } from './declare-expenses.component';

describe('DeclareExpensesComponent', () => {
  let component: DeclareExpensesComponent;
  let fixture: ComponentFixture<DeclareExpensesComponent>;
  let spy: any;
  let service: DeclareExpensesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeclareExpensesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclareExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(DeclareExpensesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updateExpenses()', () => {
    xit('should call updateAccountsTable', () => {
      spy = spyOn(service, 'updateAccountsTable')
      component.updateExpenses();
      expect(spy).toHaveBeenCalled();
    });

    xit('user input is negative', () => {
      spy = spyOn(service, 'updateAccountsTable');
      component.account.expenses = -1;
      component.updateExpenses();
      expect(component.error).toBe("Error: Input must be positive.");
      // expect input reset
    });

    xit('user input has a decimal', () => {
      spy = spyOn(service, 'updateAccountsTable');
      component.account.expenses = 1.01;
      component.updateExpenses();
      expect(component.error).toBe("Error: Input must be an integer.");
      // expect input reset
    });
  });

});
