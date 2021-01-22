import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {
  loginForm: FormGroup
  mesg: any;
  color = "red";

  constructor(private authService: AuthService) { }

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



  onLogin() {

    //this.authService.login(this.loginForm.value.username, this.loginForm.value.password);

    // this is for only testing method
    // if (this.loginForm.value.username == "username" && this.loginForm.value.password == "password") {
    //   alert("You are logged in Successfully !! Sorry ... UnderConstruction ....!!!!")
    //   window.location.reload();
    // } else {

    //   alert(" Sorry log in failed ... UnderConstruction ....!!!!")
    //   window.location.reload();
    // }

    this.authService.createUser(this.loginForm.value.username, 
      this.loginForm.value.password, "Demo User");
  }

} 
