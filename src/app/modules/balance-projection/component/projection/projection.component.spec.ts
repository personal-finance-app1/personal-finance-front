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
});
