import * as React from 'react';
export interface LoadingMessagesClasses {
    container?: string;
}
export interface LoadingMessagesStyle {
    container?: React.CSSProperties;
    spinnerColor?: string;
}
export interface LoadingMessagesProps {
    styles?: LoadingMessagesStyle;
    classes?: LoadingMessagesClasses;
    style?: React.CSSProperties;
    className?: string;
    isVisible: boolean;
}
declare const _default: React.NamedExoticComponent<LoadingMessagesProps>;
export default _default;
