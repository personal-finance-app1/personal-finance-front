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

  describe('caluclateIncomeExpenseChart', () => {
    describe('with valid data', () => {
      xit('should create chart data', () => {
        chart = service.caluclateIncomeExpenseChart(900, 300, 4);
        expect(chart).toBeTruthy();
      });
    });
    describe('with invalid data', () => {
      xit('should not create chart data', () => {
        chart = service.caluclateIncomeExpenseChart(900, 300, 0);
        expect(chart).toBeFalsy();
      });
    });
  });

  describe('calculateBalanceChart', () => {
    describe('with valid data', () => {
      xit('should create balance chart', () => {
        chart = service.calculateBalanceChart(900, 10);
        expect(chart).toBeTruthy();
      });
    });
    describe('with invalid data', () => {
      xit('should not create balance chart', () => {
        chart = service.calculateBalanceChart(900, 0);
        expect(chart).toBeFalsy();
      });
    });
    
  });
});
