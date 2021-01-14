import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectionComponent } from './projection.component';

describe('ProjectionComponent', () => {
  let component: ProjectionComponent;
  let fixture: ComponentFixture<ProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have account', () => {
    expect(component.account).toBeTruthy();
  });
  
  xit('should create chart', ()=> {
    component.createChart();
    expect(component.chart).toBeTruthy();
  });

 describe('get the account', () => {
   beforeAll(() => {
    component.getAccount();
   });
   it('get income', ()=> {
     expect(component.account.income).toBeGreaterThan(0);
   });
   it('get expenses', ()=> {
    expect(component.account.expenses).toBeGreaterThan(0);
  });
  it('get balance', ()=> {
    expect(component.account.balance).toBeGreaterThan(0);
  });
 });
});
