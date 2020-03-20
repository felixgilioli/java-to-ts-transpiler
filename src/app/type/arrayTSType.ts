import {TsType} from './tsType';

export class ArrayTSType implements TsType {

  accept(type: string): boolean {
    return type.includes('<') && type.includes('>');
  }

  getTSType(type: string): string {
    return type.substring(type.indexOf('<') + 1, type.indexOf('>')) + '[]';
  }

}
