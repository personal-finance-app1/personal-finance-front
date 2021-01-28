import { TestBed } from '@angular/core/testing';
import { Account } from 'src/app/models/account';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DeclareAccountService } from './declare-account.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';

describe('DeclareAccountService', () => {

  let service: DeclareAccountService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
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
    it('should return Observable that matches the mocked data', () => { // Successful
      const mockedAccount = new Account(0,"","",0,0,0);

      service.updateAccountsTable(mockedAccount).subscribe((accountData: Account) => {
        expect(accountData).toEqual(mockedAccount);
      });

      const request = httpTestingController.expectOne(`${environment.apiUrl}/accounts`);
      expect(request.request.method).toEqual('PATCH');
      request.flush(mockedAccount);
    });
  });
});
