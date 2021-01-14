import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {

  account:any = {income: 0, expenses: 0, balance: 0};
  chart:any;

  constructor() { }

  ngOnInit(): void {
  }

  createChart(): void {
    
  }

  getAccount(income : number, expenses : number, balance : number) : void {
   
  }
}
