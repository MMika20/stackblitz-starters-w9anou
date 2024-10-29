import { Injectable } from '@angular/core';
import { Show } from '../models/show';

@Injectable()
export class ShowDataService {

  shows: Show[] = [];

  constructor() {
    this.shows.push(
      new Show(1, 'Squid Game: The Challenge'),
      new Show(2, 'Bad Surgeon'),
      new Show(3, 'Völlig zerstört')
      )
   }

   saveShow(show: Show){
     this.shows.push(show);
   }

}