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
}
