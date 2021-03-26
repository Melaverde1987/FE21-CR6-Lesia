import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelsComponent } from './travels/travels.component';
import { HeroComponent } from './hero/hero.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BlogComponent,
    TravelsComponent,
    HeroComponent,
    TravelDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
