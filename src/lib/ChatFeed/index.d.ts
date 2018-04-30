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
import { LoadMoreMessagesProps } from '../LoadMoreMessages';
import { LoadingMessagesProps } from '../LoadingMessages';
export interface ChatFeedProps {
    className?: string;
    messages: Message[];
    authors: Author[];
    yourAuthorId: number;
    bubblesCentered?: boolean;
    bubbleStyles?: ChatBubbleStyles;
    maxHeight?: string | number;
    minHeight?: string | number;
    showDateRow?: boolean;
    showRecipientAvatar?: boolean;
    showRecipientLastSeenMessage?: boolean;
    showIsTyping?: boolean;
    showLoadMoreMessages?: boolean;
    showLoadingMessages?: boolean;
    showRecipientAvatarChatMessagesStyle?: React.CSSProperties;
    showRecipientLastSeenMessageChatMessagesStyle?: React.CSSProperties;
    showIsTypingChatMessagesStyle?: React.CSSProperties;
    customLoadingMessages?: (props: LoadingMessagesProps) => JSX.Element;
    customLoadMoreMessages?: (props: LoadMoreMessagesProps) => JSX.Element;
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
