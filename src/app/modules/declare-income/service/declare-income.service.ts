import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeclareIncomeService {

  income: number = 15;

  constructor() { }

  public sendIncome(income:number){
    //this.income= income;
    console.log("Welcome to sendIncome")



    // Retrieve the value from inside the input text
    // Send a Put request to the backend with the body



    //call put request method
  }

  // public sendPutRequest(body:number): Observable<Object>{
  //   return this.http.put("url", body) as Observable<Object>
  // }

}