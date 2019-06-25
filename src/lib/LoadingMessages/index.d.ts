/// <reference types="react" />
import * as React from 'react';
export interface LoadingMessagesStyle {
    containerStyle?: React.CSSProperties;
    spinnerColor?: string;
}
export interface LoadingMessagesProps {
    styles?: LoadingMessagesStyle;
    isVisible: boolean;
}
declare const LoadingMessages: React.SFC<LoadingMessagesProps>;
export default LoadingMessages;
