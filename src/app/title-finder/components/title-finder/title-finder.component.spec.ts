import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleFinderComponent } from './title-finder.component';

describe('TitleFinderComponent', () => {
  let component: TitleFinderComponent;
  let fixture: ComponentFixture<TitleFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
