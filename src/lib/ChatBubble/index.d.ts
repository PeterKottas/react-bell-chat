/// <reference types="react" />
import * as React from 'react';
import Message from '../Message';
export interface ChatBubbleStyles {
    userBubble?: React.CSSProperties;
    chatBubble?: React.CSSProperties;
    text?: React.CSSProperties;
}
export interface ChatBubbleProps {
    message: Message;
    bubbleStyles?: ChatBubbleStyles;
    bubblesCentered?: boolean;
    selfAuthorId: number;
}
export default class ChatBubble extends React.Component<ChatBubbleProps> {
    constructor(props: ChatBubbleProps);
    render(): JSX.Element;
}
