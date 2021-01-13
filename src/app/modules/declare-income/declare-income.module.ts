import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component/component.component';
import { DeclareIncomeComponent } from './component/declare-income/declare-income.component';



@NgModule({
  declarations: [ComponentComponent, DeclareIncomeComponent],
  imports: [
    CommonModule
  ]
})
export class DeclareIncomeModule { }
