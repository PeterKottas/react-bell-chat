/// <reference types="react" />
import * as React from 'react';
export interface ChatScrollAreaProps {
    maxHeight?: string | number;
    minHeight?: string | number;
    children?: any;
    apiRef?: (api: ChatScrollAreaApi) => void;
}
export interface ChatScrollAreaApi {
    scrollToBottom: () => void;
}
export declare class ChatScrollArea extends React.Component<ChatScrollAreaProps> implements ChatScrollAreaApi {
    scrollContainer: HTMLDivElement;
    constructor(props: ChatScrollAreaProps);
    scrollToBottom(): void;
    render(): JSX.Element;
}
export default ChatScrollArea;
