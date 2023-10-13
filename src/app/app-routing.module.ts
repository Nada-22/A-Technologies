import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',redirectTo:'recourse',pathMatch:'full'},

  {
    path: 'recourse', 
    loadChildren: () => import('./modules/resource/resource.module').then(m => m.ResourceModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
