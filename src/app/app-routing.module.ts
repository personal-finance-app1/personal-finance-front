import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeclareExpensesComponent } from './modules/declare-expenses/component/declare-expenses/declare-expenses.component';
import {LoginComponent} from './modules/auth/components/login/login.component';

<<<<<<< HEAD
<<<<<<< HEAD
import {LoginComponent} from './modules/auth/components/login/login.component';

const routes: Routes = [ 
  {path:'login',component:LoginComponent}
=======
const routes: Routes = [ 
  {path:'login',component:LoginComponent},
  {path:'expenses',component: DeclareExpensesComponent},
>>>>>>> 2b24eb0fbbbe458c8f120f84fc9c4e93e2929254
=======
const routes: Routes = [ 
  {path:'login',component:LoginComponent},
  {path:'expenses',component: DeclareExpensesComponent},
>>>>>>> ddb183f6e9218af708c32c9e1d5060d76e16c0df
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
