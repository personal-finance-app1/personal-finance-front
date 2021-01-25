import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclareBalanceComponent } from './declare-balance.component';
import { BalanceService } from '../../service/balance.service';
import { InjectionToken } from '@angular/core';

describe('DeclareBalanceComponent', () => {
  let component: DeclareBalanceComponent;
  let fixture: ComponentFixture<DeclareBalanceComponent>;
  //(alias) const MAT_DIALOG_DATA: InjectionToken<any> this is what angular will beinjecting into our cstr, so we will mock it with jasmine.createSPyObj
  let mockedInjectionToken: InjectionToken<any>; 
  let service: BalanceService;

  beforeEach(async () => {
    mockedInjectionToken = jasmine.createSpyObj("InjectionToken<any>",['toString'],[]); //The token has only one method which is to string.
    await TestBed.configureTestingModule({
      declarations: [ DeclareBalanceComponent ],
      providers: [BalanceService]
    })
    .compileComponents();
  });


  beforeEach(() => {
    service = TestBed.inject(BalanceService);
    component = new DeclareBalanceComponent(mockedInjectionToken,service);
  });

  

  describe("component creation", () => {
    xit('should be created', () => {
      expect(component).toBeTruthy();
    });
  })

  describe('declareAccountBalance()', () => {
    xit('should not update the balance', () => {
      const validServiceTestBalanceValue: number  = 100;
      const invalidDeclareBalanceValue:number = -100

      component.balanceService.setBalance(validServiceTestBalanceValue);
      component.declareBalance = invalidDeclareBalanceValue;
      component.declareAccountBalance();
      expect(service.getBalance()).toEqual(validServiceTestBalanceValue);
    })
  })
  describe('declareAccountBalance()', () => {
    xit('should  update the balance', () => {
      const validServiceTestBalanceValue: number  = 100;
      const updatedDeclareBalanceValue:number = 101;

      component.balanceService.setBalance(validServiceTestBalanceValue);
      component.declareBalance = updatedDeclareBalanceValue;
      component.declareAccountBalance();
      expect(service.getBalance()).toEqual(updatedDeclareBalanceValue);
    })
  })

});
