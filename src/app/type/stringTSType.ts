import {TsType} from './tsType';

export class StringTSType implements TsType {

  accept(type: string): boolean {
    return type === 'String';
  }

  getTSType(type: string): string {
    return 'string';
  }

}
