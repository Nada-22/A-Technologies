import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesListComponent } from './resources-list/resources-list.component';
import { MainResourceComponent } from './main-resource/main-resource.component';

const routes: Routes = [
  { path: '',component:MainResourceComponent,
  children:[
    { path: '',redirectTo:'list'},
    {path:"list", component :ResourcesListComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceRoutingModule { }
