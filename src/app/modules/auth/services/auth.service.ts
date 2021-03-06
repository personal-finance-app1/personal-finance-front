import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Observable, Subject } from 'rxjs';
import { account$ } from 'src/environments/environment';
import { Account } from 'src/app/models/account';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userData: any;
  private token: string;
  authChange = new Subject<boolean>();


  constructor(private fireStore: AngularFirestore, private auth: AngularFireAuth) {}

  /**
  * Method for validating user credentials with Firebase, stores user
  * credentials if authorized user is found.
  * 
  * @param username String
  * @param password String
  * @returns Promise<boolean> indicating whether credentials are authenticated by
  *          firebase
  */
  async login(username: string, password: string): Promise<boolean> {

    let isLoginSuccess: boolean = false;

    try {

      isLoginSuccess = await this.auth.signInWithEmailAndPassword(username, password).then(
        (result) => {
          this.userData = result.user;
          this.userData.getIdToken().then((tokenId) => { this.token = tokenId; });
          this.authChange.next(true);
          return true;

        }
      ).catch((error) => {
        alert("Username and Password are invalid !!");
        return false;
      });

      return isLoginSuccess;

    } catch (error) {

      return isLoginSuccess;
    }
  }

  /**
   * Method for logging user out of application. Invalidates token with
   * Firebase, and removes user credentials from AuthService.
   * 
   * @param none
   * @returns none
   */
  public logout() {
    this.auth.signOut().then(() => {
      this.userData = null;
      account$.next(new Account(0,"","",0,0,0));
      //this.authChange.next(false);
    })

    return;
  }

  /**
   * Method for retreiving token from AuthService
   * @param none
   * @returns String - JWT retrieved from Firebase after successful
   *          authentication
   */
  public getToken(): string {
    if (this.userData == null) {
      return null;
    }

    else {
      return this.token;
    }
  }

  /**
   * Method for retreiving username from JWT returned from Firebase
   * @param none
   * @returns String - Username stored in JWT returned from Firebase
   */
  public getDisplayName(): String {
    if (this.userData == null) {
      return null;
    }

    else {
      return this.userData.displayName;
    }
  }

  /**
   * Method for retrieving user's email address
   * @param none
   * @returns String - Email stored in 
   */
  public getEmail(): String {
    if (this.userData == null) {
      return null;
    } else {
      return this.userData.email;
    }
  }

  /**  
   * Method to determine if there is a user logged in   
   * @param none   
   * @returns Boolean - result of evaluating userData == null   
   */
  public isLoggedIn() : boolean {  
    return this.userData != null; 
  }
}
