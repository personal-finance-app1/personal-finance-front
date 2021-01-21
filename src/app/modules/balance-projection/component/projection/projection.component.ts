import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { account$ } from 'src/environments/environment';
=======
>>>>>>> 2b24eb0fbbbe458c8f120f84fc9c4e93e2929254

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {

  account:any;
  chart:any;

  constructor() { }

  ngOnInit(): void {
  }

  createChart(): void {
    
  }

  getAccount() : void {
   
  }
}
