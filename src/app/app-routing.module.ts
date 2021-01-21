import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeclareExpensesComponent } from './modules/declare-expenses/component/declare-expenses/declare-expenses.component';
import { LoginComponent } from './modules/auth/components/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'expenses', component: DeclareExpensesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
