import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
//import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth'; 
//import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token : String;
  private userName : String;

  constructor() { }

  /**
   * Method for validating user credentials with Firebase, stores JWT if one
   *  is returned.
   * 
   * @param username String
   * @param password String
   * @returns boolean indicating whether credentials are authenticated by
   *          firebase
   */
  public login(username: string, password: string) : boolean {
    return false;
  }

  /**
   * Method for logging user out of application, invalidates token with Firebase,
   *  and removes token from AuthService.
   * 
   * @param none
   * @returns none
   */
  public logout() {
    return;
  }

  /**
   * Method for retreiving token from AuthService
   * @param none
   * @returns String - JWT retrieved from Firebase after successful
   *          authentication
   */
  public getToken() : string {
    return null;
  }

  /**
   * Method for retreiving username from JWT returned from Firebase
   * @param none
   * @returns String - Username stored in JWT returned from Firebase
   */
  public getUsername() : String {
    return null;
  }  
}
