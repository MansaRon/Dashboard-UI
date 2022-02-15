import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanTypesRoutingModule } from './loan-types-routing.module';
import { LoanTypesComponent } from './loan-types.component';


@NgModule({
  declarations: [
    LoanTypesComponent
  ],
  imports: [
    CommonModule,
    LoanTypesRoutingModule
  ]
})
export class LoanTypesModule { }
