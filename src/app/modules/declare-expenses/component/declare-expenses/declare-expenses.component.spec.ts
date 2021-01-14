import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclareExpensesComponent } from './declare-expenses.component';

describe('DeclareExpensesComponent', () => {
  let component: DeclareExpensesComponent;
  let fixture: ComponentFixture<DeclareExpensesComponent>;

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
});
