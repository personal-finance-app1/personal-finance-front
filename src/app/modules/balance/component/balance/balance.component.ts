import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BalanceService } from '../../service/balance.service';
import { DeclareBalanceComponent } from '../declare-balance/declare-balance.component';
import{numberValidator} from "../../../../validators/numbervalidator";
import { MatDialog } from '@angular/material/dialog';

/**
 * The balance component is responsible for tracking user balance.
 * It offers two widgets.
 * Declare Balance Widget: This widget is rendered after the user signs in, as an overlay to the dashboard,
 *    allowing them to input a starting balance for an account.
 *    Update Balance Widget: The second widget is integrated into the dashboard, and this widget allows the
 *    user to update their balance.
 */
@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  public inputValidator: any = numberValidator;
  public invalidMessage: string;
  public accountBalance: number|null;
  public isDeclare: boolean = false; 
  /**This read only variable will hold the message we'll send to the user, if they enter an invalid balance. */
  public readonly INVALID_BALANCE_MESSAGE: string = "Please enter a valid currency value.";
  /**This property holds a reference to the Balance Service we use to perform operations on our component.*/
  public balanceService:BalanceService;

  constructor(private injectedBalanceService: BalanceService, private dialog: MatDialog) {
    this.balanceService = injectedBalanceService;

  if(injectedBalanceService.getBalance() == null){
    dialog.open(DeclareBalanceComponent, {
      panelClass: 'custom-dialog-container',
      disableClose: true  //This ensures dialog closes only if the user clicks the corresponding close button.
    });
    this.invalidMessage = '';
    this.accountBalance = null; //set account balance to null to indicate it has not been set yet,
  } else {
    this.accountBalance = injectedBalanceService.getBalance();
  }
        
    //whenever an external component changes the balance state, then accept the pushed balance value.
    this.balanceService.notificationObservableSubject.subscribe((nextAccount)=> {
      this.accountBalance = nextAccount.balance;
    })
  }

  ngOnInit(): void { }

  /**
   * The updateAccountBalance is called when the user pushes the button to update the account balance.
   * We can use this method to push values to the global service.
   */
  public updateAccountBalance(): void {
    //
  }

  /**
   * The declare account balance method is used to declare the account balance. We can use this
   * method to push values to the global service.
   */
  public declareAccountBalance(): void {
    //stub
  }
}