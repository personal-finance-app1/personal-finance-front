import { TestBed } from '@angular/core/testing';

import { DeclareIncomeService } from './declare-income.service';

describe('DeclareIncomeService', () => {
  let service: DeclareIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclareIncomeService);

    //let income = service.income;   ?Doesnt seem to work
  });

  //providers[DeclareIncomeService]
  //Number("unicorn") == //NaN 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be a number', () => { //Do we need it
    expect(service.income).toEqual(jasmine.any(Number));
  });

  //Is testing input validation
  //Or if the function/method is working correctly

  //input validiation
  //testing medium, if the program is running as intended
  //code can change as revisions or new acomplishments are found
  it('should be greater than zero', () => { //Solved by the min attribute in html
    
    expect(service.income).toBeGreaterThanOrEqual(0);
  });

  it('should not have more than two decimals', () =>{ //Solved by the step attribute

  });

});
