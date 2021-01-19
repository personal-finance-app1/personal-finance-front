import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { Account } from 'src/app/models/account';
import { account$ } from 'src/environments/environment';
import { ProjectionService } from '../../service/projection-service/projection.service';
import { Color } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {

  account : Account;
  balanceChart : any;
  //private incomeExpenseChart : any;
  doughnutChartLabels : Label[] = ['Expenses', 'Income'];
  doughnutChartData : MultiDataSet;
  lineChartData : ChartDataSets [];
  lineChartLabels : Label[];
  payPeriods : number = 6;
  doughnutColors:Color[] = [{backgroundColor:['rgba(231, 10, 91,1)', 'rgba(106,245,106,1)'], borderWidth: 2,  borderColor:'#DDD'}];

  constructor(public projectionService : ProjectionService) { }

  ngOnInit(): void {
    //get the account from the environment variable and the corresponding information
    account$.subscribe(
      (account) => {
        this.account = account;
        this.doughnutChartData = [
          [this.account.expenses, this.account.income]
        ];
      });

      //account$.next(new Account(1500, 600, 2000));
      this.account = new Account(1500, 600, 2000);
      this.doughnutChartData = [
        [this.account.expenses, this.account.income]
      ];
  }

  /**
   * Graphs the balance over a number of pay periods for an account, as well as the income and expenses.
   * The balance is graphed in a line chart.
   * The income and expenses are graphed in a doughnut chart.
   * @returns void
   */
  createChart(): void {
    this.balanceChart = this.projectionService.calculateBalanceChart(this.account.income, this.account.expenses, this.account.balance, this.payPeriods);
    //this.incomeExpenseChart = this.projectionService.caluclateIncomeExpenseChart(this.account.income, this.account.expenses, this.payPeriods);
    this.lineChartData = [this.balanceChart.dataSets]; 
    this.lineChartLabels = [this.balanceChart.labels];

  }

  getAccount() : void {
   
  }
}
