import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { TitleFinderModel } from '../model/title-finder-response.model';

@Injectable()
export class TitleFinderService {

  private readonly endpoint = '/title';

  constructor(private http: Http) { }

  public getTitle(url: string): Observable<TitleFinderModel> {
    const options: RequestOptionsArgs = {
      params: {
        url: url
      }
    };
    return this.http.get(this.buildUrl(), options).map((response: Response) => response.json()).catch((err: Response) => {
      if ( err.status === 512 ) {
        return Observable.of({
          errorMessage: 'Unknown host or malformed URL',
          title: undefined,
          valid: false
        });
      } else {
        return Observable.of(err.json());
      }
    });
  }

  private buildUrl = (): string => environment.api_endpoint + this.endpoint;

}
