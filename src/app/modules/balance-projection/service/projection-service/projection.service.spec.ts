import { TestBed } from '@angular/core/testing';
import { ProjectionService } from './projection.service';

describe('ProjectionService', () => {
  let service: ProjectionService;
  let chart: any;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ProjectionService] });
    service = TestBed.inject(ProjectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('calculateBalanceChart', () => {
    describe('with valid data', () => {
      xit('should create balance chart', () => {
        chart = service.calculateBalanceChart(1500,800,3000,6);
        expect(chart).toBeTruthy();
      });
    });
    describe('with invalid data', () => {
      xit('should not create balance chart', () => {
        chart = service.calculateBalanceChart(1500,800,3000,0);
        expect(chart).toBeFalsy();
      });
    });
    
  });
});
