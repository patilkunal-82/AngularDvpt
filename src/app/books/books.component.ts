import { Component, OnInit } from '@angular/core';
import { List } from '../shared/list';
import { LISTS } from '../shared/lists';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {

  lists: List[] = LISTS;
  selectedList: List;

  constructor() { }
  ngOnInit() {
  }

  onSelect(list: List) {
    this.selectedList =  list;
  }

}
