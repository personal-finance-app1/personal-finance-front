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
  error: string;
  account: Account;
  goodInput: boolean;

  constructor(private ds: DeclareIncomeService) {

    account$.subscribe((response) => {
      this.account = response;
    });

  }

  ngOnInit(): void {
  }

  public onSubmit(){

  }
}
