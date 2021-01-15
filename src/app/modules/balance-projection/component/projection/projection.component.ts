import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { Account } from 'src/app/models/account';
import { account$ } from 'src/environments/environment';
import { ProjectionService } from '../../service/projection-service/projection.service';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {

  private account : Account;
  private balanceChart : any;
  //private incomeExpenseChart : any;
  private doughnutChartLabels : Label[] = ['Income', 'Expenses'];
  private doughnutChartData : MultiDataSet;
  private payPeriods : number = 6;


  constructor(public projectionService : ProjectionService) { }

  ngOnInit(): void {
    //get the account from the environment variable and the corresponding information
    account$.subscribe(
      (account) => {
        this.account = account;
        this.doughnutChartData = [
          [this.account.income, this.account.expenses]
        ];
      }
    );
  }

  /**
   * Graphs the balance over a number of pay periods for an account, as well as the income and expenses.
   * The balance is graphed in a line chart.
   * The income and expenses are graphed in a doughnut chart.
   * @return void
   */
  createChart(): void {
    this.balanceChart = this.projectionService.calculateBalanceChart(this.account.income, this.account.expenses, this.account.balance, this.payPeriods);
    //this.incomeExpenseChart = this.projectionService.caluclateIncomeExpenseChart(this.account.income, this.account.expenses, this.payPeriods);

  }

  getAccount() : void {
   
  }
}
