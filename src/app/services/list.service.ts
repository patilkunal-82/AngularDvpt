import { Injectable } from '@angular/core';
import { List } from '../shared/list';
import { LISTS } from '../shared/lists';

@Injectable({
  providedIn: 'root'
})
export class ListService{

  constructor() { }

      getLists(): List[] {
        return LISTS;
      }

    // java script function filter is used here.
      getList(id: string): List {
        return LISTS.filter((list) => (list.id === id))[0];
      }

      getFeaturedList(): List {
        return LISTS.filter((list) => list.featured)[0];
      }
  }
