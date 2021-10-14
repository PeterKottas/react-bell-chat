import * as React from 'react';
import { Message } from '../Message';
import { Author } from '../Author';
import { LastSeenAvatarProps, LastSeenAvatarStyles, LastSeenAvatarClasses } from './../LastSeenAvatar';
import { ChatBubbleStyles } from './styles';
import { ChatBubbleClasses } from './classes';
import { ComponentType } from '../utils/componentType';
import { ChatBubbleConfig } from './config';
export * from './styles';
export * from './classes';
export * from './config';
export interface MessageRenderProps<TMessageData = string, TMessage extends Message<TMessageData> = Message<TMessageData>> {
    message: TMessage;
    style?: React.CSSProperties;
    className?: string;
}
export interface ChatBubbleProps<TMessageData = string, TMessage extends Message<TMessageData> = Message<TMessageData>, TAuthor extends Author<TMessageData> = Author<TMessageData>> {
    message: TMessage;
    author?: TAuthor;
    config?: ChatBubbleConfig;
    styles?: ChatBubbleStyles;
    lastSeenAvatarStyles?: LastSeenAvatarStyles;
    classes?: ChatBubbleClasses;
    lastSeenAvatarClasses?: LastSeenAvatarClasses;
    bubblesCentered?: boolean;
    yourAuthorId: number;
    isFirstInGroup?: boolean;
    isLastInGroup?: boolean;
    isCenterInGroup?: boolean;
    lastSeenByAuthors?: TAuthor[];
    showRecipientLastSeenMessage?: boolean;
    CustomLastSeenAvatar?: ComponentType<LastSeenAvatarProps<TMessageData>>;
    CustomMessageRender?: ComponentType<MessageRenderProps<TMessageData>>;
}
export declare function ChatBubble<TMessageData = string, TMessage extends Message<TMessageData> = Message<TMessageData>, TAuthor extends Author<TMessageData> = Author<TMessageData>>(props: ChatBubbleProps<TMessageData, TMessage, TAuthor>): JSX.Element;
