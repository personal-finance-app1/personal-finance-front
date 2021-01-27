import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  /**
   * Used to validate that a user is logged in. If they are not, they will be redirected the login page.
   * @param route 
   * @param state 
   * @returns Returns true or navigates back to the login page.
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn())
      return true;
    else
      this.router.navigate(['/login']);
  }
}
