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



  onLogin(): void {

    if (this.authSerice.login(this.loginForm.value.username, this.loginForm.value.password)) {
      console.log("this is logined In");
      this.navigate();
    }
    else {
      this.refreshLoginPage();
      this.navigate();
    }

    /**
     *   this code  is for only testing method
     * */
    // if (this.loginForm.value.username == "username" && this.loginForm.value.password == "password") {
    //   alert("You are logged in Successfully !! Sorry ... UnderConstruction ....!!!!")
    //   window.location.reload();
    // } else {

    //   alert(" Sorry log in failed ... UnderConstruction ....!!!!")
    //   window.location.reload();
    // }

  }


  /**
   * This is for refresh login page in case of login failed.
   */
  refreshLoginPage(): void {

    this.loginForm.setValue = null;
    // this.loginStatus.next(false);
    //this.headerComponent.isAuth = false;
    window.location.reload();

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
    //this.loginStatus.next(false);
    //this.headerComponent.isAuth = false;
    this.router.navigate(['/login']);
  }

} 
