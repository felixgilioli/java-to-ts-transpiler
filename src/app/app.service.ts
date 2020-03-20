import {Injectable} from '@angular/core';
import {ClassTranspiler} from './classTranspiler';
import {TsClass} from './tsClass';

@Injectable()
export class AppService {

  transpile(javaClass: string): string {
    const classTranspiler = new ClassTranspiler(javaClass);

    const tsClass = new TsClass(
      classTranspiler.getClassName(),
      classTranspiler.getTSFields());

    return tsClass.tsClass;
  }
}
