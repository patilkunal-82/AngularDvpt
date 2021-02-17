import { Injectable } from '@angular/core';
import { List } from '../shared/list';
import { LISTS } from '../shared/lists';

@Injectable({
  providedIn: 'root'
})
export class ListService{

  constructor() { }

     // getLists() method is reconfigured to return Promise
      getLists(): Promise<List[]> {
        return Promise.resolve(LISTS);
      }

    // java script function filter is used here.
      getList(id: string): Promise<List> {
        return Promise.resolve(LISTS.filter((list) => (list.id === id))[0]);
      }

      getFeaturedList(): Promise<List> {
        return Promise.resolve(LISTS.filter((list) => list.featured)[0]);
      }
  }
