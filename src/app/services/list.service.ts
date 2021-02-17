import { Injectable } from '@angular/core';
import { List } from '../shared/list';
import { LISTS } from '../shared/lists';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService{

  constructor() { }

     // getLists() method is reconfigured to return Promise
      getLists(): Observable<List[]> {

      return of(LISTS).pipe(delay(2000));

      }

    // java script function filter is used here.
      getList(id: string): Observable<List> {

      // of operator from Observables
      return of(LISTS.filter((list) => (list.id === id))[0]).pipe(delay(2000));
      }

      getFeaturedList(): Observable<List> {

        // of operator from Observables
        return of(LISTS.filter((list) => list.featured)[0]).pipe(delay(2000));
      }

      getListIds(): Observable<string[] | any>  {
        return of(LISTS.map(list => list.id));
      }
  }
