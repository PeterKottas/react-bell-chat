import * as React from 'react';
import { BubbleGroupClasses } from '../BubbleGroup';
import { ChatBubbleProps } from '../ChatBubble';
import Message from '../Message';
import { ChatFeedStyles } from './styles';
import { Author } from '../Author';
import { ChatBubbleStyles } from '../ChatBubble/';
import { AvatarProps, AvatarStyles, AvatarClasses } from '../Avatar';
import { IsTypingStyles, IsTypingClasses } from '../IsTyping';
import { ChatScrollAreaProps, ChatScrollAreaApi, ChatScrollAreaStyles, ChatScrollAreaClasses } from '../ChatScrollArea';
import { LastSeenAvatarProps, LastSeenAvatarStyles, LastSeenAvatarClasses } from '../LastSeenAvatar';
import { DateRowProps, DateRowStyles, DateRowClasses } from '../DateRow';
import { LoadingMessagesProps, LoadingMessagesStyle, LoadingMessagesClasses } from '../LoadingMessages';
import { BubbleGroupStyles } from '../BubbleGroup/styles';
import { ChatBubbleClasses } from './../ChatBubble/index';
export { ChatFeedStyles };
export interface ChatFeedClasses {
    chatPanel?: string;
    showRecipientAvatarChatMessages?: string;
    showRecipientLastSeenMessageChatMessages?: string;
    showIsTypingChatMessages?: string;
    chatMessages?: string;
}
export interface ChatFeedProps {
    className?: string;
    messages: Message[];
    authors: Author[];
    yourAuthorId: number;
    hasOldMessages?: boolean;
    loadOldMessagesThreshold?: number;
    bubblesCentered?: boolean;
    maxHeight?: string | number;
    minHeight?: string | number;
    showDateRow?: boolean;
    showRecipientAvatar?: boolean;
    showRecipientLastSeenMessage?: boolean;
    showIsTyping?: boolean;
    showLoadingMessages?: boolean;
    customLoadingMessages?: (props: LoadingMessagesProps) => JSX.Element;
    customChatBubble?: (props: ChatBubbleProps) => JSX.Element;
    customSystemChatBubble?: (props: ChatBubbleProps) => JSX.Element;
    customAvatar?: (props: AvatarProps) => JSX.Element;
    customScrollArea?: (props: ChatScrollAreaProps) => JSX.Element;
    customIsTyping?: (props: ChatScrollAreaProps) => JSX.Element;
    customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
    customDateRow?: (props: DateRowProps) => JSX.Element;
    onLoadOldMessages?: () => Promise<void>;
    style?: React.CSSProperties;
    styles?: ChatFeedStyles;
    bubbleGroupStyles?: BubbleGroupStyles;
    chatBubbleStyles?: ChatBubbleStyles;
    chatScrollArea?: ChatScrollAreaStyles;
    avatarStyles?: AvatarStyles;
    lastSeenAvatarStyles?: LastSeenAvatarStyles;
    dateRowStyles?: DateRowStyles;
    loadingMessagesStyle?: LoadingMessagesStyle;
    isTypingStyles?: IsTypingStyles;
    chatFeedStyles?: ChatFeedStyles;
    classes?: ChatFeedClasses;
    chatBubbleClasses?: ChatBubbleClasses;
    bubbleGroupClasses?: BubbleGroupClasses;
    chatScrollAreaClasses?: ChatScrollAreaClasses;
    avatarClasses?: AvatarClasses;
    lastSeenAvatarClasses?: LastSeenAvatarClasses;
    dateRowClasses?: DateRowClasses;
    loadingMessagesClasses?: LoadingMessagesClasses;
    isTypingClasses?: IsTypingClasses;
    chatFeedClasses?: ChatFeedStyles;
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
export default class ChatFeed extends React.PureComponent<ChatFeedProps, ChatFeedState> implements ChatFeedApi {
    static defaultProps: ChatFeedProps;
    scrollApi: ChatScrollAreaApi;
    constructor(props: ChatFeedProps);
    onMessageSend(): void;
    componentDidMount(): void;
    getSnapshotBeforeUpdate(prevProps: ChatFeedProps, prevState: ChatFeedState): {
        wasScrolledToBottom: boolean;
        scrollHeight: number;
        clientHeight: number;
    };
    componentDidUpdate(prevProps: ChatFeedProps, prevState: ChatFeedState, snapshot: ChatFeedSnapshot): void;
    /**
     * Determines what type of message/messages to render.
     */
    renderMessages(messages: Message[]): JSX.Element[];
    renderIsTyping(): JSX.Element;
    apiRef(e: ChatScrollAreaApi): void;
    /**
     * render : renders our chat feed
     */
    render(): JSX.Element;
    private onLoadOldMessages;
}
