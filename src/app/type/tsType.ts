export interface TsType {

  getTSType(type: string): string;

  accept(type: string): boolean;
}
