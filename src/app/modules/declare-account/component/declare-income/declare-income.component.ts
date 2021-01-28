import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { numberValidator } from 'src/app/validators/numbervalidator';
import { account$ } from 'src/environments/environment';
import { DeclareAccountService } from '../../service/declare-account.service';

@Component({
  selector: 'app-declare-income',
  templateUrl: './declare-income.component.html',
  styleUrls: ['./declare-income.component.css']
})
export class DeclareIncomeComponent implements OnInit {
  public inputValidator: any = numberValidator;
  error: string;
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
   * @param income 
   */
  public checkInput(income: number) {
    if(income < 0){
      this.error = "Error: Input must be positive.";

    } else if((income*100) % 1 != 0){
      this.error =   "Error: Input cannot exceed two decimal places.";

    } else {
      this.error = "";
    }
  }

  /**
   * Checks to see if user input is negative or over two decimal places.
   * Then updates the expenses field on the Accounts table in the database.
   * Then updates the global account with the response from the database.
   * @param income 
   */
  public updateAccount(income:number){

    income *= 100;
    
    if(income < 0){
      this.error = "Error: Input must be positive.";

    } else if(income % 1 != 0){
      this.error =   "Error: Input cannot exceed two decimal places.";

    } else {
      this.error = "";
      this.account.income = income;
      
      this.da.updateAccountsTable(this.account).subscribe((response: Account)  => {
        account$.next(response);
      });
    }
  }
}
