import * as React from 'react';
import Message from '../Message';
import { Author } from '../Author';
import { LastSeenAvatarProps, LastSeenAvatarStyles, LastSeenAvatarClasses } from './../LastSeenAvatar';
import { ChatBubbleStyles } from './styles';
export { ChatBubbleStyles };
export interface MessageRenderProps<T = string> {
    message: Message<T>;
    style?: React.CSSProperties;
    className?: string;
}
export interface ChatBubbleClasses {
    chatBubbleWrapper?: string;
    chatBubble?: string;
    systemChatBubbleContainer?: string;
    systemChatBubbleText?: string;
    userChatBubbleOrientationNormal?: string;
    recipientChatBubbleOrientationNormal?: string;
    text?: string;
    userText?: string;
    recipientText?: string;
    userChatBubble?: string;
    recipientChatBubble?: string;
    firstChatBubbleInGroup?: string;
    userFirstChatBubbleInGroup?: string;
    recipientFirstChatBubbleInGroup?: string;
    lastChatBubbleInGroup?: string;
    userLastChatBubbleInGroup?: string;
    recipientLastChatBubbleInGroup?: string;
    centerChatBubbleInGroup?: string;
    userCenterChatBubbleInGroup?: string;
    recipientCenterChatBubbleInGroup?: string;
    createdOn?: string;
    recipientCreatedOn?: string;
    userCreatedOn?: string;
    isSend?: string;
    lastSeenByContainer?: string;
}
export interface ChatBubbleProps<T = string> {
    message: Message<T>;
    author?: Author;
    style?: React.CSSProperties;
    styles?: ChatBubbleStyles;
    lastSeenAvatarStyles?: LastSeenAvatarStyles;
    className?: string;
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
export default class ChatBubble<T = string> extends React.PureComponent<ChatBubbleProps<T>, ChatBubbleState> {
    constructor(props: ChatBubbleProps<T>);
    render(): JSX.Element;
}
