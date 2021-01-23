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
  public readonly INVALID_BALANCE_MESSAGE: string = "Only account balances greater than zero are accepted. Please enter an account balance greater than zero.";
  /**This property holds a reference to the Balance Service we use to perform operations on our component.*/
  public balanceService:BalanceService;
  /**This boolean property is used to decide whether or not to render the declare balance widget on the screen.*/
  public renderDeclareBalanceWidget: boolean;


  constructor(private injectedBalanceService: BalanceService, private dialog: MatDialog) {
    const dialogRef = this.dialog.open(DeclareBalanceComponent, {
      panelClass: 'custom-dialog-container',
      
  
    });
    this.balanceService = injectedBalanceService;
    this.renderDeclareBalanceWidget = !this.balanceService.validateAccountBalance(this.balanceService.getBalance()); // decide to render widget based on the invalid value of accountBalance
    this.invalidMessage = '';
    this.accountBalance = this.injectedBalanceService.getBalance();
  }

  ngOnInit(): void {}

  /**The updateAccountBalance is called when the user pushes the button to update the account balance.
   * We can use this method to push values to the global service.
   */
  public updateAccountBalance(balanceInput:any): void {
    console.log("balance get" + balanceInput);
    //here, we make sure the account balance is valid
    if(this.balanceService.validateAccountBalance(balanceInput)){
      this.accountBalance = balanceInput;
      this.balanceService.setBalance(balanceInput); //if valid balance, update the balance service
      this.invalidMessage=''; //set message to empty string, in case it has been set to an invalid string before
    } else {
      this.invalidMessage = this.INVALID_BALANCE_MESSAGE;
    }

  }

  /**The declare account balance method is used to declare the account balance. We can use this
   * method to push values to the global service.
   */
  public declareAccountBalance(balanceInput:any): void {
    this.updateAccountBalance (balanceInput); //Here, we attempt to set the balance.
    this.renderDeclareBalanceWidget = this.balanceService.validateAccountBalance(this.balanceService.getBalance());//Finally, render the declare widget, if the users updated balance is valid.
  }
}
