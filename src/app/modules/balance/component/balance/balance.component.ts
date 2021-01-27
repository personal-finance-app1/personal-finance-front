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
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  public inputValidator: any = numberValidator;
  public invalidMessage: string;
  
  public readonly INVALID_BALANCE_MESSAGE: string;
  public renderDeclareBalanceWidget: boolean;
  public accountBalance: number | null;
  constructor(private injectedBalanceService: BalanceService) {
    //stub
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