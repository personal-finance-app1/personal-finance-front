import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeclareExpensesComponent } from './modules/declare-expenses/component/declare-expenses/declare-expenses.component';

const routes: Routes = [{
  path: "expenses",
  component: DeclareExpensesComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
