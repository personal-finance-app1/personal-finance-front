import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userData: any;

  constructor(private fireStore: AngularFirestore, private auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
      }
      else {
        this.userData = null;
      }
    })
  }

  /**
   * Method for validating user credentials with Firebase, stores user
   * credentials if authorized user is found.
   * 
   * @param username String
   * @param password String
   * @returns boolean indicating whether credentials are authenticated by
   *          firebase
   */
  public login(username: string, password: string): boolean {
    this.auth.signInWithEmailAndPassword(username, password).then(
      (result) => {
        this.userData = result.user;
      }).catch((error) => {
        alert("Username and Password are invalid !!");
        console.log(error)

      });

    if (this.userData == null) {
      return false;
    }
    else {
      return true;
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
      return this.userData.getIdToken();
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
  

}