import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {BalanceService} from "../../service/balance.service"
import{numberValidator} from "../../../../validators/numbervalidator";

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
  public inputValidator: any =  numberValidator;
  error: string = "";
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private injectedBalanceService:BalanceService) {
    this.balanceService = injectedBalanceService;
    this.declareBalance = null;
   }

  ngOnInit(): void {
  }

  /**
   * Checks to see if user input is negative or over two decimal places.
   * @param balance 
   */
  public checkInput(balance: number) {
    if(balance < 0){
      this.error = "Error: Input must be positive.";

    } else if((balance*100) % 1 != 0){
      this.error = "Error: Input cannot exceed two decimal places.";

    } else {
      this.error = "";
    }
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
