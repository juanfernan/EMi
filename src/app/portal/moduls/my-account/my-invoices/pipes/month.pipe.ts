import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {
  separator = "/"
  months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]
  transform(value: string, ...args: unknown[]): unknown {
    const arrayMonthNumber = value.split(this.separator);
    const monthNumber = arrayMonthNumber[1];
    const year = arrayMonthNumber[2];
    const index = Number(Number(monthNumber) - 1);
    return this.months[(index)] + ' ' + year;
  }

}
