import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { account$ } from 'src/environments/environment';
import { DeclareAccountService } from '../../service/declare-account.service';

/**
 * This component represents the Declare Expense widget on the homepage
 */
@Component({
  selector: 'app-declare-expenses',
  templateUrl: './declare-expenses.component.html',
  styleUrls: ['./declare-expenses.component.css']
})
export class DeclareExpensesComponent implements OnInit {

  error: string;
  account: Account;
  
  currentExpenses: number;

  constructor(private da: DeclareAccountService) {
    account$.subscribe((response) => {
     this.account = response;
    });
  }

  ngOnInit(): void {
  }

  /**
   * Checks to see if user input is negative or over two decimal places.
   * Then updates the expenses field on the Accounts table in the database.
   * Then updates the global account with the response from the database.
   * 
   * @ param none
   * @ returns none
   */
  public updateAccount(expenses:any){

    expenses *= 100;

    if(expenses < 0){
      this.error = "Error: Input must be positive.";

    } else if(expenses % 1 != 0){
      this.error = "Error: Input cannot exceed two decimal places.";

    } else {
      this.error = "";
      this.account.expenses = expenses*100;
      
      this.da.updateAccountsTable(this.account).subscribe((response: Account)  => {
        account$.next(response);
      });
    }
  }
}
