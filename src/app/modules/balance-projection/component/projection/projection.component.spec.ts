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

 xit('account does not exist', () => {
    expect(component.account).toBeFalsy();
 });
});
