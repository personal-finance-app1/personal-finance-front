import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';

@Injectable({
  providedIn: 'root'
})
export class DeclareIncomeService {

  constructor() { }

  public sendIncome(account:Account): number{
    
    return 1;
  }
}