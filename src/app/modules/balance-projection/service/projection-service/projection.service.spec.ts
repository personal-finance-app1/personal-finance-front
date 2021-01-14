import { TestBed } from '@angular/core/testing';
import { ProjectionService } from './projection.service';

describe('ProjectionService', () => {
  let service: ProjectionService;
  let chart: any;

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[ProjectionService]});
    service = TestBed.inject(ProjectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('caluclateIncomeExpenseChart', () => {
    xit('should create chart data', () => {
      let chart:any = service.caluclateIncomeExpenseChart(900,300,4);
      expect(chart).toBeTruthy();
    });
  });
  it('should create balance chart', () => {

    chart = service.calculateBalanceChart(900, 900);
    expect(chart).toBeTruthy();

  });

});
