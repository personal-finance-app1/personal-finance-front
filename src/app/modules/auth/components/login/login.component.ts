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



  async onLogin() {

    let isLogin = await this.authSerice.login(this.loginForm.value.username, this.loginForm.value.password);

    console.log(isLogin);

    if (isLogin) {
      this.navigate();
      //console.log(this.authSerice.getToken());
    }
    else {
      window.location.reload();
      this.refreshLoginPage();
    }

  }


  /**
   * This is for refresh login page in case of login failed.
   */
  refreshLoginPage() {

    this.loginForm.value.username = " ";
    this.loginForm.value.password = " ";
    this.authSerice.logout();
    this.router.navigate(['/login']);
    // window.location.reload();

  }



  /**
 * Method for rerouter to Home Page
 */
  navigate(): void {
    this.router.navigate(['/homepage']);
  }


  /**
   * this is for logout event
   * reload login page when user logout application.
   */

  onlogout(): void {
    this.authSerice.logout()
    this.router.navigate(['/login']);
  }

} 
