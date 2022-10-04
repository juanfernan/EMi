import * as moment from 'moment';

export enum DateFormat {
  yyyymmdd,
  yyyymmdd_separatedbyMiddleDash,
}

export class DateUtils {

  // Get date from string with DateFormat
  public static getDate(strDate: string, dateFormat: DateFormat): Date | null {
    switch (dateFormat) {
      case DateFormat.yyyymmdd:
        const date: Date = new Date(
          parseInt(strDate.substring(0, 4)),
          parseInt(strDate.substring(4, 6)) - 1,
          parseInt(strDate.substring(6, 8))
        );
        return date;
      case DateFormat.yyyymmdd_separatedbyMiddleDash: return moment(strDate).toDate();

      default:
        return null;
    }
  }

  public static convertDateToString(date: Date, dateFormat: DateFormat): string | null {
    switch (dateFormat) {
      case DateFormat.yyyymmdd:
        return moment(date).format('YYYYMMDD');
      case DateFormat.yyyymmdd_separatedbyMiddleDash:
        return moment(date).format('YYYY-MM-DD');
      default:
        return null;
    }
  }

  // Get age of birth from string  with DateFormat
  public static getAgeFromDateString(strDate: string, dateFormat: DateFormat): number | null {
    switch (dateFormat) {
      case DateFormat.yyyymmdd:
        const birthDate: Date = new Date(parseInt(strDate.substring(0, 4)), parseInt(strDate.substring(4, 6)) - 1, parseInt(strDate.substring(6, 8)));
        return this.getAgeFromDate(birthDate);

      default:
        return null;
    }
  }

  public static getAgeFromDate(birthDate: Date) {
    const today: Date = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  public static comparteYearMonthDay(dateOne: Date | null, dateTwo: Date | null): boolean {
    if (!dateOne || !dateTwo) {
      return false;
    }
    if (
      dateOne.getFullYear() === dateTwo.getFullYear() &&
      dateOne.getMonth() === dateTwo.getMonth() &&
      dateOne.getDate() === dateTwo.getDate()
    ) {
      return true;
    }
    return false;
  }
}
