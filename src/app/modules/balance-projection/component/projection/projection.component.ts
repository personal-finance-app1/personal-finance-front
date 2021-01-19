import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective, Label, MultiDataSet } from 'ng2-charts';
import { Account } from 'src/app/models/account';
import { account$ } from 'src/environments/environment';
import { ProjectionService } from '../../service/projection-service/projection.service';
import { Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

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
  lineChartOptions : (ChartOptions);
  lineChartColors : Color[];
  lineChartPlugins : any;
  payPeriods : number = 6;
  doughnutColors:Color[] = [{backgroundColor:['rgba(231, 10, 91,1)', 'rgba(106,245,106,1)'], borderWidth: 2,  borderColor:'#DDD'}];
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(public projectionService : ProjectionService) { }

  ngOnInit(): void {
    //get the account from the environment variable and the corresponding information
    account$.subscribe(
      (account) => {
        this.account = account;
        this.doughnutChartData = [
          [this.account.expenses, this.account.income]
        ];
         this.createChart();
      });
      this.createChart();

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
    this.lineChartData = [ { data : this.balanceChart.dataSets.data, label : this.balanceChart.dataSets.label } ]; 
    this.lineChartLabels = this.balanceChart.labels;
    this.lineChartOptions = {
      responsive : true,
      scales : {
        xAxes : [{}],
        yAxes : [
          {
            id : 'y-axis-0',
            position : 'left',
          },
          {
            id : 'y-axis-1',
            position : 'right',
            gridLines : {
              color: 'rgba(255,0,0,0.3)',
            },
            ticks : {
              fontColor : 'red',
            }
          }
        ]
      }
    };
    this.lineChartColors =  [
      { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  this.lineChartPlugins = [pluginAnnotations];
  
  
  }

  getAccount() : void {
   
  }
}
