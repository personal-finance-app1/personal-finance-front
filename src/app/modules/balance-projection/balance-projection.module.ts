import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectionComponent } from './component/projection/projection.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [ProjectionComponent],
  imports: [CommonModule, MatSliderModule],
  exports: [ProjectionComponent]
})
export class BalanceProjectionModule { }
