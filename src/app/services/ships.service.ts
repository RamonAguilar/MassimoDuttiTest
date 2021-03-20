import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  url: string = 'https://swapi.dev/api/starships/?page='
  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  
  constructor( private http: HttpClient ) {}

  getShipsByPage( page: number): Observable<any>{

    const shipsFromCache = JSON.parse(localStorage.getItem('ships'+page)) || null;
    if (shipsFromCache) {
      return of(shipsFromCache);
    }
    const response =this.http.get(this.url+page);
    response.subscribe((ships) =>{
      localStorage.setItem('ships'+page, JSON.stringify(ships))
    });
    return response;
  }
}
