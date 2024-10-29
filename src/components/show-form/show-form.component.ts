import { Component, OnInit } from '@angular/core';
import { Show } from '../../models/show';
import { FormsModule } from '@angular/forms';
import { ShowDataService } from '../../services/show-data.service';

@Component({
  selector: 'app-show-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent implements OnInit {

  show: Show;

  constructor(private showDataService:ShowDataService) { 
    this.show = new Show();
  }

  save() {
    this.showDataService.saveShow(this.show);
    this.show=new Show();
  }

  ngOnInit() {
  }

}