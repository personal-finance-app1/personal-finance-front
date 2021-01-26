import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeclareIncomeService {

  constructor(private http:HttpClient) { }

  options = {
    headers : new HttpHeaders({
      'Content-type' : 'application/json'
    }),
    withCredentials:true
  };

  /**
   * Updates the Accounts table.
  * @param account Returns the updated account from the database.
  */
  public sendIncome(account:Account): Observable<Account>{
    return this.http.patch(`${environment.apiUrl}/accounts`, account) as Observable<Account>;
  }
}
