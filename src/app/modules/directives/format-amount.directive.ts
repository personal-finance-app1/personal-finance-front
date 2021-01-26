import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Account } from 'src/app/models/account';

@Directive({
  selector: '[appFormatAmount]',
  providers: [{provide: NG_VALIDATORS, useExisting: FormatAmountDirective, multi: true}]
})
export class FormatAmountDirective implements Validator {
  
  //testing
  constructor() {
   
   }
   
  validate(control: AbstractControl): ValidationErrors {
    throw new Error('Method not implemented.');
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
