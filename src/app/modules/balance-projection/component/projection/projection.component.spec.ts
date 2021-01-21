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

  it('should have account', () => {
    expect(component.account).toBeTruthy();
  });
  
  it('should create chart', () => {
    let chart = component.createChart();
    console.log(component.lineChartData[0].data);
    expect(component.lineChartData[0].data.length > 0);
  });

 describe('get the account', () => {
   it('get income', ()=> {
     expect(component.account.income).toBeGreaterThan(0);
   });
   it('get expenses', ()=> {
    expect(component.account.expenses).toBeGreaterThan(0);
  });
 });
});
