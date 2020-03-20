import {TsType} from './tsType';

const JAVA_NUMBER_TYPES = [
  'BigDecimal',
  'Long',
  'long',
  'Integer',
  'int',
  'Double',
  'double',
  'Float',
  'float'
];

export class NumberTSType implements TsType {

  accept(type: string): boolean {
    for (const javaNumberType of JAVA_NUMBER_TYPES) {
      if (javaNumberType === type) {
        return true;
      }
    }
    return false;
  }

  getTSType(type: string): string {
    return 'number';
  }

}
