import { Injectable } from '@angular/core';
import { List } from '../shared/list';
//import { LISTS } from '../shared/lists';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService{

  constructor(private http: HttpClient) { }


      getLists(): Observable<List[]> {


      return this.http.get<List[]>(baseURL + 'lists');

      }

  
      getList(id: string): Observable<List> {


        return this.http.get<List>(baseURL + 'lists/' + id);
      }

      getFeaturedList(): Observable<List> {


        return this.http.get<List[]>(baseURL + 'lists?featured=true').pipe(map(lists => lists[0]));
      }

      getListIds(): Observable<string[] | any>  {
        return this.getLists().pipe(map(lists => lists.map(list => list.id)));
      }
  }
