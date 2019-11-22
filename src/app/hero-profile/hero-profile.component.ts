import { Component, OnInit } from '@angular/core';
import { HeroProfileService } from './hero-profile.service';
import { HeroProfile } from './hero-profile.model'

@Component({
  selector: 'app-root',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss']
})
export class HeroProfileComponent implements OnInit {
  heroProfile: HeroProfile;

  constructor(private _HeroProfileService: HeroProfileService) {
  }

  ngOnInit() {
    this.getHeros();
  }

  getHeros() {
    this._HeroProfileService.getHeroProfile().subscribe(data => {
      this.heroProfile = data;
    }, (err) => {
      return;
    }
    );
  }


}
