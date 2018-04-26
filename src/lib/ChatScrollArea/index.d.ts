/// <reference types="react" />
import * as React from 'react';
export interface ChatScrollAreaProps {
    maxHeight?: number;
    refScrollElement: (scrollElement: IChatScrollArea) => void;
}
export interface IChatScrollArea {
    scrollToBottom: () => void;
}
export declare class ChatScrollArea extends React.Component<ChatScrollAreaProps> implements IChatScrollArea {
    scrollContainer: HTMLDivElement;
    constructor(props: ChatScrollAreaProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    scrollToBottom(): void;
    render(): JSX.Element;
}
export default ChatScrollArea;
