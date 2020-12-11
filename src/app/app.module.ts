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
import { ProductComponent } from './content/product/product.component';
import { ClientComponent } from './content/client/client.component';
import { SupplierComponent } from './content/supplier/supplier.component';
import { PropositionComponent } from './content/proposition/proposition.component';
import { AccountComponent } from './content/account/account.component';
import { TransfertComponent } from './content/transfert/transfert.component';
import { InvoiceComponent } from './content/invoice/invoice.component';
import { RevenueComponent } from './content/revenue/revenue.component';
import { InvoiceeComponent } from './content/invoicee/invoicee.component';
import { ObjectiveComponent } from './content/objective/objective.component';
import { TransactionComponent } from './content/transaction/transaction.component';
import { InstructionComponent } from './content/instruction/instruction.component';
import { TaxComponent } from './content/tax/tax.component';
import { LoginComponent } from './content/login/login.component';

const routes:Routes=[
  {path:'dashboard',component:DashboardComponent,pathMatch:'full'},
  {path:'account',component:AccountComponent,pathMatch:'full'},
  {path:'client',component:ClientComponent,pathMatch:'full'},
  {path:'configuration',component:ConfigurationComponent,pathMatch:'full'},
  {path:'instruction',component:InstructionComponent,pathMatch:'full'},
  {path:'invoice',component:InvoiceComponent,pathMatch:'full'},
  {path:'invoicee',component:InvoiceeComponent,pathMatch:'full'},
  {path:'objective',component:ObjectiveComponent,pathMatch:'full'},
  {path:'product',component:ProductComponent,pathMatch:'full'},
  {path:'proposition',component:PropositionComponent,pathMatch:'full'},
  {path:'revenue',component:RevenueComponent,pathMatch:'full'},
  {path:'supplier',component:SupplierComponent,pathMatch:'full'},
  {path:'tax',component:TaxComponent,pathMatch:'full'},
  {path:'transaction',component:TransactionComponent,pathMatch:'full'},
  {path:'transfert',component:TransfertComponent,pathMatch:'full'},
  {path:'user',component:UserComponent,pathMatch:'full'},
  {path:'role',component:RoleComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',redirectTo:'login',pathMatch:'full'}]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,

    UserComponent,
    RoleComponent,
    DashboardComponent,
    ConfigurationComponent,
    ProductComponent,
    ClientComponent,
    SupplierComponent,
    PropositionComponent,
    AccountComponent,
    TransfertComponent,
    InvoiceComponent,
    RevenueComponent,
    InvoiceeComponent,
    ObjectiveComponent,
    TransactionComponent,
    InstructionComponent,
    TaxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
