import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationCenterComponent } from './navigation-center/navigation-center.component';

const routes: Routes = [
  {
    path:'',
    component: NavigationCenterComponent,
    children:[
      {
        path:'',
        component: HomeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
