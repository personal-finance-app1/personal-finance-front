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


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }


  ngOnChanges(): void {
    this.isAuth = this.authService.isLoggedIn();
  }



  /**
   * this is for logout menu event function
   */
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);

  }

}
