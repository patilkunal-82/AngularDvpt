import { Injectable } from '@angular/core';
import { List } from '../shared/list';
//import { LISTS } from '../shared/lists';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }


      getLists(): Observable<List[]> {
      return this.http.get<List[]>(baseURL + 'lists')
      .pipe(catchError(this.processHTTPMsgService.handleError));
      }


      getList(id: string): Observable<List> {
        return this.http.get<List>(baseURL + 'lists/' + id)
        .pipe(catchError(this.processHTTPMsgService.handleError));
      }

      getFeaturedList(): Observable<List> {
        return this.http.get<List[]>(baseURL + 'lists?featured=true').pipe(map(lists => lists[0]))
        .pipe(catchError(this.processHTTPMsgService.handleError));
      }

      getListIds(): Observable<string[] | any>  {
        return this.getLists().pipe(map(lists => lists.map(list => list.id)))
        .pipe(catchError(error => error));
      }

      putList(list: List): Observable<List> {
        const httpOptions = {
           headers: new HttpHeaders ({
          'Content-Type': 'application/json'
          })
        };

        return this.http.put<List>(baseURL + 'lists/' + list.id, list, httpOptions)
        .pipe(catchError(this.processHTTPMsgService.handleError));

      }


  }
