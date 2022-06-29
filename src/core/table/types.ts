import { Context, TypeResult } from '../types';

export type TextAlign = 'left' | 'right' | 'center';

export type TableColumn = {
  name: string;
  width: number;
  textAlign?: TextAlign;
};

export type TableItem = {
  context: Context;
  textAlign?: TextAlign;
};

export type TableItemGroup = {
  name: Context;
  textAlign?: TextAlign;
};

export type TableOptions = {
  borderHorizonChar?: string;
  borderVerticalChar?: string;
  borderXChar?: string;
  typeResult?: TypeResult;
  hideOuterBorderHorizon?: boolean;
  hideOuterBorderVertical?: boolean;
};

export type TableRowColumn = {
  context: Context;
  width: number;
  textAlign?: TextAlign;
};

export type TableRowOptions = {
  borderChar?: string;
  hideOuterBorder?: boolean
};

export type TableBorderOptions = {
  char?: string;
  xChar?: string;
  hideOuterXChar?: boolean;
};
