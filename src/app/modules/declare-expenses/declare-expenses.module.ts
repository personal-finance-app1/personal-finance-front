import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeclareExpensesComponent } from './component/declare-expenses/declare-expenses.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [DeclareExpensesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class DeclareExpensesModule { }
