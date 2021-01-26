import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeclareExpensesComponent } from './component/declare-expenses/declare-expenses.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DeclareIncomeComponent } from './component/declare-income/declare-income.component';

@NgModule({
  declarations: [
    DeclareExpensesComponent,
    DeclareIncomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    DeclareExpensesComponent,
    DeclareIncomeComponent
  ]
})
export class DeclareAccountModule { }
