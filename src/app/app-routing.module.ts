import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'forgot-password', component: ForgotComponent },
  { path: 'register', component: NewUserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: PagenotfoundComponent },

  { path: 'header', loadChildren: () => import('./header/header.module').then(m => m.HeaderModule) },
  { path: 'footer', loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule) },
  { path: 'sidebar', loadChildren: () => import('./sidebar/sidebar.module').then(m => m.SidebarModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: 'loans', loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: 'loan-types', loadChildren: () => import('./loan-types/loan-types.module').then(c => c.LoanTypesModule) },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
  { path: 'activity', loadChildren: () => import('./audit-logs/audit-logs.module').then(m => m.AuditLogsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
