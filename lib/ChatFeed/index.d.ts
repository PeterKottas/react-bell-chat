import * as React from 'react';
import { BubbleGroupClasses, BubbleGroupProps, BubbleGroupStyles } from '../BubbleGroup';
import { ChatBubbleProps, MessageRenderProps } from '../ChatBubble';
import { Message } from '../Message';
import { Author } from '../Author';
import { ChatBubbleStyles, ChatBubbleClasses } from '../ChatBubble';
import { AvatarProps, AvatarStyles, AvatarClasses } from '../Avatar';
import { IsTypingStyles, IsTypingClasses, IsTypingProps } from '../IsTyping';
import { ChatScrollAreaProps, ChatScrollAreaApi, ChatScrollAreaStyles, ChatScrollAreaClasses } from '../ChatScrollArea';
import { ChatMessagesContainerProps, ChatMessagesContainerClasses, ChatMessagesContainerStyles } from '../ChatMessagesContainer';
import { LastSeenAvatarProps, LastSeenAvatarStyles, LastSeenAvatarClasses } from '../LastSeenAvatar';
import { DateRowProps, DateRowStyles, DateRowClasses } from '../DateRow';
import { LoadingMessagesProps, LoadingMessagesStyle, LoadingMessagesClasses } from '../LoadingMessages';
import { ChatFeedStyles } from './styles';
import { ChatFeedClasses } from './classes';
import { ComponentType } from '../utils/componentType';
export * from './classes';
export * from './styles';
export interface ChatFeedProps<TMessageData = string, TMessage extends Message<TMessageData> = Message<TMessageData>, TAuthor extends Author<TMessageData> = Author<TMessageData>> {
    className?: string;
    messages: TMessage[];
    authors: TAuthor[];
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
    CustomLoadingMessages?: ComponentType<LoadingMessagesProps>;
    CustomChatBubble?: ComponentType<ChatBubbleProps<TMessageData, TMessage, TAuthor>>;
    CustomBubbleGroup?: ComponentType<BubbleGroupProps<TMessageData, TMessage, TAuthor>>;
    CustomSystemChatBubble?: ComponentType<ChatBubbleProps<TMessageData, TMessage, TAuthor>>;
    CustomAvatar?: ComponentType<AvatarProps<TMessageData, TAuthor>>;
    CustomScrollArea?: ComponentType<ChatScrollAreaProps>;
    CustomChatMessagesContainer?: ComponentType<ChatMessagesContainerProps>;
    CustomIsTyping?: ComponentType<IsTypingProps<TMessageData, TAuthor>>;
    CustomLastSeenAvatar?: ComponentType<LastSeenAvatarProps<TMessageData, TAuthor>>;
    CustomMessageRender?: ComponentType<MessageRenderProps<TMessageData, TMessage>>;
    CustomDateRow?: ComponentType<DateRowProps>;
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
export declare class ChatFeed<TMessageData = string, TMessage extends Message<TMessageData> = Message<TMessageData>, TAuthor extends Author<TMessageData> = Author<TMessageData>> extends React.PureComponent<ChatFeedProps<TMessageData, TMessage, TAuthor>, ChatFeedState> implements ChatFeedApi {
    static defaultProps: ChatFeedProps;
    scrollApi: ChatScrollAreaApi;
    constructor(props: ChatFeedProps<TMessageData, TMessage, TAuthor>);
    onMessageSend(): void;
    componentDidMount(): void;
    getSnapshotBeforeUpdate(prevProps: ChatFeedProps<TMessageData, TMessage, TAuthor>, prevState: ChatFeedState): {
        wasScrolledToBottom: boolean;
        scrollHeight: number;
        clientHeight: number;
    };
    componentDidUpdate(prevProps: ChatFeedProps<TMessageData, TMessage, TAuthor>, prevState: ChatFeedState, snapshot: ChatFeedSnapshot): void;
    /**
     * Determines what type of message/messages to render.
     */
    renderMessages<T>(messages: Message<T>[]): React.ReactNode[];
    apiRef(e: ChatScrollAreaApi): void;
    render(): React.JSX.Element;
    private onLoadOldMessages;
}
