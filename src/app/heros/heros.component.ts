import { Component, OnInit } from '@angular/core';
import { HerosService } from './heros.service';
import { Hero } from './hero.model';
import { OnDestroy } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit, OnDestroy {
  searchTerm: string;
  switchTerm: boolean = true;
  heros:Hero[];
  sub1:any;

  constructor(private _HerosService: HerosService) {
  }

  ngOnInit() {
    this.getHeros();
    this.heros.sort(this.compareName);
  }

  getHeros() {
    this.sub1 = this._HerosService.getHeros().subscribe(data => {
      this.heros = data;
    }, (err) => {
      return;
    }
    );
  }

  sortTable() {
    this.switchTerm = !this.switchTerm;
    this.switchTerm ? this.heros.sort(this.compareName) : this.heros.sort(this.comparePowers);
  }

  compareName(a, b) {

    let itemA = a.name.toLowerCase();
    let itemB = b.name.toLowerCase();

    let comparison = 0;
    if (itemA > itemB) {
      comparison = 1;
    } else if (itemA < itemB) {
      comparison = -1;
    }
    return comparison;
  }

  comparePowers(a, b) {
    let itemA = a.powers.toLowerCase();
    let itemB = b.powers.toLowerCase();

    let comparison = 0;
    if (itemA > itemB) {
      comparison = 1;
    } else if (itemA < itemB) {
      comparison = -1;
    }
    return comparison;
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
 }


}
