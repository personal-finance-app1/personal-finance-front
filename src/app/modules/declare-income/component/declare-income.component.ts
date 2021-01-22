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

  public onSubmit(){

    console.log("User Input is: " + this.userInput)

    if(this.userInput < 0){
      this.error = "Error: Input must be positive.";

    } else if(Math.floor(this.userInput * 100) != (this.userInput * 100)){
      this.error = "Error: Input cannot exceed two decimal places.";

    } else {
      this.account.income = this.userInput*100; //Set income of localAccount
      
      this.ds.sendIncome(this.account).subscribe((response: Account)  => {
        account$.next(response); //Update global account
        this.currentIncome = this.userInput;
        this.error = "";
      });
    }
  }
}
