import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export const REST_URL = new InjectionToken('rest_url');

@Injectable()
export class RestDataService {

  constructor(private http: HttpClient,
              @Inject(REST_URL) private url: string) {
    console.log(this.url);
  }

  getData(): Observable<Product[]> {
    return this.http.get(this.url).map(response => {
      console.log(response);
      return [];
    });
  }

}
