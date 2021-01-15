import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor() { }

  //eventually going to take out for global service field
  accountBalance:number;
  
  /**The validate account balance is used to ensure the user has entered a valid declaring or update balance.
  * returns boolean which indicates if the balance is valid or invalid.
  */
  public validateAccountBalance(accountBalance:number): boolean {
    return false;
  }

  /**
   * setBalance attempts to set the balance to the argument passed to the function.
   * param balance the balnce we wish to set into our service.
   * return a boolean indicating if the set was succesful.
   */
  public setBalance(balance: number): boolean {
    return false;
  }

  /**getBalance() returns the balance value stored in this service.
   * return number returns a number if we have declared a balance.
   * return null returns null if no balance has been set
   */
  public getBalance(): number | null {
    return null;
  }
}
