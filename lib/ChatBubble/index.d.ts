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
export interface MessageRenderProps<T = string> {
    message: Message<T>;
    style?: React.CSSProperties;
    className?: string;
}
export interface ChatBubbleProps<T = string> {
    message: Message<T>;
    author?: Author;
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
    lastSeenByAuthors?: Author[];
    showRecipientLastSeenMessage?: boolean;
    CustomLastSeenAvatar?: ComponentType<LastSeenAvatarProps>;
    CustomMessageRender?: ComponentType<MessageRenderProps<T>>;
}
export declare function ChatBubble<T = string>(props: ChatBubbleProps<T>): JSX.Element;
