import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {BalanceService} from "../../service/balance.service"

/**When a user logs in, this component renders an overlay that requires the user to enter their declared balance. */
@Component({
  selector: 'app-declare-balance',
  templateUrl: './declare-balance.component.html',
  styleUrls: ['./declare-balance.component.css']
})
export class DeclareBalanceComponent implements OnInit {
  /**declareBalance is a buffer that holds the value to init. our component to while the balance service 
   * handles validation of balance and modifying the application's balance state.
   */
  public declareBalance : number;
  public balanceService: BalanceService;
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private injectedBalanceService:BalanceService) {
    this.balanceService = injectedBalanceService;
    this.declareBalance = null;
   }

  ngOnInit(): void {
  }

  /**The declare account balance method is used to declare the account balance. We can use this
   * method to push values to the global service.
   */
  public declareAccountBalance(): void {
    if(this.balanceService.validateAccountBalance(this.declareBalance)){
      this.balanceService.setBalance(this.declareBalance);
    }

  }

}
