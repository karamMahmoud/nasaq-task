// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../helpers/api.service';
import { HeroProfile } from './hero-profile.model'

// RxJS
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class HeroProfileService {
    heroProfile:HeroProfile =
        { name: 'John', powers: 'React', description:'description' }
    constructor(private http: HttpClient) { }


    getHeroProfile(): Observable<HeroProfile> {
        return of(this.heroProfile);
    }

}
