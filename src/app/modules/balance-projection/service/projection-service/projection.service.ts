import { Injectable } from '@angular/core';
import { BalanceProjectionModule } from '../../balance-projection.module';

@Injectable({
  providedIn: BalanceProjectionModule
})
export class ProjectionService {

  constructor() { }

  calculateBalanceChart(balance : number, payPeriods : number) : any {}

}
