import { Component, OnInit } from '@angular/core';
import { DeclareExpensesService } from '../../service/declare-expenses.service';

// This is for Hierarchy setup
@Component({
  selector: 'app-declare-expenses',
  templateUrl: './declare-expenses.component.html',
  styleUrls: ['./declare-expenses.component.css']
})
export class DeclareExpensesComponent implements OnInit {

  expenses: number

  constructor(private declareExpensesService : DeclareExpensesService) { }
  /**
   * 
   * Updates the Global Service and Updates the expenses field on the Accounts table in the database.
   */
  private updateExpenses() : void {

    //update the global service
    //update the accounts table in the database.

  }

  ngOnInit(): void {
  }

}
