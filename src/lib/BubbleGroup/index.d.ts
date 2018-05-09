/// <reference types="react" />
import * as React from 'react';
import { ChatBubbleProps, ChatBubbleStyles } from '../ChatBubble';
import { Message } from '../';
import { Author } from '../Author';
import { AvatarProps } from '../Avatar';
import { LastSeenAvatarProps } from '../LastSeenAvatar';
export interface BubbleGroupProps {
    yourAuthorId?: number;
    messages: Message[];
    author: Author;
    authors?: Author[];
    showRecipientAvatar?: boolean;
    bubblesCentered?: boolean;
    bubbleStyles?: ChatBubbleStyles;
    customAvatar?: (props: AvatarProps) => JSX.Element;
    customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
    customChatBubble?: (props: ChatBubbleProps) => JSX.Element;
    customSystemChatBubble?: (props: ChatBubbleProps) => JSX.Element;
    showRecipientLastSeenMessage?: boolean;
}
export default class BubbleGroup extends React.Component<BubbleGroupProps> {
    static defaultProps: BubbleGroupProps;
    constructor(props: BubbleGroupProps);
    renderGroup(messages: Message[], author: Author): JSX.Element;
    render(): JSX.Element;
}
