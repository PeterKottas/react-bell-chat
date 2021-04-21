import * as React from 'react';
import { LoadingMessagesStyle } from './styles';
import { LoadingMessagesClasses } from './classes';
export * from './classes';
export * from './styles';
export interface LoadingMessagesProps {
    styles?: LoadingMessagesStyle;
    classes?: LoadingMessagesClasses;
    className?: string;
    isVisible: boolean;
}
declare const Memoized: React.NamedExoticComponent<LoadingMessagesProps>;
export { Memoized as LoadingMessages };
