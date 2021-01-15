import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  styleUrls: ['./balance.component.css']
})

export class BalanceComponent implements OnInit {
  currentBalance = 0;

  /**This read only variable will hold the message we'll send to the user, if they enter an invalid balance. */
  public readonly INVALID_BALANCE_MESSAGE: string;
  invalid_balance = "";
  /**This boolean property is used to decide whether or not to render the declare balance widget on the screen.*/
  public renderDeclareBalanceWidget: boolean;
  /**This property holds the value of the account we're representing in the view. */
  public accountNumber: number;
  /**This property holds the balance of the account we're representing in the view.*/
  public accountNumberBalance: number;
  constructor(private injectedBalanceService: BalanceService) {
    //stub
  }

  ngOnInit(): void {
  }

  /**The updateAccountBalance is called when the user pushes the button to update the account balance. 
   * We can use this method to push values to the global service.
  */
  public updateAccountBalance(form: NgForm): void {
     if(typeof(this.currentBalance) === 'number') {
      this.currentBalance = +form.value.balance.toFixed(2);
     } else {
       this.invalid_balance = "Please enter a valid number";
     }
     
     console.log(this.currentBalance);
     console.log(this.invalid_balance);
  }

  /**The declare account balance method is used to declare the account balance. We can use this 
   * method to push values to the global service.
   */
  public declareAccountBalance(): void {
    //stub
  }

}
