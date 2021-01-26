import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeclareIncomeComponent } from './component/declare-income.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DeclareExpensesComponent } from '../declare-expenses/component/declare-expenses/declare-expenses.component';

@NgModule({
  declarations: [DeclareIncomeComponent],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    DeclareExpensesComponent,
  ]
})
export class DeclareIncomeModule { }
