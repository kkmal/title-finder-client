import { TestBed, inject } from '@angular/core/testing';

import { TitleFinderService } from './title-finder.service';
import { Http, Response } from '@angular/http';
import { ResponseOptions } from '@angular/http/';
import { TitleFinderModel } from '../model/title-finder-response.model';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'rxjs/add/observable/throw';

describe('TitleFinderService', () => {
  let httpService;
  let service: TitleFinderService;
  const okResponse: Response = new Response(new ResponseOptions({
    body: {
      valid: true,
      errorMessage: 'no',
      title: 'Google'
    }
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [TitleFinderService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    httpService = TestBed.get(Http);
    service = TestBed.get(TitleFinderService);

  });

  describe('getTitle()', () => {
    it('should request with localhost url with passed in url param and return the ok response body', () => {
      spyOn(httpService, 'get').and.returnValue(Observable.of(okResponse));
      service.getTitle('https://google.com').subscribe((res: TitleFinderModel) => {
        expect(res).toEqual(okResponse.json());
      });
    });

    it('should request with localhost url with passed in url param and return the ok response body but as an error to catch', () => {
      spyOn(httpService, 'get').and.returnValue(Observable.throw(okResponse));
      service.getTitle('https://google.com').subscribe((res: TitleFinderModel) => {
        expect(res).toEqual(okResponse.json());
      });
    });

    it('should request with localhost url with passed in url param and return the ok response body with a status of 512', () => {
      okResponse.status = 512;
      spyOn(httpService, 'get').and.returnValue(Observable.throw(okResponse));
      service.getTitle('https://google.com').subscribe((res: TitleFinderModel) => {
        expect(res).toEqual({
          errorMessage: 'Unknown host or malformed URL',
          title: undefined,
          valid: false
        });
      });
    });
  });
});
