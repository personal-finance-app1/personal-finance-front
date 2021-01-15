import { Component, OnInit } from '@angular/core';
import { DeclareIncomeService } from '../service/declare-income.service';

@Component({
  selector: 'app-declare-income',
  templateUrl: './declare-income.component.html',
  styleUrls: ['./declare-income.component.css']
})
export class DeclareIncomeComponent implements OnInit {

  userInput: number; //Binded from the html

  constructor(private ds: DeclareIncomeService) { }

  ngOnInit(): void {
  }

  /**
   * Once the submit button is pressed, we call the service layer to send the value to the backend
   */
  public onSubmit(){
    this.ds.sendIncome(this.userInput);
  }

}
