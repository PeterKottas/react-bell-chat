/// <reference types="react" />
import * as React from 'react';
import Message from '../Message';
import { Author } from '../Author';
import { LastSeenAvatarProps } from './../LastSeenAvatar';
export interface ChatBubbleStyles {
    userBubble?: React.CSSProperties;
    recipientBubble?: React.CSSProperties;
    chatBubble?: React.CSSProperties;
    text?: React.CSSProperties;
}
export interface ChatBubbleProps {
    message: Message;
    author?: Author;
    bubbleStyles?: ChatBubbleStyles;
    bubblesCentered?: boolean;
    yourAuthorId: number;
    isFirstInGroup?: boolean;
    isLastInGroup?: boolean;
    isCenterInGroup?: boolean;
    lastSeenByAuthors?: Author[];
    showRecipientLastSeenMessage?: boolean;
    customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
}
export interface ChatBubbleState {
    mouseOverLastSeenContainer: boolean;
}
export default class ChatBubble extends React.Component<ChatBubbleProps, ChatBubbleState> {
    constructor(props: ChatBubbleProps);
    render(): JSX.Element;
}
