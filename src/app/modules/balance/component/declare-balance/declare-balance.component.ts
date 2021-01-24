import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {BalanceService} from "../../service/balance.service"

@Component({
  selector: 'app-declare-balance',
  templateUrl: './declare-balance.component.html',
  styleUrls: ['./declare-balance.component.css']
})
export class DeclareBalanceComponent implements OnInit {
  public readonly INVALID_BALANCE_MESSAGE: string = "Please enter an account balance greater than zero!";
  constructor(private injectedBalanceService: BalanceService, @Inject(MAT_DIALOG_DATA) public declareBalance: any) {
   }

  ngOnInit(): void {
  }

  /**The declare account balance method is used to declare the account balance. We can use this
   * method to push values to the global service.
   */
  public declareAccountBalance(): void {
  }

}
