import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeclareExpensesComponent } from './modules/declare-expenses/component/declare-expenses/declare-expenses.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { HomepageComponent } from './modules/homepage/component/homepage.component';
import { DeclareIncomeComponent } from './modules/declare-income/component/declare-income.component';
import { AuthGuard } from './modules/auth/guard/auth.guard';


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
