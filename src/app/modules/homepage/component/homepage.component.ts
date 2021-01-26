import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { account$ } from 'src/environments/environment';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
};

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  account : Account;

  constructor() { }

  ngOnInit(): void {
  }

  // tiles: Tile[] = [
  //   {text: 'Income', cols: 5, rows: 3, color: '#FFFFFF'},
  //   {text: 'Balance Projection', cols: 7, rows: 4, color: '#FFFFFF'},
  //   {text: 'Expenses', cols: 5, rows: 3, color: '#FFFFFF'},
  //   {text: 'Update Balance', cols: 7, rows: 2, color: '#FFFFFF'},
  // ];

}
