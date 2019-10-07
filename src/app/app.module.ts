import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './LoginBlock/app.login.component'
import {MainpageComponent} from './DetailsBlok/app.mainpagecomponent'
import {RentailDetailspageComponent} from './PopupsBlock/app.rentaildetailscomponent'
import {AddNewComponent} from './PopupsBlock/app.addnewcomponent'
import {BackDecorator} from './DecoratersBlock/BackgroundDecorater'
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import {RouterModule, Router, Routes} from '@angular/router'
// import {loginservices} from './ServicesBlock/loginservice'


// const appRoute :Routes=[
//   {path:'Details' , component:MainpageComponent},
// ];

@NgModule({
  declarations: [
    AppComponent,LoginComponent,MainpageComponent,RentailDetailspageComponent,AddNewComponent,BackDecorator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
