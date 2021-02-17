import { Component, OnInit } from '@angular/core';
import { List } from '../shared/list';
import { ListService } from '../services/list.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

list: List;
promotion: Promotion;
leader: Leader;

  constructor(private listservice: ListService, private promotionservice: PromotionService,
    private leaderservice: LeaderService) { }

  ngOnInit() {
    this.listservice.getFeaturedList().then(list => this.list = list);
    this.promotionservice.getFeaturedPromotion().then(promotion => this.promotion = promotion);
    this.leaderservice.getFeaturedLeader().then(leader => this.leader = leader);

  }

}
