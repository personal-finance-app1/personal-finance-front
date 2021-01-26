import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { account$ } from 'src/environments/environment';
import { DeclareAccountService } from '../../service/declare-account.service';

@Component({
  selector: 'app-declare-expenses',
  templateUrl: './declare-expenses.component.html',
  styleUrls: ['./declare-expenses.component.css']
})
export class DeclareExpensesComponent implements OnInit {

  error: String;
  account: Account = new Account(1, 1,"JohnProjection",51,52,53); //accountId, userId, name, income, expenses, balance;
  
  currentExpenses: number;
  
  constructor(private da: DeclareAccountService) {
    account$.subscribe((response) => {
     this.account = response;
    });
  }

  ngOnInit(): void {
  }

  /** DECLARE EXPENSES DESCRIPTION
   * Checks to see if user input is negative or over two decimal places.
   * Then updates the expenses field on the Accounts table in the database.
   * Then updates the global account with the response from the database.
   */

  /**
   * Validates user input, checking if it is positive and has a proper decimal, 
   * and calls the DeclareIncomeService sendIncome method
   * 
   * @ param none
   * @ returns none
   */
  public updateAccount(expenses:any){
    let v = expenses;
    console.log("value= " + v);
    if(expenses < 0){
      this.error = "Error: Input must be positive.";
      
      //Reset input value

    } else if(Math.floor(expenses * 100) != (expenses * 100)){
      this.error = "Error: Input cannot exceed two decimal places.";

      //Reset input value

    } else {
      this.error = "";
      this.account.expenses = expenses*100;
      this.currentExpenses = expenses;

      //Reset input value
      
      this.da.updateAccountsTable(this.account).subscribe((response: Account)  => {
        account$.next(response);
      });
    }
  }
}
