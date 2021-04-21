import * as React from 'react';
import { DateRowClasses } from './classes';
import { DateRowStyles } from './styles';
export * from './classes';
export * from './styles';
export interface DateRowProps {
    date: Date;
    styles?: DateRowStyles;
    classes?: DateRowClasses;
}
declare const Memoized: React.NamedExoticComponent<DateRowProps>;
export { Memoized as DateRow };
