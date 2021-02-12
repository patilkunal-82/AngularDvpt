import { Component, OnInit, Input } from '@angular/core';
import { List } from '../shared/list';



@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss']
})

export class BookdetailsComponent implements OnInit {
  @Input()
  book: List;

  constructor() { }

  ngOnInit() {
  }

}
