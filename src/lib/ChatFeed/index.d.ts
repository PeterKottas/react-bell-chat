/// <reference types="react" />
import * as React from 'react';
import { ChatBubbleProps } from '../ChatBubble';
import Message from '../Message';
import { Author } from '../Author';
import { ChatBubbleStyles } from '../ChatBubble/';
import { AvatarProps } from '../Avatar';
import { ChatScrollAreaProps } from '../ChatScrollArea';
export interface ChatFeedProps {
    authors: Author[];
    selfAuthorId: number;
    bubblesCentered?: boolean;
    bubbleStyles?: ChatBubbleStyles;
    maxHeight?: string | number;
    messages: Message[];
    showAvatar?: boolean;
    customChatBubble?: (props: ChatBubbleProps) => JSX.Element;
    customAvatar?: (props: AvatarProps) => JSX.Element;
    customScrollArea?: (props: ChatScrollAreaProps) => JSX.Element;
    onMessageSendRef?: (onMessageSend: () => void) => void;
}
export default class ChatFeed extends React.Component<ChatFeedProps> {
    static defaultProps: ChatFeedProps;
    private scrollElementRef;
    constructor(props: ChatFeedProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     * Determines what type of message/messages to render.
     */
    renderMessages(messages: Message[]): JSX.Element[];
    /**
     * render : renders our chat feed
     */
    render(): JSX.Element;
}
