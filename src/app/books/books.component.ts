import { Component, OnInit, Inject } from '@angular/core';
import { List } from '../shared/list';
import { ListService } from '../services/list.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})

export class BooksComponent implements OnInit {

  lists: List[];
  errMess: string;


  constructor(private listService: ListService, @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit() {
    this.listService.getLists()
    .subscribe((lists) => this.lists = lists, errMess => this.errMess = <any>errMess);
  }



}
