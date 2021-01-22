import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclareBalanceComponent } from './declare-balance.component';

describe('DeclareBalanceComponent', () => {
  let component: DeclareBalanceComponent;
  let fixture: ComponentFixture<DeclareBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclareBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclareBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.getAccount();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  xit('should have account', () => {
    expect(component.account).toBeTruthy();
  });
  
  xit('should create chart', () => {
    component.createChart();
    expect(component.chart).toBeTruthy();
  });

 describe('get the account', () => {
   xit('get income', ()=> {
     expect(component.account.income).toBeGreaterThan(0);
   });
   xit('get expenses', ()=> {
    expect(component.account.expenses).toBeGreaterThan(0);
  });
 });
});
