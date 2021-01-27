import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeclareAccountService {

  constructor(private http:HttpClient) { }

  options = {
    headers : new HttpHeaders({
      'Content-type' : 'application/json'
    }),
    withCredentials:true
  };

  /**
   * Updates the given account in the database.
  * @param account Returns the updated account.
  */
  public updateAccountsTable(account:Account): Observable<Account>{
    console.log(account)
    return this.http.patch(`${environment.apiUrl}/accounts`, account) as Observable<Account>;
  }
}
