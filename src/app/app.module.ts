import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BalanceProjectionModule } from './modules/balance-projection/balance-projection.module';
import { DeclareBalanceComponent } from './declareBalance/declare-balance/declare-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    DeclareBalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BalanceProjectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
