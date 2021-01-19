import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { account$ } from 'src/environments/environment';
import { DeclareExpensesService } from '../../service/declare-expenses.service';

@Component({
  selector: 'app-declare-expenses',
  templateUrl: './declare-expenses.component.html',
  styleUrls: ['./declare-expenses.component.css']
})
export class DeclareExpensesComponent implements OnInit {

  error: string;
  account: Account = new Account(0, 0, 0);

  constructor(private declareExpensesService: DeclareExpensesService) {
    account$.subscribe((value) => {
      this.account = value;
    })
  }

  /**
   * Checks to see if user input is negative or a decimal.
   * Then updates the Global Service and Updates the expenses 
   * field on the Accounts table in the database.
   */
  public updateExpenses(): void {
   
  }

  ngOnInit(): void {
    this.error = "test error"
  }

}
