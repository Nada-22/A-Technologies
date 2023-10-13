import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceRoutingModule } from './resource-routing.module';
import { ResourcesListComponent } from './resources-list/resources-list.component';
import { ResourceManageComponent } from './resource-manage/resource-manage.component';
import { MainResourceComponent } from './main-resource/main-resource.component';


@NgModule({
  declarations: [
    ResourcesListComponent,
    ResourceManageComponent,
    MainResourceComponent
  ],
  imports: [
    CommonModule,
    ResourceRoutingModule
  ]
})
export class ResourceModule { }
