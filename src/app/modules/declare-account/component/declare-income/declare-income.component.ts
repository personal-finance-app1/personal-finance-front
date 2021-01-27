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

    income *= 100;
    
    if(income < 0){
      this.error = "Error: Input must be positive.";

    } else if(income % 1 != 0){
      this.error = "Error: Input cannot exceed two decimal places.";

    } else {
      this.error = "";
      this.account.income = income;
      
      this.da.updateAccountsTable(this.account).subscribe((response: Account)  => {
        account$.next(response);
        console.log("test");
      });
    }
  }

  public validateInput(value: string): Boolean {
    let regex = /[1-9]0{2,}|[0-9]+(.[0-9][0-9])(?![\w\d])/
    if(regex.test(value)){
      this.error 
      return true
    }
    else {
      return false
    }
  }

}
