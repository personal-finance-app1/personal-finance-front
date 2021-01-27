import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceComponent } from './component/balance/balance.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialBuildModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    BalanceComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialBuildModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ] ,
  exports:[BalanceComponent,DeclareBalanceComponent]
})
export class BalanceModule { }
