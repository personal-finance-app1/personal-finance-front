import { Message } from '@angular/compiler/src/i18n/i18n_ast';
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

    //Validate for neg
    if(neg){

      return;
    } else if(dec){
      set error Message
      set input to falsy
      return;
    }

    //validate for decimal
    //if decimal exists, if so is there 0-2 values after it. 

    //create account$, sen

    this.error = this.ds.sendIncome(this.account$);


  }
}