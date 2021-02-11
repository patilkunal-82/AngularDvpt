import { Component, OnInit } from '@angular/core';
import { List } from '../shared/list';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  lists: List[] = [

    {
      id: '0',
      name: 'Munich',
      image: '/assets/images/Munich.png',
      category: 'photos',
      featured: true,
      label: 'New',
      price: '$ 45.99',
      description: 'A unique collection of photos of Munich and its surroundings'
    },
    {
      id: '1',
      name: 'Hypnobirthing',
      image: '/assets/images/Hypnobirthing.png',
      category: 'medical',
      featured: false,
      label: 'New',
      price: '$ 15.99',
      description: 'A natural approach to a safe, easier, more comfortable birthing'
    },
    {
      id: '2',
      name: 'PractialAR',
      image: '/assets/images/PracticalAR.png',
      category: 'technical',
      featured: false,
      label: 'New',
      price: '$ 19.99',
      description: 'A guide to the technologies, applications and human factors for AR and VR'
    },
    {
      id: '3',
      name: 'Dabawallas',
      image: '/assets/images/Dabawallas.png',
      category: 'management',
      featured: false,
      label: '',
      price: '$ 9.99',
      description: 'Lessons for building lasting success based on values'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
