import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { DeclareExpensesService } from './declare-expenses.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeclareExpensesService', () => {
  let service: DeclareExpensesService;
  let httpClient:HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DeclareExpensesService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('updateAccountsTable()', () => {

    it('should test the connection', () => {
     let spy: any;
    spy =  spyOn(httpClient,"put");
      expect(spy).toHaveBeenCalled();
    });

  });

});
