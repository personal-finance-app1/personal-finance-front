import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BalanceService } from '../../service/balance.service';
import { DeclareBalanceComponent } from '../declare-balance/declare-balance.component';
import{numberValidator} from "../../../../validators/numbervalidator";
import { account$ } from 'src/environments/environment';

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
  public error: string = "";
  balanceEntered: string;
  /**This read only variable will hold the message we'll send to the user, if they enter an invalid balance. */
  public readonly INVALID_BALANCE_MESSAGE: string = "Please enter a valid currency value.";
  public readonly NEGATIVE_BALANCE_MESSAGE: string = "Error: Input must be positive.";
  public readonly MORE_THAN_TWO_DECIMALS_MESSAGE: string = "Error: Input cannot exceed two decimal places.";
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
    this.accountBalance = account$.getValue().balance;
  }
        
    //whenever an external component changes the balance state, then accept the pushed balance value.
    
  }

  ngOnInit(): void {
    account$.subscribe((nextAccount)=> {
      this.accountBalance = nextAccount.balance;
    });
  }

  clearBalanceEntered() {
    this.balanceEntered = " ";
  }

  /**
   * Checks to see if user input is negative or over two decimal places.
   * @param balance 
   */
  public checkInput(balance: number) {

    if(balance < 0){
      this.error = this.NEGATIVE_BALANCE_MESSAGE;

    } else if((balance*100) % 1 != 0){
      this.error =  this.MORE_THAN_TWO_DECIMALS_MESSAGE;

    }
  }

  /**The updateAccountBalance is called when the user pushes the button to update the account balance.
   * We can use this method to push values to the global service.
   */
  public updateAccountBalance(balanceInput:any): void {
    //here, we make sure the account balance is valid
    // we do not do any manual setting as we are subscribed to the service observable in the cstr.
    if(this.balanceService.validateAccountBalance(balanceInput)){
      this.balanceService.setBalance(balanceInput); //if valid balance, update the balance service
      this.invalidMessage=''; //set message to empty string, in case it has been set to an invalid string before
      this.error='';
      this.clearBalanceEntered();
    } else {
      this.invalidMessage = this.INVALID_BALANCE_MESSAGE;
    }

  }
}
