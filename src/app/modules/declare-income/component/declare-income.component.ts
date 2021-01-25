import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { account$ } from 'src/environments/environment';
import { DeclareIncomeService } from '../service/declare-income.service';

@Component({
  selector: 'app-declare-income',
  templateUrl: './declare-income.component.html',
  styleUrls: ['./declare-income.component.css']
})
export class DeclareIncomeComponent implements OnInit {

  userInput: number;
  error: String;
  account: Account;
  currentIncome: number;
  
  constructor(private ds: DeclareIncomeService) {
    account$.subscribe((response) => {
      this.account = response;
    });

  }

  ngOnInit(): void {
  }

  /**
   * Validates user input, checking if it is positive and has a proper decimal, 
   * and calls the DeclareIncomeService sendIncome method
   * 
   * @param none
   * @returns none
   */
  public onSubmit(){

    if(this.userInput < 0){
      this.error = "Error: Input must be positive.";
      
      //Reset input value

    } else if(Math.floor(this.userInput * 100) != (this.userInput * 100)){
      this.error = "Error: Input cannot exceed two decimal places.";

      //Reset input value

    } else {
      this.error = "";

      //Set local account variable
      this.account.income = this.userInput*100;
      this.currentIncome = this.userInput;

      //Reset input value
      

      this.ds.sendIncome(this.account).subscribe((response: Account)  => {
        account$.next(response); //Update global account

      });
    }
  }
}
