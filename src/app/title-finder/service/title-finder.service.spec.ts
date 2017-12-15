import { TestBed, inject } from '@angular/core/testing';

import { TitleFinderService } from './title-finder.service';

describe('TitleFinderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitleFinderService]
    });
  });

  it('should be created', inject([TitleFinderService], (service: TitleFinderService) => {
    expect(service).toBeTruthy();
  }));
});
