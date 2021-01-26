import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { account$ } from 'src/environments/environment';
import { DeclareAccountService } from '../../service/declare-account.service';

@Component({
  selector: 'app-declare-income',
  templateUrl: './declare-income.component.html',
  styleUrls: ['./declare-income.component.css']
})
export class DeclareIncomeComponent implements OnInit {

  error: String;
  account: Account = new Account(1, 1,"",51,52,53); //accountId, userId, name, income, expenses, balance;
  
  currentIncome: number;
  
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
  public updateAccount(income:number){
    
    if(income < 0){
      this.error = "Error: Input must be positive.";
      
      //Reset input value

    } else if(Math.floor(income * 100) != (income * 100)){
      this.error = "Error: Input cannot exceed two decimal places.";

      //Reset input value

    } else {
      this.error = "";
      this.account.income = income*100;
      this.currentIncome = income;

      //Reset input value
      
      this.da.updateAccountsTable(this.account).subscribe((response: Account)  => {
        account$.next(response);
        console.log("test");
      });
    }
  }

  public validateInput(value: string): Boolean {
    let regex = /[1-9]0{2,}|[0-9]+(.[0-9][0-9])(?![\w\d])/
    if(regex.test(value)){
      return true
      this.error 
    }
    else {
      return false
    }
  }

}



// public async updateExpenses() 
//   {

//     this.account.expenses *= 100;

//     if (this.account.expenses < 0) {
//       this.account.expenses = 0;
//       this.error = "Error: Input must be positive.";
//     }
//     else if (this.account.expenses % 1 != 0) {
//       this.account.expenses = 0;
//       this.error = "Error: Input cannot exceed two decimal places.";
//     }
//     else {
//       this.declareExpensesService.updateAccountsTable(this.account).subscribe((data) => {
//         if (data) {
//           account$.next(data)
//         }
//         else {
//           this.error = "Error: Retrieved account doesn't exist."
//         }
//       })
//     }
//   }
