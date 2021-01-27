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
  account: Account;
  
  constructor(private da: DeclareAccountService) {
    account$.subscribe((account) => {
     this.account = account;
    });
  }

  ngOnInit(): void {
  }

  /**
   * Checks to see if user input is negative or over two decimal places.
   * Then updates the expenses field on the Accounts table in the database.
   * Then updates the global account with the response from the database.
   * @param income 
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
      this.error = "";
      return true
    }
    else {
      return false
    }
  }

}
