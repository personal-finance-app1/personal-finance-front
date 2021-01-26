import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeclareExpensesComponent } from './modules/declare-account/component/declare-expenses/declare-expenses.component';
import {LoginComponent} from './modules/auth/components/login/login.component';
import { DeclareIncomeComponent } from './modules/declare-income/component/declare-income.component';
import { BalanceComponent } from './modules/balance/component/balance/balance.component';
import { DeclareIncomeComponent } from './modules/declare-account/component/declare-income/declare-income.component';

const routes: Routes = [ 
  {path:'balancetest', component:BalanceComponent},
  {path:'login',component:LoginComponent},
  {path:'expenses',component: DeclareExpensesComponent},
  {path:'income',component: DeclareIncomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
