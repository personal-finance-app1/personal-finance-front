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
    //get the account from the environment variable account to get account info
    account$.subscribe(
      (account) => {
        this.account = account;
      }
    );
  }

  // tiles: Tile[] = [
  //   {text: 'Income', cols: 5, rows: 3, color: '#FFFFFF'},
  //   {text: 'Balance Projection', cols: 7, rows: 4, color: '#FFFFFF'},
  //   {text: 'Expenses', cols: 5, rows: 3, color: '#FFFFFF'},
  //   {text: 'Update Balance', cols: 7, rows: 2, color: '#FFFFFF'},
  // ];

}
