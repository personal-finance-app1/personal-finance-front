import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { HomepageComponent } from './modules/homepage/component/homepage.component';
import { AuthGuard } from './modules/auth/guard/auth.guard';
import { DeclareExpensesComponent } from './modules/declare-account/component/declare-expenses/declare-expenses.component';
import { DeclareIncomeComponent } from './modules/declare-account/component/declare-income/declare-income.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'expenses', component: DeclareExpensesComponent },
  { path: 'declareincome', component: DeclareIncomeComponent },
  { path: 'homepage', component: HomepageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
