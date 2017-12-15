import { Component } from '@angular/core';
import { TitleFinderService } from '../../service/title-finder.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-title-finder',
  templateUrl: './title-finder.component.html',
  styleUrls: ['./title-finder.component.css']
})
export class TitleFinderComponent  {

  public url: string;
  public title: Observable<string>;

  constructor(private titleFinderService: TitleFinderService) { }

  public onSubmit(): void {
    this.title = this.titleFinderService.getTitle(this.url);
  }

}
