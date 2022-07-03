import { TextAlign } from '../types';

export type ParseTextOptions = {
  maxLength?: number;
  indentBefore?: number;
  indentAfter?: number;
};

export type RowTextOptions = {
  textAlign?: TextAlign;
  borderChar?: string;
};
