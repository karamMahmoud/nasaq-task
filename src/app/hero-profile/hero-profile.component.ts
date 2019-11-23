import { Component, OnInit } from '@angular/core';
import { HeroProfileService } from './hero-profile.service';
import { HeroProfile } from './hero-profile.model'
import { OnDestroy } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss']
})
export class HeroProfileComponent implements OnInit, OnDestroy {
  heroProfile: HeroProfile;
  sub1:any;

  constructor(private _HeroProfileService: HeroProfileService) {
  }

  ngOnInit() {
    this.getHeros();
  }

  getHeros() {
    this.sub1 = this._HeroProfileService.getHeroProfile().subscribe(data => {
      this.heroProfile = data;
    }, (err) => {
      return;
    }
    );
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
 }


}
