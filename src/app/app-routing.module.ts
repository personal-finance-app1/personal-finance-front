import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { HomepageComponent } from './modules/homepage/component/homepage.component';
import { BalanceComponent } from './modules/balance/component/balance/balance.component';
import { ProjectionComponent } from './modules/balance-projection/component/projection/projection.component';
import { DeclareIncomeComponent } from './modules/declare-account/component/declare-income/declare-income.component';
import { DeclareExpensesComponent } from './modules/declare-account/component/declare-expenses/declare-expenses.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
