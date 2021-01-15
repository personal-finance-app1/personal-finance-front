import { Component, OnInit } from '@angular/core';
import { DeclareExpensesService } from '../../service/declare-expenses.service';

@Component({
  selector: 'app-declare-expenses',
  templateUrl: './declare-expenses.component.html',
  styleUrls: ['./declare-expenses.component.css']
})
export class DeclareExpensesComponent implements OnInit {

  expenses: number;
  error: string;

  constructor(private declareExpensesService : DeclareExpensesService) {
   }

  /**
   * 
   * Updates the Global Service and Updates the expenses field on the Accounts table in the database.
   */
  public updateExpenses() : void {

    // how to unit test input that is negative
    if (this.expenses < 0) {
      console.log('error: negative value')
    }


    //update the global service


    // HAS BEEN UNIT TESTED
    //update the accounts table in the database.

  }

  ngOnInit(): void {
  }

}
