import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HeaderComponent } from 'src/app/modules/navigation/header/header.component';




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

  constructor(private authSerice: AuthService, private router: Router) { }

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

    if (isLogin) {
      this.router.navigate(['/home']);
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