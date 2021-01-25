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

  error: String;
  account: Account;
  currentIncome: number;
  
  constructor(private ds: DeclareIncomeService) {
    // account$.subscribe((response) => {
    //   this.account = response;
    // });
    this.account = new Account(0,0,0, 0);
  }

  ngOnInit(): void {
  }

  /**
   * Validates user input, checking if it is positive and has a proper decimal, 
   * and calls the DeclareIncomeService sendIncome method
   * 
   * @ param none
   * @ returns none
   */
  public onSubmit(income:any){
    let v = income;
    console.log("value= " + v);
    if(income < 0){
      this.error = "Error: Input must be positive.";
      
      //Reset input value

    } else if(Math.floor(income * 100) != (income * 100)){
      this.error = "Error: Input cannot exceed two decimal places.";

      //Reset input value

    } else {
      console.log("Income= " + income);
      this.error = "";
      //Set local account variable
      this.account.income = income*100;
      this.currentIncome = income;

      //Reset input value
      

      this.ds.sendIncome(this.account).subscribe((response: Account)  => {
        account$.next(response); //Update global account

      });
    }
  }
}
