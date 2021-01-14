import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {

  account:any = {income: 1200, expenses: 800, balanace: 1800};
  chart:any;

  constructor() { }

  ngOnInit(): void {
  }

  createChart(): void {
    
  }

}
