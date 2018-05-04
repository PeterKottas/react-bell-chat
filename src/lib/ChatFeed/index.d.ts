/// <reference types="react" />
import * as React from 'react';
import { ChatBubbleProps } from '../ChatBubble';
import Message from '../Message';
import { Author } from '../Author';
import { ChatBubbleStyles } from '../ChatBubble/';
import { AvatarProps } from '../Avatar';
import { ChatScrollAreaProps, ChatScrollAreaApi } from '../ChatScrollArea';
import { LastSeenAvatarProps } from '../LastSeenAvatar';
import { DateRowProps } from '../DateRow';
import { LoadingMessagesProps } from '../LoadingMessages';
export interface ChatFeedProps {
    className?: string;
    messages: Message[];
    authors: Author[];
    yourAuthorId: number;
    hasOldMessages?: boolean;
    loadOldMessagesThreshold?: number;
    bubblesCentered?: boolean;
    bubbleStyles?: ChatBubbleStyles;
    maxHeight?: string | number;
    minHeight?: string | number;
    showDateRow?: boolean;
    showRecipientAvatar?: boolean;
    showRecipientLastSeenMessage?: boolean;
    showIsTyping?: boolean;
    showLoadingMessages?: boolean;
    showRecipientAvatarChatMessagesStyle?: React.CSSProperties;
    showRecipientLastSeenMessageChatMessagesStyle?: React.CSSProperties;
    showIsTypingChatMessagesStyle?: React.CSSProperties;
    customLoadingMessages?: (props: LoadingMessagesProps) => JSX.Element;
    customChatBubble?: (props: ChatBubbleProps) => JSX.Element;
    customAvatar?: (props: AvatarProps) => JSX.Element;
    customScrollArea?: (props: ChatScrollAreaProps) => JSX.Element;
    customIsTyping?: (props: ChatScrollAreaProps) => JSX.Element;
    customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
    customDateRow?: (props: DateRowProps) => JSX.Element;
    onLoadOldMessages?: () => Promise<void>;
    ref?: (api: ChatFeedApi) => void;
}
export interface ChatFeedState {
    isLoadingMessages: boolean;
}
export interface ChatFeedApi {
    onMessageSend: () => void;
    scrollApi: ChatScrollAreaApi;
}
export interface ChatFeedSnapshot {
    wasScrolledToBottom: boolean;
}
export default class ChatFeed extends React.Component<ChatFeedProps, ChatFeedState> implements ChatFeedApi {
    static defaultProps: ChatFeedProps;
    scrollApi: ChatScrollAreaApi;
    constructor(props: ChatFeedProps);
    onMessageSend(): void;
    shouldComponentUpdate(nextProps: ChatFeedProps, nextState: ChatFeedState): boolean;
    componentDidMount(): void;
    getSnapshotBeforeUpdate(prevProps: ChatFeedProps, prevState: ChatFeedState): {
        wasScrolledToBottom: boolean;
    };
    componentDidUpdate(prevProps: ChatFeedProps, prevState: ChatFeedState, snapshot: ChatFeedSnapshot): void;
    shallowDiffers(a: object, b: object): boolean;
    /**
     * Determines what type of message/messages to render.
     */
    renderMessages(messages: Message[]): JSX.Element[];
    renderIsTyping(): JSX.Element;
    /**
     * render : renders our chat feed
     */
    render(): JSX.Element;
    private onLoadOldMessages();
}
