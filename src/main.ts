import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { ShowDataService } from './services/show-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShowListComponent, ShowFormComponent],
  providers: [ShowDataService],
  template: `
  <h1>TV-Serien</h1>
    <app-show-list></app-show-list>
    <app-show-form></app-show-form>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
