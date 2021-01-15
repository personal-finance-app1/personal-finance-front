import { Injectable } from '@angular/core';
import { Account } from 'src/app/models/account';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeclareExpensesService {

  url:string = "localhost:4200/personalfinance";

  constructor(private httpClient:HttpClient) { }
  /**
   *  Updates the expenses column in the Accounts table.
   */
  public updateAccountsTable(account:Account): string {

    this.httpClient.put(this.url + "/expenses", account, {observe: 'response'})
    .subscribe((response) => {
      console.log(response.status);
      if (response.status == 200) {
        return "Success";
      }
    });

    return "Failure";
  }
}
