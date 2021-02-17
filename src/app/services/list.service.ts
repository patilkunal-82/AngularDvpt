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
        //return Promise.resolve(LISTS);
        return new Promise(resolve => {
          //simulate server latency with 2s delay
          setTimeout(() => resolve(LISTS), 2000);
        });
      }

    // java script function filter is used here.
      getList(id: string): Promise<List> {
      //  return Promise.resolve(LISTS.filter((list) => (list.id === id))[0]);
      return new Promise(resolve => {
        //simulate server latency with 2s delay
        setTimeout(() => resolve(LISTS.filter((list) => (list.id === id))[0]), 2000);
      });
      }

      getFeaturedList(): Promise<List> {
        //return Promise.resolve(LISTS.filter((list) => list.featured)[0]);
        return new Promise(resolve => {
          //simulate server latency with 2s delay
          setTimeout(() => resolve(LISTS.filter((list) => list.featured)[0]), 2000);
        });
      }
  }
