import {TsType} from './tsType';

export class DateTSType implements TsType {

  accept(type: string): boolean {
    return type === 'LocalDate' ||
      type === 'Date' ||
      type === 'LocalDateTime';
  }

  getTSType(type: string): string {
    return 'Date';
  }

}
