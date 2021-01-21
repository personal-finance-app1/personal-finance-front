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

  constructor(private ds: DeclareIncomeService) {
    account$.subscribe((response) => {
      this.account = response;
    });

  }

  ngOnInit(): void {
  }

  //We want to display the environment account.income as the current income in the widget

  //Math.trunc()

  public onSubmit(){

    if(this.userInput < 0){
      this.account.income = 0; //reset input to 0
      this.error = "Error: Input must be positive.";
    } else if(Math.floor(this.userInput * 100) != (this.userInput * 100)){
      this.account.income = 0; //reset input to 0
      this.error = "Error: Input cannot exceed two decimal places.";
    } else {
      this.account.income = this.userInput; //Set income of localAccount
      this.ds.sendIncome(this.account).subscribe((response: Account)  => { //More Questions Here
        this.account = response;
      });
    }
    
  }
}
