import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { BalanceProjectionModule } from './modules/balance-projection/balance-projection.module';
import { DeclareBalanceComponent } from './declareBalance/declare-balance/declare-balance.component';
=======
>>>>>>> d1c3228b939e46e98934a356617b51f9aea5143f
import { DeclareIncomeComponent } from './modules/declare-income/component/declare-income.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DeclareIncomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    BalanceProjectionModule,
=======
>>>>>>> d1c3228b939e46e98934a356617b51f9aea5143f
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
