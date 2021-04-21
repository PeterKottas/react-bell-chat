import * as React from 'react';
import { BubbleGroupClasses, BubbleGroupStyles } from '../BubbleGroup';
import { ChatBubbleProps, MessageRenderProps } from '../ChatBubble';
import Message from '../Message';
import { Author } from '../Author';
import { ChatBubbleStyles, ChatBubbleClasses } from '../ChatBubble';
import { AvatarProps, AvatarStyles, AvatarClasses } from '../Avatar';
import { IsTypingStyles, IsTypingClasses } from '../IsTyping';
import { ChatScrollAreaProps, ChatScrollAreaApi, ChatScrollAreaStyles, ChatScrollAreaClasses } from '../ChatScrollArea';
import { ChatMessagesContainerProps, ChatMessagesContainerClasses, ChatMessagesContainerStyles } from '../ChatMessagesContainer';
import { LastSeenAvatarProps, LastSeenAvatarStyles, LastSeenAvatarClasses } from '../LastSeenAvatar';
import { DateRowProps, DateRowStyles, DateRowClasses } from '../DateRow';
import { LoadingMessagesProps, LoadingMessagesStyle, LoadingMessagesClasses } from '../LoadingMessages';
import { ChatFeedStyles } from './styles';
import { ChatFeedClasses } from './classes';
export * from './classes';
export * from './styles';
export interface ChatFeedProps<T = string> {
    className?: string;
    messages: Message<T>[];
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
    CustomLoadingMessages?: (props: LoadingMessagesProps) => JSX.Element;
    CustomChatBubble?: (props: ChatBubbleProps<T>) => JSX.Element;
    CustomSystemChatBubble?: (props: ChatBubbleProps<T>) => JSX.Element;
    CustomAvatar?: (props: AvatarProps) => JSX.Element;
    CustomScrollArea?: (props: ChatScrollAreaProps) => JSX.Element;
    CustomChatMessagesContainer?: (props: ChatMessagesContainerProps) => JSX.Element;
    CustomIsTyping?: (props: ChatScrollAreaProps) => JSX.Element;
    CustomLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
    CustomMessageRender?: (props: MessageRenderProps<T>) => JSX.Element | string;
    CustomDateRow?: (props: DateRowProps) => JSX.Element;
    onLoadOldMessages?: () => Promise<void>;
    style?: React.CSSProperties;
    styles?: ChatFeedStyles;
    bubbleGroupStyles?: BubbleGroupStyles;
    chatBubbleStyles?: ChatBubbleStyles;
    chatScrollAreaStyles?: ChatScrollAreaStyles;
    chatMessagesContainerStyles?: ChatMessagesContainerStyles;
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
    chatMessagesContainerClasses?: ChatMessagesContainerClasses;
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
export declare class ChatFeed<T = string> extends React.PureComponent<ChatFeedProps<T>, ChatFeedState> implements ChatFeedApi {
    static defaultProps: ChatFeedProps;
    scrollApi: ChatScrollAreaApi;
    constructor(props: ChatFeedProps<T>);
    onMessageSend(): void;
    componentDidMount(): void;
    getSnapshotBeforeUpdate(prevProps: ChatFeedProps<T>, prevState: ChatFeedState): {
        wasScrolledToBottom: boolean;
        scrollHeight: number;
        clientHeight: number;
    };
    componentDidUpdate(prevProps: ChatFeedProps<T>, prevState: ChatFeedState, snapshot: ChatFeedSnapshot): void;
    /**
     * Determines what type of message/messages to render.
     */
    renderMessages<T>(messages: Message<T>[]): JSX.Element[];
    renderIsTyping(): JSX.Element;
    apiRef(e: ChatScrollAreaApi): void;
    /**
     * render : renders our chat feed
     */
    render(): JSX.Element;
    private onLoadOldMessages;
}
