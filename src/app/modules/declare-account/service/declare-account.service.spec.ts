import { TestBed } from '@angular/core/testing';
import { Account } from 'src/app/models/account';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DeclareAccountService } from './declare-account.service';
import { environment } from 'src/environments/environment';

describe('DeclareAccountService', () => {

  let service: DeclareAccountService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeclareAccountService]
    });

    service = TestBed.inject(DeclareAccountService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  afterEach(()=>{
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('updateAccountsTable method', () => {
    xit('should return Observable that matches the mocked data', () => { // Successful
      const mockedAccount = new Account(0,"","",0,0,0);

      service.updateAccountsTable(mockedAccount).subscribe((accountData: Account) => {
        expect(accountData).toEqual(mockedAccount);
      });

      const request = httpTestingController.expectOne(`${environment.apiUrl}/account`);
      expect(request.request.method).toEqual('PUT');
      request.flush(mockedAccount);
    });
  });
});
