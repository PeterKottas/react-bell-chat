/// <reference types="react" />
import * as React from 'react';
import { ChatBubbleProps } from '../ChatBubble';
import Message from '../Message';
import { ChatFeedStyles } from './styles';
import { Author } from '../Author';
import { ChatBubbleStyles } from '../ChatBubble/';
import { AvatarProps, AvatarStyles } from '../Avatar';
import { IsTypingStyles } from '../IsTyping';
import { ChatScrollAreaProps, ChatScrollAreaApi, ChatScrollAreaStyles } from '../ChatScrollArea';
import { LastSeenAvatarProps, LastSeenAvatarStyles } from '../LastSeenAvatar';
import { DateRowProps, DateRowStyles } from '../DateRow';
import { LoadingMessagesProps, LoadingMessagesStyle } from '../LoadingMessages';
export interface ChatStyles {
    bubbleStyles?: ChatBubbleStyles;
    chatScrollArea?: ChatScrollAreaStyles;
    avatarStyles?: AvatarStyles;
    lastSeenAvatarStyles?: LastSeenAvatarStyles;
    dateRowStyles?: DateRowStyles;
    loadingMessagesStyle?: LoadingMessagesStyle;
    isTypingStyles?: IsTypingStyles;
    chatFeedStyles?: ChatFeedStyles;
}
export interface ChatFeedProps {
    className?: string;
    messages: Message[];
    authors: Author[];
    yourAuthorId: number;
    hasOldMessages?: boolean;
    loadOldMessagesThreshold?: number;
    bubblesCentered?: boolean;
    styles?: ChatStyles;
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
    customSystemChatBubble?: (props: ChatBubbleProps) => JSX.Element;
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
    scrollHeight: number;
    clientHeight: number;
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
        scrollHeight: number;
        clientHeight: number;
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
