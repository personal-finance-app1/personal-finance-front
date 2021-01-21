import { TestBed } from '@angular/core/testing';
import { DeclareExpensesService } from './declare-expenses.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Account } from 'src/app/models/account';

describe('DeclareExpensesService', () => {
  let service: DeclareExpensesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeclareExpensesService]
    });
    service = TestBed.inject(DeclareExpensesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#updateAccountsTable()', () => {
    xit('returned Observable should match the right data', () => {
      const mockAccount = new Account(0,0,0);

      service.updateAccountsTable(mockAccount).subscribe((accountData: Account) => {
        expect(accountData).toEqual(mockAccount);
      });

      const request = httpTestingController.expectOne(`${service.url}/expenses`);
      expect(request.request.method).toEqual('PUT');
      request.flush(mockAccount);
    });
  });
});
