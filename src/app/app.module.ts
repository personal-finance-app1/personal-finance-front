import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialBuildModule } from '../app/material.module';
import {HeaderComponent }  from './modules/navigation/header/header.component';
import {LoginComponent} from './modules/auth/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialBuildModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
