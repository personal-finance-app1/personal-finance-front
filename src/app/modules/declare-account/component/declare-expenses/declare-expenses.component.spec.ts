import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclareAccountService } from '../../service/declare-account.service';
import { DeclareExpensesComponent } from './declare-expenses.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { Account } from 'src/app/models/account';

describe('DeclareExpensesComponent', () => {
  let component: DeclareExpensesComponent;
  let fixture: ComponentFixture<DeclareExpensesComponent>;
  let service: DeclareAccountService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
      declarations: [DeclareExpensesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclareExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(DeclareAccountService);
    component.account = new Account(0, "", "", 0, 0, 0)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updateAccount()', () => {
    xit('should call updateAccountsTable', () => {
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
