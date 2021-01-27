import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DeclareAccountService {

  constructor(
    private http:HttpClient,
    private as:AuthService
    ) { }

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
    console.log("Before Headers")
    console.log(account)
    
    let options = {headers: new Headers()};
    let token = this.as.getToken;
    options.headers.set('Authorization', `Bearer ${token}`);

    console.log("After Headers")
    console.log(account)
    return this.http.patch(`${environment.apiUrl}/accounts`, account) as Observable<Account>;
  }
}
