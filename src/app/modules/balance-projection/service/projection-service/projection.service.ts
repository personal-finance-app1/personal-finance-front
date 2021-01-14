import { Injectable } from '@angular/core';
import { BalanceProjectionModule } from '../../balance-projection.module';

@Injectable({
  providedIn: BalanceProjectionModule
})
export class ProjectionService {

  constructor() { }

  caluclateIncomeExpenseChart(income: number, expenses : number, payPeriods : number) : any {
    
  }
}
