import { Component, OnInit } from '@angular/core';
import { DeclareIncomeService } from '../service/declare-income.service';

@Component({
  selector: 'app-declare-income',
  templateUrl: './declare-income.component.html',
  styleUrls: ['./declare-income.component.css']
})
export class DeclareIncomeComponent implements OnInit {

  userInput: number; //Binded from the html
  error:String;

  constructor(private ds: DeclareIncomeService) { }

  ngOnInit(): void {
  }

  public onSubmit(){

    this.ds.sendIncome(this.userInput);

  }
}
