import * as React from 'react';
export interface ChatScrollAreaStyles {
    container?: React.CSSProperties;
}
export interface ChatScrollAreaClasses {
    container?: string;
}
export interface ChatScrollAreaProps {
    maxHeight?: string | number;
    minHeight?: string | number;
    children?: JSX.Element | JSX.Element[];
    styles?: ChatScrollAreaStyles;
    apiRef?: (api: ChatScrollAreaApi) => void;
    loadOldMessagesThreshold: number;
    onLoadOldMessages: () => Promise<void>;
    style?: React.CSSProperties;
    className?: string;
    classes?: ChatScrollAreaClasses;
}
export interface ChatScrollAreaApi {
    scrollToBottom: (behavior?: ScrollBehavior) => void;
    scrollTo: (top: number) => void;
    scrollTop: () => number;
    scrollHeight: () => number;
    clientHeight: () => number;
    scrolledToBottom: () => boolean;
    scrolledToLoadThreshold: () => boolean;
}
export declare class ChatScrollArea extends React.Component<ChatScrollAreaProps> {
    scrollContainer: HTMLDivElement;
    constructor(props: ChatScrollAreaProps);
    render(): JSX.Element;
}
export default ChatScrollArea;
