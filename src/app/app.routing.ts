import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';


const routes: Routes =[
    { path: '',redirectTo: 'heros', pathMatch: 'full' },
    { path: 'heros',  component: HerosComponent },
    { path: 'hero-profile',  component: HeroProfileComponent },
    { path: '**',redirectTo: 'heros', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
