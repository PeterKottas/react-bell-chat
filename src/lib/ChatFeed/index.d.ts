/// <reference types="react" />
import * as React from 'react';
import { ChatBubbleProps } from '../ChatBubble';
import Message from '../Message';
import { Author } from '../Author';
import { ChatBubbleStyles } from '../ChatBubble/';
import { AvatarProps } from '../Avatar';
import { ChatScrollAreaProps } from '../ChatScrollArea';
import { LastSeenAvatarProps } from '../LastSeenAvatar';
import { DateRowProps } from '../DateRow';
export interface ChatFeedProps {
    className?: string;
    authors: Author[];
    yourAuthorId: number;
    bubblesCentered?: boolean;
    bubbleStyles?: ChatBubbleStyles;
    maxHeight?: string | number;
    minHeight?: string | number;
    messages: Message[];
    showDateRow?: boolean;
    showRecipientAvatar?: boolean;
    showRecipientAvatarChatMessagesStyle?: React.CSSProperties;
    showRecipientLastSeenMessage?: boolean;
    showRecipientLastSeenMessageChatMessagesStyle?: React.CSSProperties;
    showIsTyping?: boolean;
    showIsTypingChatMessagesStyle?: React.CSSProperties;
    customChatBubble?: (props: ChatBubbleProps) => JSX.Element;
    customAvatar?: (props: AvatarProps) => JSX.Element;
    customScrollArea?: (props: ChatScrollAreaProps) => JSX.Element;
    customIsTyping?: (props: ChatScrollAreaProps) => JSX.Element;
    customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
    customDateRow?: (props: DateRowProps) => JSX.Element;
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
    renderIsTyping(): JSX.Element;
    /**
     * render : renders our chat feed
     */
    render(): JSX.Element;
}
