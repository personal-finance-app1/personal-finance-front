import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-declare-balance',
  templateUrl: './declare-balance.component.html',
  styleUrls: ['./declare-balance.component.css']
})
export class DeclareBalanceComponent implements OnInit {
 
  constructor(@Inject(MAT_DIALOG_DATA) public declareBalance: any) { }

  ngOnInit(): void {
  }

}
