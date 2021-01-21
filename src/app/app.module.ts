import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeclareExpensesModule } from './modules/declare-expenses/declare-expenses.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD

=======
>>>>>>> ddb183f6e9218af708c32c9e1d5060d76e16c0df
import { BalanceProjectionModule } from './modules/balance-projection/balance-projection.module';
import { DeclareIncomeComponent } from './modules/declare-income/component/declare-income.component';
import { HeaderComponent } from './modules/navigation/header/header.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
    LoginComponent
=======
>>>>>>> ddb183f6e9218af708c32c9e1d5060d76e16c0df
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DeclareExpensesModule,
    DeclareIncomeComponent,
    HeaderComponent,
    LoginComponent,
    BalanceProjectionModule,
    AuthModule
  ],
  providers: [AuthModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
