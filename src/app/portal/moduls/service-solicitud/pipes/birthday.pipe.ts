import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthday'
})
export class BirthdayPipe implements PipeTransform {
  transform(value: string): number {
    // metodo realizado para recibir string como formato = "19901105" caso contrario agregar otra logica diferente.
    const _year = Number(value.substring(0, 4));
    const _mont = Number(value.substring(4, 6));
    const _day = Number(value.substring(6, 8));

    const dateNow = new Date();
    const dateBirthday = new Date(_year, _mont, _day);

    const year = dateNow.getFullYear() - dateBirthday.getFullYear();
    const month = (dateBirthday.getMonth() - 1) - dateNow.getMonth();

    if (month == 0) {
      const day = dateBirthday.getDate() - dateNow.getDate();
      if (day > 0)
        return year - 1;
      else
        return year;
    }
    else if (month > 0) {
      return year - 1;
    }
    else
      return year;
  }
}
