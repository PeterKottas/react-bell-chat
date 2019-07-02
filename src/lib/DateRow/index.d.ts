/// <reference types="react" />
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
declare const DateRow: (props: DateRowProps) => JSX.Element;
export default DateRow;
