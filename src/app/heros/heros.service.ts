// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../helpers/api.service';

// RxJS
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {Hero} from './hero.model'

@Injectable()
export class HerosService {
    heros = [
        { name: 'soad', powers: 'React',rate:1 },
        { name: 'mohamed', powers: 'Angular',rate:3 },
        { name: 'karam', powers: 'coding with vim',rate:5 },
      ]
    constructor(private http: HttpClient) { }


    getHeros(): Observable<Hero[]> {
        return of(this.heros);

        //in case we have backEnd and restful apis
        // const href = `${API.heros}`;
        // return this
        //     .http
        //     .get(`${href}`)
        //     .pipe(map((res: Response) => res))
    }

}
