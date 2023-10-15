import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/layout/home/home.component';

const routes: Routes = [
  { path: '',redirectTo:'resource',pathMatch:'full'},

    {
      path: 'resource', 
      loadChildren: () => import('./modules/resource/resource.module').then(m => m.ResourceModule)
      ,component:HomeComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
