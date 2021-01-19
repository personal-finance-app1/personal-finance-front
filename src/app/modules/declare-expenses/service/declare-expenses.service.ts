import { Injectable } from '@angular/core';
import { Account } from 'src/app/models/account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeclareExpensesService {

  url:string = "localhost:4200/personalfinance";

  constructor(private httpClient:HttpClient) { }
  /**
   *  Updates the expenses column in the Accounts table.
   */
  public updateAccountsTable(account:Account): Observable<Account> {
    return this.httpClient.put(`${this.url}/expenses`, account) as Observable<Account>;
  }
}
