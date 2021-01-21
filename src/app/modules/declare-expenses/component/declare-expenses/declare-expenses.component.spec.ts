import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclareExpensesService } from '../../service/declare-expenses.service';
import { DeclareExpensesComponent } from './declare-expenses.component';

describe('DeclareExpensesComponent', () => {
  let component: DeclareExpensesComponent;
  let fixture: ComponentFixture<DeclareExpensesComponent>;
  let service: DeclareExpensesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
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
    it('should call updateAccountsTable', () => {
      let spy = spyOn(service, 'updateAccountsTable');
      component.updateExpenses();
      expect(spy).toHaveBeenCalled();
    });

    it('user input is negative', () => {
      spyOn(service, 'updateAccountsTable');
      component.account.expenses = -1;
      component.updateExpenses();
      expect(component.error).toBe("Error: Input must be positive.");
      expect(component.account.expenses).toEqual(0);
    });

    it('user input has a over two decimal places', () => {
      spyOn(service, 'updateAccountsTable');
      component.account.expenses = 1.001;
      component.updateExpenses();
      expect(component.error).toBe("Error: Input cannot exceed two decimal places.");
      expect(component.account.expenses).toEqual(0);
    });
  });

});
