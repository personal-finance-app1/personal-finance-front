import { Component, OnInit } from '@angular/core';
import { account$ } from 'src/environments/environment';
import { ProjectionService } from '../../service/projection-service/projection.service';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {

  account : any;
  balanceChart : any;
  incomeExpenseChart : any;
  payPeriods : number = 6;

  constructor(public projectionService : ProjectionService) { }

  ngOnInit(): void {
    account$.subscribe(
      (account) => {
        this.account = account;
      }
    );
  }

  /**
   * Takes the expected balance, number of pay periods, income, and expenses provided by the user. 
   * This information is then used to graph the income and expenses in a doughnut chart and the balance across the number of pay periods in a line chart.
   */
  createChart(): void {
    this.balanceChart = this.projectionService.calculateBalanceChart(this.account.balance, this.payPeriods);
    this.incomeExpenseChart = this.projectionService.caluclateIncomeExpenseChart(this.account.income, this.account.expenses, this.payPeriods);
  }

  getAccount() : void {
   
  }
}
