import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeclareIncomeService {

  income: number = 5;

  constructor() { }

  public sendIncome(income:number) {
    this.income = income;
    
    // Retrieve the value from inside the input text
    // Send a Put request to the backend with the body

    //input validiation
    //testing medium, if the program is running as intended
    //code can change as revisions or new acomplishments are found
  }

  

}


// method to get the income input from html, and send a put request to the declareIncome controller on the backend
// Observable Boolean