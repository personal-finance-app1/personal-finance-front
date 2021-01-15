import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectionComponent } from './component/projection/projection.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [ProjectionComponent],
  imports: [CommonModule, ChartsModule],
  exports: [ProjectionComponent]
})
export class BalanceProjectionModule { }
