import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  isAuth: boolean = false;
  isVisibility: string = "hidden"


  constructor(private authService: AuthService, private router: Router) {
    this.visibilityLogoutButton();
  }

  ngOnInit(): void {
    this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
      // console.log(authStatus);
      this.visibilityLogoutButton();
    });
  }


  /**
   * this is for logout menu event function
   */
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);

  }

  visibilityLogoutButton() {
    if (this.isAuth) {
      this.isVisibility = "visible";
    } else {
      this.isVisibility = "hidden";
    }
  }

}
