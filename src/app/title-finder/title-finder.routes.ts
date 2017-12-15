import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleFinderComponent } from './components/title-finder/title-finder.component';

const routes: Routes = [
    {
      path: '',
      component: TitleFinderComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TitleFinderRoutingModule { }
