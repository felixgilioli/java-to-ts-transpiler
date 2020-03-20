import {TsType} from './tsType';

export class BooleanTSType implements TsType {

  accept(type: string): boolean {
    return type === 'Boolean';
  }

  getTSType(type: string): string {
    return 'boolean';
  }

}
