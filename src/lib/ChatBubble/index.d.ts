/// <reference types="react" />
import * as React from 'react';
import Message from '../Message';
import { Author } from '../Author';
import { LastSeenAvatarProps, LastSeenAvatarStyles } from './../LastSeenAvatar';
import { ChatBubbleStyles } from './styles';
export { ChatBubbleStyles };
export interface ChatBubbleProps {
    message: Message;
    author?: Author;
    styles?: ChatBubbleStyles;
    lastSeenAvatarStyles?: LastSeenAvatarStyles;
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
