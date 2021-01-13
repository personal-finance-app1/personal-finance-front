import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeclareIncomeService {

  constructor() { }
}


// method to get the income input from html, and send a put request to the declareIncome controller on the backend
// Observable Boolean