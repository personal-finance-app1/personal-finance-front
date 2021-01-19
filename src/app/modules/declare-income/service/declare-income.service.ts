import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';

@Injectable({
  providedIn: 'root'
})
export class DeclareIncomeService {

  url: string = "http://localhost:4200";

  constructor() { }

  public sendIncome(account:Account): Observable<Account>{

    return null;
  }
}
