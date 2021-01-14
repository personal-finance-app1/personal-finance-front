import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclareIncomeService } from '../service/declare-income.service';

import { DeclareIncomeComponent } from './declare-income.component';

describe('DeclareIncomeComponent', () => {
  let component: DeclareIncomeComponent;
  let fixture: ComponentFixture<DeclareIncomeComponent>;
  let service: DeclareIncomeService;
  let spy: any;

  console.log("Component Test file")
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

    //component.onSubmit(); //Setting any sort of values if we had any
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call the sendIncome method on the declare-incomeService', () => {
  //   spy = spyOn(service, 'sendIncome');
  //   component.onSubmit();
  //   expect(spy).toHaveBeenCalled();
  // });

  describe('onSubmit method', () => {
    xit('should have userInput', () => { // Successful
      //component.userInput = 15;
      expect(component.userInput).toBeTruthy();
    });
    xit('if userInput is null', () => { // Negative
      //component.userInput = null;
      expect(component.userInput).toBeFalsy();
    });
  });

});