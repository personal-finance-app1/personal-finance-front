import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { account$ } from 'src/environments/environment';
import { DeclareExpensesService } from '../../service/declare-expenses.service';

@Component({
  selector: 'app-declare-expenses',
  templateUrl: './declare-expenses.component.html',
  styleUrls: ['./declare-expenses.component.css']
})
export class DeclareExpensesComponent implements OnInit {

  error: string;
  account: Account = new Account(0, 0, 0);

  constructor(private declareExpensesService: DeclareExpensesService) {
    account$.subscribe((value) => {
      this.account = value;
    })
  }

  /**
   * 
   * Updates the Global Service and Updates the expenses field on the Accounts table in the database.
   */
  public updateExpenses(): void {

    // how to unit test input that is negative
    if (this.account.expenses < 0) {
      this.error = "Error: Input must be positive.";
    }
    else {
      //update the global service
      account$.next(this.account);

      // HAS BEEN UNIT TESTED
      this.error = this.declareExpensesService.updateAccountsTable(this.account);
    }

  }

  ngOnInit(): void {
  }

}
