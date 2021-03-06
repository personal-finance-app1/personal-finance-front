import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Account } from 'src/app/models/account';
import { ProjectionComponent } from './projection.component';

describe('ProjectionComponent', () => {
  let component: ProjectionComponent;
  let fixture: ComponentFixture<ProjectionComponent>;
  let testAccount: Account;
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
    testAccount = new Account(1,"jasmine","test-account",300.12,210.11,100.14);
    component.account = testAccount
    //component.getAccount();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have account', () => {
    expect(component.account).toBeTruthy();
  });
  
  it('should have data', () => {
    component.createChart();
    expect(component.lineChartData[0].data.length).toBeGreaterThan(0);
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
