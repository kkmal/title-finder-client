import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TitleFinderComponent } from './components/title-finder/title-finder.component';
import { TitleFinderRoutingModule } from './title-finder.routes';
import { TitleFinderService } from './service/title-finder.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TitleFinderRoutingModule,
    HttpModule
  ],
  providers: [TitleFinderService],
  declarations: [TitleFinderComponent]
})
export class TitleFinderModule { }
