/// <reference types="react" />
import * as React from 'react';
export interface DateRowStyles {
    container?: React.CSSProperties;
}
export interface DateRowProps {
    date: Date;
    styles?: DateRowStyles;
}
declare const DateRow: (props: DateRowProps) => JSX.Element;
export default DateRow;
