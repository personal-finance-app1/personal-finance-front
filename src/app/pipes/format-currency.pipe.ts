import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: number): string {
    value /= 100;
    return "$" + value.toFixed(2);
  }

}
