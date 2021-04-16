import * as React from 'react';
export interface DateRowStyles {
  container?: React.CSSProperties;
}
export interface DateRowClasses {
  container?: string;
}
export interface DateRowProps {
  date: Date;
  styles?: DateRowStyles;
  style?: React.CSSProperties;
  className?: string;
  classes?: DateRowClasses;
}
declare const _default: React.NamedExoticComponent<DateRowProps>;
export default _default;
