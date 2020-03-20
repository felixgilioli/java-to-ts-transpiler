import {Field} from './field';

export class TsClass {

  constructor(private className: string,
              private fieldList: Field[]) {
  }

  get tsClass(): string {
    return `export class ${this.className} {
${
  this.fieldList.map(f => {
    return `  ${f.name}: ${f.type};\n`;
  }).join('')
}}`;
  }

}
