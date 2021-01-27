import { Injectable } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class ProjectionService {

  constructor() { }

  /**
   * Takes income, expenses, balance, and pay periods and
   * @param {number} income The amount of income expected for each pay period.
   * @param {number} expenses The amount of expenses expected for each pay period.
   * @param {number} balance The current balance of the account that you would like to see projected.
   * @param {number} payPeriods The number of pay periods in the future to project balance changes.
   * @returns {Object} Returns an Object that holds the dataSets and Labels for the chart.
   */
  calculateBalanceChart(income: number, expenses: number, balance: number, payPeriods: number): Object {
    if(payPeriods <= 0) return null;
    
    let points:number[] = [];
    let labels:Label[] = [];
    let currentBalance: number = balance;
    for (let i: number = 0; i <= payPeriods; i++) {
      if(i > 0) currentBalance += (income - expenses);
      currentBalance = Number(Math.round(parseFloat(currentBalance + 'e2')) + 'e-2');
      points.push(currentBalance);
      labels.push(i.toString());
    }
    let dataSets: ChartDataSets = {data: points, label: "Balance"};

    return {dataSets: dataSets, labels: labels};
  }
}
