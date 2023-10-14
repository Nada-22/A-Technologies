import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceRoutingModule } from './resource-routing.module';
import { ResourcesListComponent } from './resources-list/resources-list.component';
import { ResourceManageComponent } from './resource-manage/resource-manage.component';
import { MainResourceComponent } from './main-resource/main-resource.component';
import {  NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SupplierDetailsComponent } from './resource-manage/supplier-details/supplier-details.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    ResourcesListComponent,
    ResourceManageComponent,
    MainResourceComponent,
    SupplierDetailsComponent
  ],
  imports: [
    CommonModule,
    ResourceRoutingModule,
    NgbTypeaheadModule ,
    NgbPaginationModule,
    FormsModule,
    TranslateModule,
    NgSelectModule,
    
  ]
})
export class ResourceModule { }
