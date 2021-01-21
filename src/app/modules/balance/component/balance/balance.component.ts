import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../../service/balance.service';

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
  /**This read only variable will hold the message we'll send to the user, if they enter an invalid balance. */
  private static readonly INVALID_BALANCE_MESSAGE: string = "Only account balances greater than zero are accepted. Please enter an account balance greater than zero.";
  /**This property holds a reference to the Balance Service we use to perform operations on our component.*/
  private balanceService:BalanceService;
  /**This boolean property is used to decide whether or not to render the declare balance widget on the screen.*/
  public renderDeclareBalanceWidget: boolean;
  /**This property holds the balance of the account we're representing in the view.*/
  public accountBalance: number | null;
  constructor(private injectedBalanceService: BalanceService) {
    this.balanceService = injectedBalanceService;
    this.accountBalance = null; //set account balance to null represent an undeclared component, upon construction.
  }

  ngOnInit(): void {}

  /**The updateAccountBalance is called when the user pushes the button to update the account balance.
   * We can use this method to push values to the global service.
   */
  public updateAccountBalance(): void {
    //here, we make sure the account balance is valid
    if(this.balanceService.validateAccountBalance(this.accountBalance)){
      this.balanceService.setBalance(this.accountBalance); //if valid balance, update the balance service
      this.invalidMessage=''; //set message to empty string, in case it has been set to an invalid string before
    } else {
      this.invalidMessage = BalanceComponent.INVALID_BALANCE_MESSAGE;
    }

  }

  /**The declare account balance method is used to declare the account balance. We can use this
   * method to push values to the global service.
   */
  public declareAccountBalance(): void {
    this.updateAccountBalance (); //Here, we attempt to set the balance.
    this.renderDeclareBalanceWidget = this.balanceService.validateAccountBalance(this.accountBalance);//Finally, render the declare widget, if the users updated balance is valid.
  }
}
