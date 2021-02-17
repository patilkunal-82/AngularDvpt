import { Component, OnInit } from '@angular/core';
import { List } from '../shared/list';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ListService } from '../services/list.service';
import { switchMap } from 'rxjs/operators'



@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss']
})

export class BookdetailsComponent implements OnInit {

  book: List;
  listIds: string[];
  prev: string;
  next: string;

  constructor(private listservice: ListService, private location: Location, private route: ActivatedRoute) {}

  ngOnInit() {
     this.listservice.getListIds()
     .subscribe((listIds) => this.listIds = listIds);
     this.route.params
      .pipe(switchMap((params: Params) => this.listservice.getList(params['id'])))
      .subscribe(book => { this.book = book; this.setPrevNext(book.id);});
  }

  setPrevNext(listId: string) {
    const index = this.listIds.indexOf(listId);
    this.prev = this.listIds[(this.listIds.length + index - 1) % this.listIds.length];
    this.next = this.listIds[(this.listIds.length + index + 1) % this.listIds.length];
  }


  goBack(): void {
    this.location.back();
  }

}
