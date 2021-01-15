import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BalanceProjectionModule } from './modules/balance-projection/balance-projection.module';

import { BalanceComponent } from './modules/balance/component/balance/balance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialBuildModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BalanceProjectionModule,
    FormsModule,
    MaterialBuildModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
