import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Account } from 'src/app/models/account';
import { DeclareAccountService } from '../../service/declare-account.service';
import { DeclareExpensesComponent } from './declare-expenses.component';

describe('DeclareExpensesComponent', () => {
  let component: DeclareExpensesComponent;
  let fixture: ComponentFixture<DeclareExpensesComponent>;
  let service: DeclareAccountService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ DeclareExpensesComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclareExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(DeclareAccountService);
    component.account = new Account(0,0,"",0,0,0);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updateExpenses()', () => {
    xit('should call updateAccountsTable', () => {
      let spy = spyOn(service, 'updateAccountsTable');
      component.updateAccount(0);
      expect(spy).toHaveBeenCalled();
    });

    xit('user input is negative', () => {
      spyOn(service, 'updateAccountsTable');
      component.updateAccount(-1);
      expect(component.error).toBe("Error: Input must be positive.");
      expect(component.account.expenses).toEqual(0);
    });

    xit('user input has a over two decimal places', () => {
      spyOn(service, 'updateAccountsTable');
      component.updateAccount(1.001);
      expect(component.error).toBe("Error: Input cannot exceed two decimal places.");
      expect(component.account.expenses).toEqual(0);
    });
  });

});
