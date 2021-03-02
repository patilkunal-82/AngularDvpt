import { Component, OnInit, Inject} from '@angular/core';
import { List } from '../shared/list';
import { ListService } from '../services/list.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})

export class HomeComponent implements OnInit {

list: List;
promotion: Promotion;
leader: Leader;
listErrMess: string;


  constructor(private listservice: ListService, private promotionservice: PromotionService,
    private leaderservice: LeaderService, @Inject('BaseURL') private BaseURL ) { }

  ngOnInit() {
    this.listservice.getFeaturedList().subscribe(list => this.list = list, errMess => this.listErrMess = <any>errMess);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
    this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader = leader);

  }

}
