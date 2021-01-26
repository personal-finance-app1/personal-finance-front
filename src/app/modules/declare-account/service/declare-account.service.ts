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
   * Updates the Accounts table.
  * @param account Returns the updated account from the database.
  */
  public updateAccountsTable(account:Account): Observable<Account>{
    console.log(account)
    return this.http.put(`${environment.apiUrl}/account`, account) as Observable<Account>;
  }
}
