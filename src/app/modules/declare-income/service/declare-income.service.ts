import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeclareIncomeService {

  income: number = 0;

  constructor() { }

  public sendIncome(income:number) {
    this.income = income;
    
    // Retrieve the value from inside the input text
    // Send a Put request to the backend with the body
  }

  

}


// method to get the income input from html, and send a put request to the declareIncome controller on the backend
// Observable Boolean