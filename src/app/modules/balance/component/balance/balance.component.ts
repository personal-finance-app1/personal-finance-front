import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BalanceService } from '../../service/balance.service';
import { DeclareBalanceComponent } from '../declare-balance/declare-balance.component';


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
  public invalidMessage: string;
  public accountBalance: number;
  /**This read only variable will hold the message we'll send to the user, if they enter an invalid balance. */
  public readonly INVALID_BALANCE_MESSAGE: string = "Please enter an account balance greater than zero!";
  /**This property holds a reference to the Balance Service we use to perform operations on our component.*/
  public balanceService:BalanceService;
  /**This boolean property is used to decide whether or not to render the declare balance widget on the screen.*/
  public renderDeclareBalanceWidget: boolean;


  constructor(private injectedBalanceService: BalanceService, private dialog: MatDialog) {
    this.balanceService = injectedBalanceService;
    /** The dialog for declare balance will be open when the balance component load and won't be close untill
      until it get a number (can be positive or negative), then if it's validated, it will update for account balance
    **/
    const dialogRef = this.dialog.open(DeclareBalanceComponent, {
      panelClass: 'custom-dialog-container',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if(this.balanceService.validateAccountBalance(result)){
        this.accountBalance = result;
        this.balanceService.setBalance(result); //if valid balance, update the balance service
        this.invalidMessage=''; //set message to empty string, in case it has been set to an invalid string before
      } else {
        this.invalidMessage = this.INVALID_BALANCE_MESSAGE;
      }
    });
  }

  ngOnInit(): void {}

  /**The updateAccountBalance is called when the user pushes the button to update the account balance.
   * We can use this method to push values to the global service.
   */
  public updateAccountBalance(balanceInput:any): void {
    //here, we make sure the account balance is valid
    if(this.balanceService.validateAccountBalance(balanceInput)){
      this.accountBalance = balanceInput;
      this.balanceService.setBalance(balanceInput); //if valid balance, update the balance service
      this.invalidMessage=''; //set message to empty string, in case it has been set to an invalid string before
    } else {
      this.invalidMessage = this.INVALID_BALANCE_MESSAGE;
    }

  }
}
