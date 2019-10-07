import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainpageComponent} from './DetailsBlok/app.mainpagecomponent'
import {LoginComponent} from './LoginBlock/app.login.component'


const routes: Routes = [{path: '',component:LoginComponent},
  {path:'Details' , component:MainpageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
