import * as React from 'react';
import Message from '../Message';
import { Author } from '../Author';
import { LastSeenAvatarProps, LastSeenAvatarStyles, LastSeenAvatarClasses } from './../LastSeenAvatar';
import { ChatBubbleStyles } from './styles';
import { ChatBubbleClasses } from './classes';
export * from './styles';
export * from './classes';
export interface MessageRenderProps<T = string> {
    message: Message<T>;
    style?: React.CSSProperties;
    className?: string;
}
export interface ChatBubbleProps<T = string> {
    message: Message<T>;
    author?: Author;
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
    customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
    customMessageRender?: (props: MessageRenderProps<T>) => JSX.Element | string;
}
export interface ChatBubbleState {
    mouseOverLastSeenContainer: boolean;
}
export declare function ChatBubble<T = string>(props: ChatBubbleProps<T>): JSX.Element;
export default ChatBubble;
