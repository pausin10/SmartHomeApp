import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  devices: [];
  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getHome()
    .subscribe(
      res => {
        console.log(res);
        this.devices = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
