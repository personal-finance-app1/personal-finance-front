import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeclareExpensesComponent } from './modules/declare-expenses/component/declare-expenses/declare-expenses.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { HomepageComponent } from './modules/homepage/component/homepage.component';
import { DeclareIncomeComponent } from './modules/declare-income/component/declare-income.component';
import { BalanceComponent } from './modules/balance/component/balance/balance.component';
import { ProjectionComponent } from './modules/balance-projection/component/projection/projection.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'expenses', component: DeclareExpensesComponent },
  { path: 'declareincome', component: DeclareIncomeComponent },
  { path: 'balance', component: BalanceComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'proj', component: ProjectionComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
