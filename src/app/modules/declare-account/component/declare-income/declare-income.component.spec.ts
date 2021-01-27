import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Account } from 'src/app/models/account';
import { DeclareAccountService } from '../../service/declare-account.service';
import { DeclareIncomeComponent } from './declare-income.component';

describe('DeclareIncomeComponent', () => {
  let component: DeclareIncomeComponent;
  let fixture: ComponentFixture<DeclareIncomeComponent>;
  let service: DeclareAccountService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule ],
      declarations: [ DeclareIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclareIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(DeclareAccountService);
    component.account = new Account(0,"","",0,0,0);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updateAccount()', () => {
    it('should call updateAccountsTable', () => {
      let spy = spyOn(service, 'updateAccountsTable');
      component.updateAccount(0);
      expect(spy).toHaveBeenCalled();
    });

    it('user input is negative', () => {
      spyOn(service, 'updateAccountsTable');
      component.updateAccount(-1);
      expect(component.error).toBe("Error: Input must be positive.");
      expect(component.account.expenses).toEqual(0);
    });

    it('user input has a over two decimal places', () => {
      spyOn(service, 'updateAccountsTable');
      component.updateAccount(1.001);
      expect(component.error).toBe("Error: Input cannot exceed two decimal places.");
      expect(component.account.expenses).toEqual(0);
    });
  });

});
