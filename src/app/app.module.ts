import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'ngx-bootstrap/rating';

import { HerosService } from './heros/heros.service'
import { HeroProfileService } from './hero-profile/hero-profile.service'
import { HerosFilterPipe } from './heros/heros.pipe'

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HerosFilterPipe,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RatingModule.forRoot()
  ],
  providers: [HerosService,HeroProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
