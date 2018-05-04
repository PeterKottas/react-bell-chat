/// <reference types="react" />
import * as React from 'react';
export interface LoadingMessagesProps {
    containerStyles?: object;
    spinnerColor?: string;
    isVisible: boolean;
}
declare const LoadingMessages: React.SFC<LoadingMessagesProps>;
export default LoadingMessages;
