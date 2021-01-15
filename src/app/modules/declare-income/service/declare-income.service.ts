import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';

@Injectable({
  providedIn: 'root'
})
export class DeclareIncomeService {

  constructor() { }

  public sendIncome(account:Account): number{

    //let jwt:any = AuthService.getToken()
    //send http put request with account$

    // Response Body Observable
    //return this.http.put("url", account$, jwt) as Observable<number>;

    return 1;
  }
}