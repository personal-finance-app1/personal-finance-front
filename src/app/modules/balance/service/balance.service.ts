import { Injectable } from '@angular/core';
import { Account } from 'src/app/models/account';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  isDeclareOpen: boolean = false;

  public readonly notificationObservableSubject: Subject<number>;
  constructor() {
    this.account = new Account(0, 0, "", 0, 0, 0);
    this.notificationObservableSubject = new Subject<number>();
  }

  //eventually going to take out for global service field
  private account:Account;

  /**The validate account balance is used to ensure the user has entered a valid declaring or update balance.
   * returns boolean which indicates if the balance is valid or invalid.
   */
  public validateAccountBalance(accountBalance: number): boolean {
    return accountBalance>0;
  }

  /**
   * setBalance attempts to set the balance to the argument passed to the function.
   * @param balance the balance we wish to set into our service.
   * @return a boolean indicating if the set was succesful.
   */
  public setBalance(balance: number): boolean {
    let isValidBalance:boolean = this.validateAccountBalance(balance);
    if (isValidBalance) {
      this.account.balance = balance;
      this.notificationObservableSubject.next(balance); //notify listeners (separate components who use this value) that value has changed so they can update
    }
    return isValidBalance;
  }

  /**getBalance() returns the balance value stored in this service.
   * return number returns a number if we have declared a balance.
   * return null returns null if no balance has been set
   */
  public getBalance(): number | null {
    let returnBalance:number | null = this.validateAccountBalance(this.account.balance) ? this.account.balance : null;
    return returnBalance;
  }
}
