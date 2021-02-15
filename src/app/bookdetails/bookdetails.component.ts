import { Component, OnInit } from '@angular/core';
import { List } from '../shared/list';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ListService } from '../services/list.service';



@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss']
})

export class BookdetailsComponent implements OnInit {

  book: List;

  constructor(private listservice: ListService, private location: Location, private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.book = this.listservice.getList(id);
  }

  goBack(): void {
    this.location.back();
  }

}
