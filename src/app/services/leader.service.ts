import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    //return Promise.resolve(LEADERS);
    return new Promise(resolve => {
      //simulate server latency with 2s delay
      setTimeout(() => resolve(LEADERS), 2000);
    });
  }

  // java script function filter is used here.
  getLeader (id: string): Promise<Leader> {
    //return Promise.resolve(LEADERS.filter((leader) => (leader.id === id))[0]);
    return new Promise(resolve => {
      //simulate server latency with 2s delay
      setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000);
    });
  }

  getFeaturedLeader(): Promise<Leader> {
  //  return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  return new Promise(resolve => {
    //simulate server latency with 2s delay
    setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
  });
  }
}
