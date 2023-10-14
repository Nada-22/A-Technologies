import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceRoutingModule } from './resource-routing.module';
import { ResourcesListComponent } from './resources-list/resources-list.component';
import { ResourceManageComponent } from './resource-manage/resource-manage.component';
import { MainResourceComponent } from './main-resource/main-resource.component';
import {  NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SupplierDetailsComponent } from './resource-manage/supplier-details/supplier-details.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AvailableDaysComponent } from './resource-manage/available-days/available-days.component';


@NgModule({
  declarations: [
    ResourcesListComponent,
    ResourceManageComponent,
    MainResourceComponent,
    SupplierDetailsComponent,
    AvailableDaysComponent
  ],
  imports: [
    CommonModule,
    ResourceRoutingModule,
    NgbTypeaheadModule ,
    NgbPaginationModule,
    FormsModule,
    TranslateModule,
    NgSelectModule,
    ReactiveFormsModule
    
  ]
})
export class ResourceModule { }
