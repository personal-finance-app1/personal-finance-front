import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BalanceProjectionModule } from './modules/balance-projection/balance-projection.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialBuildModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './modules/navigation/header/header.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AuthModule } from './modules/auth/auth.module';
import { HomepageComponent } from './modules/homepage/component/homepage.component';
import { BalanceModule } from './modules/balance/balance.module';
import { DeclareAccountModule } from './modules/declare-account/declare-account.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BalanceProjectionModule,
    AuthModule,
    MaterialBuildModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    DeclareAccountModule,
    BalanceModule
  ],
  providers: [AuthModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
