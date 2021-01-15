import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeclareIncomeService {

  account: Account;

  constructor() { }

  public sendIncome(account:Account): number{
   

    //send http put request with account$


    return this.http.put("url", account) as Observable<number>;
    
  }
}