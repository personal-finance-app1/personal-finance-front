import { Injectable } from '@angular/core';
import { Account } from 'src/app/models/account';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeclareExpensesService {

  url:string = "localhost:4200/personalfinance";

  constructor(private httpClient:HttpClient) { }
  /**
   *  Updates the expenses column in the Accounts table.
   */
  public async updateAccountsTable(account:Account) {

    let response =  await this.httpClient.put
    (this.url + "/expenses", account, {observe: 'response'})
    .toPromise();

    console.log(response);

  }
}
