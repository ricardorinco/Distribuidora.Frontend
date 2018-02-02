import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'booleanToString' })
export class BooleanToStringPipe implements PipeTransform {

  constructor() { }

  transform(value: boolean) {
    if (value) {
      return 'Ativo';
    } else {
      return 'Inativo';
    }
  }

}
