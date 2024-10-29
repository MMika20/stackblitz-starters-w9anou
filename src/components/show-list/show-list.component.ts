import { Component, OnInit } from '@angular/core';
import { Show } from '../../models/show';
import { ShowDataService } from '../../services/show-data.service';

@Component({
  selector: 'app-show-list',
  standalone: true,
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  constructor(private showDataService: ShowDataService) { 

  }

  ngOnInit() {
  }

  get shows(): Show[] {
    return this.showDataService.shows;
    }

}