import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { numberValidator } from 'src/app/validators/numbervalidator';
import { account$ } from 'src/environments/environment';
import { DeclareAccountService } from '../../service/declare-account.service';

@Component({
  selector: 'app-declare-expenses',
  templateUrl: './declare-expenses.component.html',
  styleUrls: ['./declare-expenses.component.css']
})
export class DeclareExpensesComponent implements OnInit {
  public inputValidator: any = numberValidator;
  error: string;
  account: Account;
  expensesEntered: string;
  
  constructor(private da: DeclareAccountService) {
    account$.subscribe((account) => {
     this.account = account;
    });
  }

  ngOnInit(): void {
  }

  clearExpensesEntered() {
    this.expensesEntered = " ";
  }

  /**
   * Checks to see if user input is negative or over two decimal places.
   * @param expenses 
   */
  public checkInput(expenses: number) {
    if(expenses < 0){
      this.error = "Error: Input must be positive.";

    } else if((expenses*100) % 1 != 0){
      this.error =   "Error: Input cannot exceed two decimal places.";

    } else {
      this.error = "";
    }
  }

  /**
   * Checks to see if user input is negative or over two decimal places.
   * Then updates the expenses field on the Accounts table in the database.
   * Then updates the global account with the response from the database.
   * @param expenses 
   */
  public updateAccount(expenses:any){

    expenses *= 100;
    
    if(expenses < 0){
      this.error = "Error: Input must be positive.";

    } else if(expenses % 1 != 0){
      this.error = "Error: Input cannot exceed two decimal places.";

    } else {
      this.error = "";
      this.account.expenses = expenses;
      
      this.da.updateAccountsTable(this.account).subscribe((response: Account)  => {
        account$.next(response);
      });

      this.clearExpensesEntered();
    }
  }
}
