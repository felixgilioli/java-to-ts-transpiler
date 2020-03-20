import {Field} from './field';
import {Types} from './type/types';

export class ClassTranspiler {

  constructor(private javaClass: string) {
  }

  public getClassName(): string {
    const indexClassDefinition = this.javaClass.indexOf('public class ') + 13;
    return this.javaClass.substring(indexClassDefinition, this.javaClass.indexOf(' ', indexClassDefinition));
  }

  public getFields(): Field[] {
    return this.javaClass.match(/[^\r\n]+/g)
      .map(s => s.trim())
      .filter(s => s.startsWith('private ') && s.endsWith(';'))
      .map(s => s.substring(8, this.getEndIndexField(s)))
      .map(s => s.split(' '))
      .map(s => new Field(s[0], s[s.length - 1]));
  }

  // noinspection JSMethodCanBeStatic
  private getEndIndexField(str: string): number {
    if (str.includes('=')) {
      str = str.substring(0, str.indexOf('='));
    }
    return str.length - 1;
  }

  getTSFields(): Field[] {
    const allTypes = Types.getAllTypes();
    const fields = this.getFields();

    fields.forEach(f => {
      allTypes.filter(tsType => tsType.accept(f.type))
        .forEach(tsType => f.type = tsType.getTSType(f.type));
    });

    return fields;
  }
}
