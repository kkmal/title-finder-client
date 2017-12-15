import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TitleFinderService {

  private readonly endpoint = '/title';

  constructor(private http: Http) { }

  public getTitle(url: string): Observable<string> {
    const options: RequestOptionsArgs = {
      params: {
        url: url
      }
    };
    return this.http.get(this.buildUrl(), options).map((response: Response) => response.text());
  }

  private buildUrl = (): string => environment.api_endpoint + this.endpoint;

}
