import { Component } from '@angular/core';
import { TitleFinderService } from '../../service/title-finder.service';
import { Observable } from 'rxjs/Observable';
import { TitleFinderModel } from '../../model/title-finder-response.model';

@Component({
  selector: 'app-title-finder',
  templateUrl: './title-finder.component.html',
  styleUrls: ['./title-finder.component.css']
})
export class TitleFinderComponent  {

  public url: string;
  public title: TitleFinderModel;
  public makingCall: boolean;
  public invalidInput: boolean;
  public readonly errorMessage =
    'Invalid URL - must be in the correct protocol and domain format. Example: https://google.com or http://www.google.com';

  public proto = 'https://';

  private internalUrl = '';

  constructor(private titleFinderService: TitleFinderService) { }

  public onSubmit(): void {
    this.internalUrl = this.proto + this.url;
    if (!this.validateInput()) {
      return;
    }
    this.invalidInput = false;
    this.makingCall = true;
    this.titleFinderService.getTitle(this.internalUrl).subscribe((response: TitleFinderModel) => {
      this.title = response;
      this.makingCall = false;
    });
  }

  private validateInput(): boolean {
    if (this.internalUrl && this.internalUrl.length > 0) {
      const regex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);

      if (this.internalUrl.match(regex)) {
        return true;
      }
    }
    this.invalidInput = true;
    return false;
  }

}
