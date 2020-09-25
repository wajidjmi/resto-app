import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { ListRestaurentComponent } from './list-restaurent/list-restaurent.component';
import { LoginComponent } from './login/login.component';
import { UpdateRestaurentComponent } from './update-restaurent/update-restaurent.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRestaurentComponent,
    ListRestaurentComponent,
    LoginComponent,
    UpdateRestaurentComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
