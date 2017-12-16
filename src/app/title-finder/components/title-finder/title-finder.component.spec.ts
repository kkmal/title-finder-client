import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleFinderComponent } from './title-finder.component';
import { TitleFinderService } from '../../service/title-finder.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

describe('TitleFinderComponent', () => {
  let component: TitleFinderComponent;
  let fixture: ComponentFixture<TitleFinderComponent>;
  let titleFinderService: TitleFinderService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [ TitleFinderComponent ],
      providers: [TitleFinderService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleFinderComponent);
    component = fixture.componentInstance;
    titleFinderService = TestBed.get(TitleFinderService);
    fixture.detectChanges();
  });

  describe('onSubmit()', () => {
    it('should not validate the url because input is empty', () => {
      spyOn(titleFinderService, 'getTitle');
      component.url = '';
      component.onSubmit();
      expect(titleFinderService.getTitle).toHaveBeenCalledTimes(0);
      expect(component.invalidInput).toEqual(true);
    });
    it('should not validate the url because input is not valid protocol', () => {
      spyOn(titleFinderService, 'getTitle');
      component.url = 'google.com';
      component.onSubmit();
      expect(titleFinderService.getTitle).toHaveBeenCalledTimes(0);
      expect(component.invalidInput).toEqual(true);
    });

    it('should call service to get title because input is correct', () => {
      spyOn(titleFinderService, 'getTitle').and.returnValue(Observable.of({
        valid: true,
        title: 'Google',
        errorMessage: ''
      }));
      component.url = 'https://google.com';
      component.onSubmit();
      expect(component.makingCall).toEqual(false);
      expect(component.invalidInput).toEqual(false);
      expect(component.title).toEqual({
        valid: true,
        title: 'Google',
        errorMessage: ''
      });
    });
  });
});
