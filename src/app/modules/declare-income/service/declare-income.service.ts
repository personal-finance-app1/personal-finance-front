import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';

@Injectable({
  providedIn: 'root'
})
export class DeclareIncomeService {

  url: string = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  public sendIncome(account:Account): Observable<Account>{

    return this.http.put(this.url + "/income", account) as Observable<Account>; //CHANGE APIURL TO ENVIRONMENT VARIABLE
  }
}
