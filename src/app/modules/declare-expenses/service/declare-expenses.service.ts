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
 * Updates the expenses column in the Accounts table.
 * @param account Returns the updated account from the database.
 */
  public updateAccountsTable(account:Account): Observable<Account> {
    return null;
  }
}
