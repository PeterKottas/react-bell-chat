import * as React from 'react';
import { ChatScrollAreaStyles } from './styles';
import { ChatScrollAreaClasses } from './classes';
export * from './classes';
export * from './styles';
export interface ChatScrollAreaProps {
    maxHeight?: string | number;
    minHeight?: string | number;
    children?: JSX.Element | JSX.Element[];
    styles?: ChatScrollAreaStyles;
    apiRef?: (api: ChatScrollAreaApi) => void;
    loadOldMessagesThreshold: number;
    onLoadOldMessages: () => Promise<void>;
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
export declare class ChatScrollArea extends React.PureComponent<ChatScrollAreaProps> {
    scrollContainer: HTMLDivElement;
    constructor(props: ChatScrollAreaProps);
    render(): React.JSX.Element;
    private onScroll;
    private containerRef;
}
