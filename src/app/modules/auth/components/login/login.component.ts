import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HeaderComponent } from 'src/app/modules/navigation/header/header.component';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { account$, environment } from 'src/environments/environment';
import { Account } from 'src/app/models/account';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {
  headerComponent: HeaderComponent;
  loginForm: FormGroup
  mesg: any;
  loginStatus = new Subject<boolean>();
  color = "red";
  isLogin: boolean = false;

  constructor(private authSerice: AuthService, private router: Router, private httpClient:HttpClient) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', { validators: [Validators.required] }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  ngOnChanges(): void {
    if (true) {
      this.mesg = "Account Logged in successfully";
      this.color = "green";
    }
  }

  /**
   * Method that handles login when form is submitted
   */
  async onLogin() {

    let isLogin = await this.authSerice.login(this.loginForm.value.username, this.loginForm.value.password);
    let token = this.authSerice.getToken();
    let options = {headers: new HttpHeaders({'Authorization': token})};


    if (isLogin) {
      this.httpClient.get(`${environment.apiUrl}/accounts/`,options).subscribe(
        (resp:Account[]) => {
          console.log("Retrieved account from database!", resp);
          let account:Account = resp[0];
          account.balance = account$.getValue().balance;
          account$.next(account);
          this.router.navigate(['/home']);
        },
        (err) => {
          console.log("Could not retrieve the accounts from this user", err);
        }
      );
    }
    else {
      window.location.reload();
      this.refreshLoginPage();
    }
  }


  /**
   * Method that clears page and returns to login screen when browser is refreshed
   */
  refreshLoginPage() {

    this.loginForm.value.username = " ";
    this.loginForm.value.password = " ";
    this.authSerice.logout();
    this.router.navigate(['/login']);
  }

  /**
   * Method that returns user to login screen when logged out
   */

  onlogout(): void {
    this.authSerice.logout()
    this.router.navigate(['/login']);
  }
} 