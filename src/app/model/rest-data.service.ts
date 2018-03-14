import { ErrorHandler, Inject, Injectable, InjectionToken } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export const REST_URL = new InjectionToken('rest_url');

export enum Method {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
}

@Injectable()
export class RestDataService {

  constructor(private http: HttpClient, private jsonp: JsonpClientBackend,
              @Inject(REST_URL) private url: string) {
  }

  getData(): Observable<any> {
    return this.sendRequest(Method.Get, this.url);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.sendRequest(Method.Post, this.url, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.sendRequest(Method.Put, `${this.url}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.sendRequest(Method.Delete, `${this.url}/${id}`);
  }

  private sendRequest(method: Method, url: string, body?: Product): Observable<Product> {
    return this.http.request(method, url, {body: body}).catch((error: Response) => {
      return Observable.throw(
        `Network Error: ${error.statusText} (${error.status})`
      );
    });
  }
}
