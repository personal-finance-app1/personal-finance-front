import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeclareIncomeComponent } from './component/declare-income.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DeclareIncomeComponent],
  imports: [
    CommonModule
  ]
})
export class DeclareIncomeModule { }
