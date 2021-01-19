import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectionComponent } from './component/projection/projection.component';
import { MatSliderModule  } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ProjectionComponent],
  imports: [CommonModule, MatSliderModule, MatGridListModule, ChartsModule],
  exports: [ProjectionComponent]
})
export class BalanceProjectionModule { }
