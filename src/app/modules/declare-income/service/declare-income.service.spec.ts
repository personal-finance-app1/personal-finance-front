import { TestBed } from '@angular/core/testing';
import { Account } from 'src/app/models/account';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DeclareIncomeService } from './declare-income.service';
import { environment } from 'src/environments/environment';

describe('DeclareIncomeService', () => {

  let service: DeclareIncomeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeclareIncomeService]
    });

    service = TestBed.inject(DeclareIncomeService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  afterEach(()=>{
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('sendIncome method', () => {
    xit('should return Observable that matches the mocked data', () => { // Successful
      const mockedAccount = new Account(0,0,"",0,0,0);

      service.sendIncome(mockedAccount).subscribe((accountData: Account) => {
        expect(accountData).toEqual(mockedAccount);
      });

      const request = httpTestingController.expectOne(`${environment.apiUrl}/income`);
      expect(request.request.method).toEqual('PUT');
      request.flush(mockedAccount);
    });
  });
});
