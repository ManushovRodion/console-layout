import { Context, TextAlign } from '../types';

export type CardOptions = {
  borderHorizonChar?: string;
  borderVerticalChar?: string;
  borderXChar?: string;
  typeResult?: 'string' | 'array';
  hidePadding?: boolean;
  viewMargin?: boolean;
};

export type CardTitle = {
  context: Context;
  textAlign?: TextAlign;
};
