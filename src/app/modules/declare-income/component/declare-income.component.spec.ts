import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclareIncomeService } from '../service/declare-income.service';
import { DeclareIncomeComponent } from './declare-income.component';

describe('DeclareIncomeComponent', () => {
  let component: DeclareIncomeComponent;
  let fixture: ComponentFixture<DeclareIncomeComponent>;
  let service: DeclareIncomeService;

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
    service = TestBed.inject(DeclareIncomeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit method', () => {
    xit('should call the sendIncome method in the declare-incomeService', () => { // Successful
      let spy = spyOn(service, 'sendIncome');
      let income = 100;
      component.onSubmit(100);
      expect(spy).toHaveBeenCalled();
    });

    xit('should be non-negative', () => {
      spyOn(service, 'sendIncome');
      component.account.income = -1;
      component.onSubmit(-1);
      expect(component.error).toBe("Error: Input must be positive.");
      expect(component.account.income).toEqual(0); //setting user input to 0
    });

    xit('should have a correct decimal in place', () => {
      spyOn(service, 'sendIncome');
      component.account.income = 1.001;// 0-2 numbers after decimal are good inputs
      component.onSubmit(1.001);
      expect(component.error).toBe("Error: Input cannot exceed two decimal places.");
      expect(component.account.income).toEqual(0); //setting user input to 0
    });

  });

});
