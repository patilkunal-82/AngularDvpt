import { Component, OnInit } from '@angular/core';
import { List } from '../shared/list';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {

  lists: List[];
  selectedList: List;

  constructor(private listService: ListService) {

  }
  ngOnInit() {
    this.listService.getLists()
    .subscribe((lists) => this.lists = lists );
  }

onSelect(list: List) {
    this.selectedList =  list;
  }

}
