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
   * Checks to see if user input is negative or over two decimal places.
   * Then updates the expenses field on the Accounts table in the database.
   * Then updates the global account with the response from the database.
   */
  public async updateExpenses() {

    this.account.expenses *= 100;

    if (this.account.expenses < 0) {
      this.account.expenses = 0;
      this.error = "Error: Input must be positive.";
    }
    else if (this.account.expenses % 1 != 0) {
      this.account.expenses = 0;
      this.error = "Error: Input cannot exceed two decimal places.";
    }
    else {
      this.declareExpensesService.updateAccountsTable(this.account).subscribe((data) => {
        if (data) {
          account$.next(data)
        }
        else {
          this.error = "Error: Retrieved account doesn't exist."
        }
      })
    }
  }

  ngOnInit(): void {
    this.error = "test error"
  }

}
