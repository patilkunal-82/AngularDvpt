import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


// Use of Location, Params and ActivatedRoute below
export class AboutComponent implements OnInit {

  leaders: Leader[];
  featuredLeader: Leader;
  constructor(private leaderservice: LeaderService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
  this.leaderservice.getLeaders()
  .then(leaders => this.leaders = leaders);

  let id = this.route.snapshot.params['id'];
  //this.featuredLeader = this.leaderservice.getLeader(id);

  this.leaderservice.getLeader(id)
  .then(featuredLeader => this.leaders[id] = featuredLeader);

  }

  goBack(): void {
    this.location.back();
  }


}
