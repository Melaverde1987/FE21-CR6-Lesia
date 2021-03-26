import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelsComponent } from './travels/travels.component';

import { TravelDetailsComponent } from './travel-details/travel-details.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'travels', component: TravelsComponent
  },
  {
    path: 'travels/:travelId', component: TravelDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
