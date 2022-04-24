import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable} from 'rxjs'
import {DividendDTO} from 'src/app/models/dividendDTO';

@Injectable()
export class FundDividendService {

  constructor(private http: HttpClient) { }

  periodoEmAnos: string ="";
  url: string =""

  getDividendData(): Observable<Array<DividendDTO>> {
    this.url = `http://localhost:8080/dividendo10` ;
    console.log(this.url)

    const head= new HttpHeaders().append('accept', 'application/json').append('content-type', 'application/json') .append('periodoEmAnos',  this.periodoEmAnos). append('Access-Control-Allow-Origin','*') ;

    console.log(head);
    return this.http.get<Array<DividendDTO>>(this.url, {headers:head} );
}
}
