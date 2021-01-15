import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeclareIncomeService {

  income: number = 15;

  constructor() { }

  public sendIncome(income:any): String{
   

    //set 
    //send http put request with account$


    return "cool";
  }
}