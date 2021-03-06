import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { DashboardComponent } from './modules/general/dashboard/dashboard.component';
import { ConfigurationComponent } from './modules/general/configuration/configuration.component';

import { QuoteComponent } from './modules/sales/quote/quote.component';
import { AddQuoteComponent } from './modules/sales/add-quote/add-quote.component';
import { OrderComponent } from './modules/sales/order/order.component';
import { InvoiceComponent } from './modules/sales/invoice/invoice.component';
import { ItemComponent } from './modules/sales/item/item.component';
import { ClientComponent } from './modules/sales/client/client.component';
import { LoginComponent } from './modules/general/login/login.component';
import { RequestPriceComponent } from './modules/purshase/request-price/request-price.component';
import { SupplierComponent } from './modules/purshase/supplier/supplier.component';
import { TransfertComponent } from './modules/inventory/transfert/transfert.component';
import { ReplenishmentComponent } from './modules/inventory/replenishment/replenishment.component';
import { OperationTypeComponent } from './modules/inventory/operation-type/operation-type.component';
import { WarehouseComponent } from './modules/inventory/warehouse/warehouse.component';
import { AdjustWarehouseComponent } from './modules/inventory/adjust-warehouse/adjust-warehouse.component';
import { OrderProductionComponent } from './modules/production/order-production/order-production.component';
import { RhComponent } from './modules/staff/rh/rh.component';
import { CommercialComponent } from './modules/staff/commercial/commercial.component';
import { ProductionComponent } from './modules/staff/production/production.component';
import { MaintenanceComponent } from './modules/staff/maintenance/maintenance.component';
import { InvoiceClientComponent } from './modules/accounting/invoice-client/invoice-client.component';
import { InvoiceSupplierComponent } from './modules/accounting/invoice-supplier/invoice-supplier.component';
import { PaymentSupplierComponent } from './modules/accounting/payment-supplier/payment-supplier.component';
import { PaymentClientComponent } from './modules/accounting/payment-client/payment-client.component';
import { EmployeeComponent } from './modules/employee/employee/employee.component';
import { ContractComponent } from './modules/employee/contract/contract.component';
import { OccupationComponent } from './modules/employee/occupation/occupation.component';
import { VehiculeComponent } from './modules/fleet/vehicule/vehicule.component';
import { ModelComponent } from './modules/fleet/model/model.component';
import { DocumentComponent } from './modules/document/document/document.component';
import { ContactComponent } from './modules/contact/contact/contact.component';
import { BenefitComponent } from './modules/payroll/benefit/benefit.component';
import { ConflictComponent } from './modules/payroll/conflict/conflict.component';
import { PayComponent } from './modules/payroll/pay/pay.component';
import { PayslipComponent } from './modules/payroll/payslip/payslip.component';
import { FixComponent } from './modules/fix/fix/fix.component';
import { AppointementComponent } from './modules/appointement/appointement/appointement.component';
import { EquipementComponent } from './modules/maintenance/equipement/equipement.component';
import { ProjectComponent } from './modules/project/project/project.component';
import { MytasksComponent } from './modules/project/mytasks/mytasks.component';
import { HolidayComponent } from './modules/employee/holiday/holiday.component';
import { EventComponent } from './modules/event/event/event.component';
import { GroupeComponent } from './modules/groupe/groupe/groupe.component';
import { RoleComponent } from './modules/groupe/role/role.component';
import { ControlQualityComponent } from './modules/quality/control-quality/control-quality.component';
import { ControlPointComponent } from './modules/quality/control-point/control-point.component';
import { ModulesComponent } from './modules/general/module/modules.component';
import { AddItemComponent } from './modules/sales/add-item/add-item.component';
import { AddClientComponent } from './modules/sales/add-client/add-client.component';
import { SendQuoteComponent } from './modules/sales/send-quote/send-quote.component';
import { PaymentSaleComponent } from './modules/sales/payment-sale/payment-sale.component';
import { AddRequestPriceComponent } from './modules/purshase/add-request-price/add-request-price.component';
import { AddSupplierComponent } from './modules/purshase/add-supplier/add-supplier.component';
import { AddOrderSupplierComponent } from './modules/purshase/add-order-supplier/add-order-supplier.component';
import { OrderSupplierComponent } from './modules/purshase/order-supplier/order-supplier.component';

import { AddTaskComponent } from './modules/project/add-task/add-task.component';
import { AddProjectComponent } from './modules/project/add-project/add-project.component';
import { AddBankAccountComponent } from './modules/accounting/add-bank-account/add-bank-account.component';
import { AddInvoiceClientComponent } from './modules/accounting/add-invoice-client/add-invoice-client.component';
import { AddInvoiceSupplierComponent } from './modules/accounting/add-invoice-supplier/add-invoice-supplier.component';
import { AddPaymentClientComponent } from './modules/accounting/add-payment-client/add-payment-client.component';
import { AddPaymentSupplierComponent } from './modules/accounting/add-payment-supplier/add-payment-supplier.component';
import { AddProductionComponent } from './modules/production/add-production/add-production.component';
import { AddCategoryComponent } from './modules/sales/add-category/add-category.component';
import { CategoryComponent } from './modules/sales/category/category.component';
import { AddTransfertComponent } from './modules/inventory/add-transfert/add-transfert.component';
import { AddTypeOperationComponent } from './modules/inventory/add-type-operation/add-type-operation.component';
import { AddWarehouseComponent } from './modules/inventory/add-warehouse/add-warehouse.component';
import { AddEmployeeComponent } from './modules/employee/add-employee/add-employee.component';
import { SellAnalysisComponent } from './modules/sales/sell-analysis/sell-analysis.component';
import { AnalysisAccountingComponent } from './modules/accounting/analysis-accounting/analysis-accounting.component';
import { AnalysisEmployeeComponent } from './modules/employee/analysis-employee/analysis-employee.component';
import { AnalysisEventComponent } from './modules/event/analysis-event/analysis-event.component';
import { AnalysisFixComponent } from './modules/fix/analysis-fix/analysis-fix.component';
import { AnalysisFleetComponent } from './modules/fleet/analysis-fleet/analysis-fleet.component';
import { AnalysisIventoryComponent } from './modules/inventory/analysis-iventory/analysis-iventory.component';
import { AnalysisMaintenanceComponent } from './modules/maintenance/analysis-maintenance/analysis-maintenance.component';
import { AnalysisPayrollComponent } from './modules/payroll/analysis-payroll/analysis-payroll.component';
import { AnalysisProductionComponent } from './modules/production/analysis-production/analysis-production.component';
import { AnalysisPurshaseComponent } from './modules/purshase/analysis-purshase/analysis-purshase.component';
import { AnalysisQualityComponent } from './modules/quality/analysis-quality/analysis-quality.component';
import { AnalysisStaffComponent } from './modules/staff/analysis-staff/analysis-staff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'client', component: ClientComponent, pathMatch: 'full' },
  { path: 'quote', component: QuoteComponent, pathMatch: 'full' },
  { path: 'item', component: ItemComponent, pathMatch: 'full' },
  { path: 'order', component: OrderComponent, pathMatch: 'full' },
  { path: 'invoice', component: InvoiceComponent, pathMatch: 'full' },
  { path: 'supplier', component: SupplierComponent, pathMatch: 'full' },
  { path: 'replanishment', component: ReplenishmentComponent, pathMatch: 'full' },
  { path: 'adjust', component: AdjustWarehouseComponent, pathMatch: 'full' },
  { path: 'type-operation', component: OperationTypeComponent, pathMatch: 'full' },
  { path: 'warehouse', component: WarehouseComponent, pathMatch: 'full' },
  { path: 'transfert', component: TransfertComponent, pathMatch: 'full' },
  { path: 'order-production', component: OrderProductionComponent, pathMatch: 'full' },
  { path: 'production', component: ProductionComponent, pathMatch: 'full' },
  { path: 'commercial', component: CommercialComponent, pathMatch: 'full' },
  { path: 'rh', component: RhComponent, pathMatch: 'full' },
  { path: 'maintenance', component: MaintenanceComponent, pathMatch: 'full' },
  { path: 'payment-client', component: PaymentClientComponent, pathMatch: 'full' },
  { path: 'payment-supplier', component: PaymentSupplierComponent, pathMatch: 'full' },
  { path: 'invoice-supplier', component: InvoiceSupplierComponent, pathMatch: 'full' },
  { path: 'invoice-client', component: InvoiceClientComponent, pathMatch: 'full' },
  { path: 'contract', component: ContractComponent, pathMatch: 'full' },
  { path: 'occupation', component: OccupationComponent, pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent, pathMatch: 'full' },
  { path: 'vehicule', component: VehiculeComponent, pathMatch: 'full' },
  { path: 'contract-vehicule', component: ContractComponent, pathMatch: 'full' },
  { path: 'model', component: ModelComponent, pathMatch: 'full' },
  { path: 'document', component: DocumentComponent, pathMatch: 'full' },
  { path: 'payslip', component: PayslipComponent, pathMatch: 'full' },
  { path: 'pay', component: PayComponent, pathMatch: 'full' },
  { path: 'conflict', component: ConflictComponent, pathMatch: 'full' },
  { path: 'benefit', component: BenefitComponent, pathMatch: 'full' },
  { path: 'fix', component: FixComponent, pathMatch: 'full' },
  { path: 'maintenance', component: MaintenanceComponent, pathMatch: 'full' },
  { path: 'equipement', component: EquipementComponent, pathMatch: 'full' },
  { path: 'appointment', component: AppointementComponent, pathMatch: 'full' },
  { path: 'project', component: ProjectComponent, pathMatch: 'full' },
  { path: 'mytask', component: MytasksComponent, pathMatch: 'full' },
  { path: 'holiday', component: HolidayComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'control-point', component: ControlPointComponent, pathMatch: 'full' },
  { path: 'control-quality', component: ControlQualityComponent, pathMatch: 'full' },
  { path: 'role', component: RoleComponent, pathMatch: 'full' },
  { path: 'groupe', component: GroupeComponent, pathMatch: 'full' },
  { path: 'modules', component: ModulesComponent, pathMatch: 'full' },
  { path: 'configuration', component: ConfigurationComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'event', component: EventComponent, pathMatch: 'full' },
  { path: 'order-supplier', component: OrderSupplierComponent, pathMatch: 'full' },
  { path: 'requestprice', component: RequestPriceComponent, pathMatch: 'full' },
  { path: 'category-item', component: CategoryComponent, pathMatch: 'full' },
  { path: 'analysis-sale', component: SellAnalysisComponent, pathMatch: 'full' },
  { path: 'analysis-buy', component: AnalysisPurshaseComponent, pathMatch: 'full' },
  { path: 'analysis-inventory', component: AnalysisIventoryComponent, pathMatch: 'full' },
  { path: 'analysis-production', component: AnalysisProductionComponent, pathMatch: 'full' },
  { path: 'analysis-staff', component: AnalysisStaffComponent, pathMatch: 'full' },
  { path: 'analysis-accounting', component: AnalysisAccountingComponent, pathMatch: 'full' },
  { path: 'analysis-employee', component: AnalysisEmployeeComponent, pathMatch: 'full' },
  { path: 'analysis-payroll', component: AnalysisPayrollComponent, pathMatch: 'full' },
  { path: 'analysis-fleet', component: AnalysisFleetComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    ConfigurationComponent,
    ClientComponent,
    QuoteComponent,

    AddQuoteComponent,

    OrderComponent,

    InvoiceComponent,

    ItemComponent,

    RequestPriceComponent,

    SupplierComponent,

    TransfertComponent,

    ReplenishmentComponent,

    OperationTypeComponent,

    WarehouseComponent,

    AdjustWarehouseComponent,

    OrderProductionComponent,

    RhComponent,

    CommercialComponent,

    ProductionComponent,

    MaintenanceComponent,

    InvoiceClientComponent,

    InvoiceSupplierComponent,

    PaymentSupplierComponent,

    PaymentClientComponent,

    EmployeeComponent,

    ContractComponent,

    OccupationComponent,

    VehiculeComponent,

    ModelComponent,

    DocumentComponent,

    ContactComponent,

    BenefitComponent,

    ConflictComponent,

    PayComponent,

    FixComponent,

    AppointementComponent,

    EquipementComponent,

    ProjectComponent,

    MytasksComponent,

    HolidayComponent,

    EventComponent,

    GroupeComponent,

    RoleComponent,

    ControlQualityComponent,

    ControlPointComponent,

    ModulesComponent,
    AddItemComponent,
    AddClientComponent,
    SendQuoteComponent,
    PaymentSaleComponent,
    AddRequestPriceComponent,
    AddSupplierComponent,
    AddOrderSupplierComponent,
    OrderSupplierComponent,
    AddProjectComponent,
    AddTaskComponent,
    AddInvoiceClientComponent,
    AddInvoiceSupplierComponent,
    AddPaymentClientComponent,
    AddPaymentSupplierComponent,
    AddBankAccountComponent,
    AddProductionComponent,
    AddCategoryComponent,
    CategoryComponent,
    AddTransfertComponent,
    AddWarehouseComponent,
    AddTypeOperationComponent,
    AddEmployeeComponent,
    SellAnalysisComponent,
    AnalysisAccountingComponent,
    AnalysisEmployeeComponent,
    AnalysisEventComponent,
    AnalysisFixComponent,
    AnalysisFleetComponent,
    AnalysisIventoryComponent,
    AnalysisMaintenanceComponent,
    AnalysisPayrollComponent,
    AnalysisProductionComponent,
    AnalysisPurshaseComponent,
    AnalysisQualityComponent,
    AnalysisStaffComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
