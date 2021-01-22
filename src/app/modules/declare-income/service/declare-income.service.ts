import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeclareIncomeService {

  constructor(private http:HttpClient) { }

  public sendIncome(account:Account): Observable<Account>{

    return this.http.put(`${environment.apiUrl}/income`, account) as Observable<Account>;
  }
}
