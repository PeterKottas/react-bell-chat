/// <reference types="react" />
import * as React from 'react';
export interface ChatScrollAreaProps {
    maxHeight?: string | number;
    minHeight?: string | number;
    children?: any;
    containerStyles?: React.CSSProperties;
    apiRef?: (api: ChatScrollAreaApi) => void;
}
export interface ChatScrollAreaApi {
    scrollToBottom: () => void;
    scrollTo: (top: number) => void;
}
export declare class ChatScrollArea extends React.Component<ChatScrollAreaProps> {
    scrollContainer: HTMLDivElement;
    constructor(props: ChatScrollAreaProps);
    render(): JSX.Element;
}
export default ChatScrollArea;
