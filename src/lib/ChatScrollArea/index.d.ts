/// <reference types="react" />
import * as React from 'react';
export interface ChatScrollAreaProps {
    maxHeight?: string | number;
    minHeight?: string | number;
    children?: JSX.Element | JSX.Element[];
    containerStyles?: React.CSSProperties;
    apiRef?: (api: ChatScrollAreaApi) => void;
    loadOldMessagesThreshold: number;
    onLoadOldMessages: () => Promise<void>;
}
export interface ChatScrollAreaApi {
    scrollToBottom: (behavior?: ScrollBehavior) => void;
    scrollTo: (top: number) => void;
    scrolledToBottom: () => boolean;
    scrolledToLoadThreshold: () => boolean;
}
export declare class ChatScrollArea extends React.Component<ChatScrollAreaProps> {
    scrollContainer: HTMLDivElement;
    constructor(props: ChatScrollAreaProps);
    render(): JSX.Element;
}
export default ChatScrollArea;
