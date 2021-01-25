import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeclareExpensesComponent } from './modules/declare-expenses/component/declare-expenses/declare-expenses.component';
<<<<<<< HEAD
import { LoginComponent } from './modules/auth/components/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'expenses', component: DeclareExpensesComponent },
=======
import {LoginComponent} from './modules/auth/components/login/login.component';
import { BalanceComponent } from './modules/balance/component/balance/balance.component';

const routes: Routes = [ 
  {path:'balancetest', component:BalanceComponent},
  {path:'login',component:LoginComponent},
  {path:'expenses',component: DeclareExpensesComponent},
>>>>>>> main
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
