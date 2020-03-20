import {TsType} from './tsType';
import {StringTSType} from './stringTSType';
import {NumberTSType} from './numberTSType';
import {ArrayTSType} from './arrayTSType';
import {BooleanTSType} from './booleanTSType';
import {DateTSType} from './dateTSType';

export class Types {

  public static getAllTypes(): TsType[] {
    return [
      new StringTSType(),
      new NumberTSType(),
      new ArrayTSType(),
      new BooleanTSType(),
      new DateTSType(),
    ];
  }
}
