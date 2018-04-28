/// <reference types="react" />
import * as React from 'react';
export interface DateRowProps {
    date: Date;
    containerStyles?: React.CSSProperties;
}
declare const DateRow: (props: DateRowProps) => JSX.Element;
export default DateRow;
