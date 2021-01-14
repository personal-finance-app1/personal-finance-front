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
      declarations: [ DeclareExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclareExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateAccountsTable', () => {
    spy = spyOn(service, 'updateAccountsTable');
    component.updateExpenses();
    expect(spy).toHaveBeenCalled();
  });


});
