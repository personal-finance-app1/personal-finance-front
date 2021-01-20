import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BalanceProjectionModule } from './modules/balance-projection/balance-projection.module';
import { DeclareIncomeComponent } from './modules/declare-income/component/declare-income.component';
import { HeaderComponent } from './modules/navigation/header/header.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AuthModule } from './modules/auth/auth.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DeclareIncomeComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BalanceProjectionModule,
    FormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
