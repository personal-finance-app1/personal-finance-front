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

  constructor(private http:HttpClient, private authService: AuthService) { }

 

  /**
   * Updates the given account in the database.
  * @param account Returns the updated account.
  */
  public updateAccountsTable(account:Account): Observable<Account>{

    let token = this.authService.getToken();
    let options = { headers : new HttpHeaders({'Authorization' : token})};

    console.log(account)
    return this.http.patch(`${environment.apiUrl}/accounts`, account, options) as Observable<Account>;
  }
}
