import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { BalanceModule } from '../balance/balance.module';
import { DeclareExpensesModule } from '../declare-expenses/declare-expenses.module';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule, BalanceModule, DeclareExpensesModule
  ]
})
export class HomepageModule { }
