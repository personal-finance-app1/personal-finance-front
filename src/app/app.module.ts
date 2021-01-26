import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeclareExpensesModule } from './modules/declare-expenses/declare-expenses.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BalanceProjectionModule } from './modules/balance-projection/balance-projection.module';
import { BalanceComponent } from './modules/balance/component/balance/balance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialBuildModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DeclareIncomeComponent } from './modules/declare-income/component/declare-income.component';
import { HeaderComponent } from './modules/navigation/header/header.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AuthModule } from './modules/auth/auth.module';
import { HomepageComponent } from './modules/homepage/component/homepage.component';
import { BalanceModule } from './modules/balance/balance.module';
import { HomepageModule } from './modules/homepage/homepage.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DeclareIncomeComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BalanceProjectionModule,
    AuthModule,
    FormsModule,
    MaterialBuildModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    DeclareExpensesModule,
    BalanceProjectionModule,
    AuthModule,
    BalanceModule,
    HomepageModule
  ],
  providers: [AuthModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
