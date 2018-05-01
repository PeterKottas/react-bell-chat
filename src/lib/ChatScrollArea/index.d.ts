/// <reference types="react" />
import * as React from 'react';
export interface ChatScrollAreaProps {
    maxHeight?: string | number;
    minHeight?: string | number;
    refScrollElement: (scrollElement: ChatScrollAreaInterface) => void;
    children?: any;
}
export interface ChatScrollAreaInterface {
    scrollToBottom: () => void;
}
export declare class ChatScrollArea extends React.Component<ChatScrollAreaProps> implements ChatScrollAreaInterface {
    scrollContainer: HTMLDivElement;
    constructor(props: ChatScrollAreaProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    scrollToBottom(): void;
    render(): JSX.Element;
}
export default ChatScrollArea;
