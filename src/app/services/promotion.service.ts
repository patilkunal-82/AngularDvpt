import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})

export class PromotionService{

  constructor() { }
  getPromotions(): Promise<Promotion[]> {
    //return Promise.resolve(PROMOTIONS);
    return new Promise(resolve => {
      //simulate server latency with 2s delay
      setTimeout(() => resolve(PROMOTIONS), 2000);
    });
  }


  // java script function filter is used here.
  getPromotion (id: string): Promise<Promotion> {
  //  return Promise.resolve(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]);
  return new Promise(resolve => {
    //simulate server latency with 2s delay
    setTimeout(() => resolve(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]), 2000);
  });
  }

  getFeaturedPromotion(): Promise<Promotion> {
  //  return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
  return new Promise(resolve => {
    //simulate server latency with 2s delay
    setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]), 2000);
  });
  }

}
