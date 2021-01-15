import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclareIncomeService } from '../service/declare-income.service';
import { DeclareIncomeComponent } from './declare-income.component';

describe('DeclareIncomeComponent', () => {
  let component: DeclareIncomeComponent;
  let fixture: ComponentFixture<DeclareIncomeComponent>;
  let service: DeclareIncomeService;
  let spy: any;

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
      spy = spyOn(service, 'sendIncome');
      component.onSubmit();
      expect(spy).toHaveBeenCalled();
    });

    xit('should have a correct decimal in place', () => {
      spy = spyOn(service, 'sendIncome');
      component.account.income = 1.001;// 0-2 numbers after decimal are good inputs
      component.onSubmit();
      expect(component.error).toBe("Error: Input must be an integer.");
      expect(component.userInput).toBeFalsy(); //setting user input to 0
    });

    xit('should be non-negative', () => {
      spy = spyOn(service, 'sendIncome');
      component.account.income = -50;
      expect(component.error).toBe("Error: Input must be positive.");
      expect(component.userInput).toBeFalsy(); //setting user input to 0
    });
  });
});