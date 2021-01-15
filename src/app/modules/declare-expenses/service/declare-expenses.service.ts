import { Injectable } from '@angular/core';
import { Account } from 'src/app/models/account';

@Injectable({
  providedIn: 'root'
})
export class DeclareExpensesService {

  constructor() { }
  /**
   *  Updates the expenses column in the Accounts table.
   */
  public updateAccountsTable(account:Account): string {

    //sends the httpRequest to the table
    return null;
  }
}
