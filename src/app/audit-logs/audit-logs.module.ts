import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditLogsRoutingModule } from './audit-logs-routing.module';
import { AuditLogsComponent } from './audit-logs.component';


@NgModule({
  declarations: [
    AuditLogsComponent
  ],
  imports: [
    CommonModule,
    AuditLogsRoutingModule
  ]
})
export class AuditLogsModule { }
