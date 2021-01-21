import { Component, OnInit } from '@angular/core';
import {  Label, MultiDataSet } from 'ng2-charts';
import { Account } from 'src/app/models/account';
import { account$ } from 'src/environments/environment';
import { ProjectionService } from '../../service/projection-service/projection.service';
import { Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { MatSliderChange } from '@angular/material/slider';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {

  account : Account;
  
  doughnutChartLabels : Label[] = ['Expenses', 'Income'];
  doughnutChartData : MultiDataSet;
  doughnutChartOptions: ChartOptions = {
    legend: {
      labels:{
        fontSize: 20
      }
    },
    tooltips: {
      callbacks: {
        title : function(tooltipItem){
          console.log(tooltipItem[0].label.toString());
          return tooltipItem[0].label.toString();
        },
        label: function(toolTipItem, data) {
          console.log("$" + data.datasets[toolTipItem.datasetIndex].data[toolTipItem.index]);
          //console.log("data.datasets[1].label: "+ data.datasets[1].label);
          //return data.datasets[toolTipItem.datasetIndex].label;
            return data.labels[toolTipItem.index] as string;
        }
      }
    }
  };
  doughnutColors:Color[] = [{backgroundColor:['rgba(231, 10, 91,1)', 'rgba(106,245,106,1)'], borderWidth: 2,  borderColor:'#DDD'}];

  lineChartData : ChartDataSets [];
  lineChartLabels : Label[];
  lineChartOptions : ChartOptions = {
    title: {
      display: true, 
      text:'Projected Balance',
      fontSize: 25
    },
    tooltips: {
      //formatting how the data is displayed when you hover over it in the graph
      callbacks:{
        title: function(tooltipItem) {
          return "Pay Period " + tooltipItem[0].label.toString();//displays "Pay Period" and the pay period number (i.e. Pay Period 2)
        },
        label: function(tooltipItem) {
          return "$"+ Number(tooltipItem.value).toFixed(2);//displays the balance with two decimal places
        }
      }
    },
    legend: {
      display: false
    },
    scales:{
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Account Balance',
          fontSize: 20
        },
        ticks: {
          // Include a dollar sign in the tick marks
          callback: function(tooltipItem) {
              return '$' + tooltipItem;
          },
          fontSize: 16
      }
      }],
      xAxes:[{
        scaleLabel: {
          display: true,
          labelString: 'Pay Periods',
          fontSize: 20
        },
        ticks: {
          fontSize: 16
        }
      }]
    }
  };

  lineChartColors : Color[];
  lineChartPlugins : any;

  title : string;
  payPeriods : number = 6;

  tiles: Tile[] = [
    {text: '',         cols: 1, rows: 1, color: 'rgba(0,0,0,0)'},
    {text: 'Chart',    cols: 2, rows: 5, color: 'rgba(0,0,0,0)'},
    {text: 'Doughnut', cols: 1, rows: 2, color: 'rgba(0,0,0,0)'},
    {text: 'Slider',   cols: 1, rows: 1, color: 'rgba(0,0,0,0)'},
    {text: '',         cols: 1, rows: 1, color: 'rgba(0,0,0,0)'},
  ];

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

      this.account = new Account(1500.12, 1300.47, 300);
      this.doughnutChartData = [
        [this.account.expenses, this.account.income]
      ];

      this.createChart();
  }

  /**
   * Graphs the balance over a number of pay periods for an account, as well as the income and expenses.
   * The balance is graphed in a line chart.
   * The income and expenses are graphed in a doughnut chart.
   * @returns void
   */
  createChart(): void {
    this.title = "Projected Balance";
    let chartData:any = this.projectionService.calculateBalanceChart(this.account.income, this.account.expenses, this.account.balance, this.payPeriods);
    //this.incomeExpenseChart = this.projectionService.caluclateIncomeExpenseChart(this.account.income, this.account.expenses, this.payPeriods);
    this.lineChartData = [ { data : chartData.dataSets.data, label : chartData.dataSets.label } ]; 
    this.lineChartLabels = chartData.labels;
    this.lineChartColors =  [
      { 
      backgroundColor: 'rgba(115, 165, 194,0.3)',
      borderColor: 'rgba( 115, 165, 194)',
      pointBackgroundColor: 'rgba( 115, 165, 194,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba( 115, 165, 194,0.8)'
    }
  ];
  }

  onInputChange(event:MatSliderChange) {
    this.payPeriods = event.value;
    this.createChart();
  }

  getAccount() : void {
   
  }
}
