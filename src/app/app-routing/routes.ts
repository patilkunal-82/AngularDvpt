import { Routes } from '@angular/router';

import { BooksComponent } from '../books/books.component';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'bookdetails/:id', component: BookdetailsComponent},
  { path: 'contactus', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
