import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './template/navigation/navigation.component';

import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { UserComponent } from './content/user/user.component';
import { RoleComponent } from './content/role/role.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { ConfigurationComponent } from './content/configuration/configuration.component';

const routes:Routes=[
  {path:'dashboard',component:DashboardComponent,pathMatch:'full'},
  {path:'user',component:UserComponent,pathMatch:'full'},
  {path:'role',component:RoleComponent,pathMatch:'full'},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'**',redirectTo:'dashboard',pathMatch:'full'}]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,

    UserComponent,
    RoleComponent,
    DashboardComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
