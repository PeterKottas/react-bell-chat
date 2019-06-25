/// <reference types="react" />
import * as React from 'react';
import { ChatBubbleProps, ChatBubbleStyles } from '../ChatBubble';
import { BubbleGroupStyles } from './styles';
import { Message } from '../';
import { Author } from '../Author';
import { AvatarProps } from '../Avatar';
import { LastSeenAvatarProps, LastSeenAvatarStyles } from '../LastSeenAvatar';
import { AvatarStyles } from './../Avatar/index';
export interface BubbleGroupProps {
    yourAuthorId?: number;
    messages: Message[];
    author: Author;
    authors?: Author[];
    showRecipientAvatar?: boolean;
    bubblesCentered?: boolean;
    styles?: BubbleGroupStyles;
    bubbleStyles?: ChatBubbleStyles;
    avatarStyles?: AvatarStyles;
    lastSeenAvatarStyles?: LastSeenAvatarStyles;
    customAvatar?: (props: AvatarProps) => JSX.Element;
    customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
    customChatBubble?: (props: ChatBubbleProps) => JSX.Element;
    customSystemChatBubble?: (props: ChatBubbleProps) => JSX.Element;
    showRecipientLastSeenMessage?: boolean;
}
export default class BubbleGroup extends React.PureComponent<BubbleGroupProps> {
    static defaultProps: BubbleGroupProps;
    constructor(props: BubbleGroupProps);
    renderGroup(messages: Message[], author: Author): JSX.Element;
    render(): JSX.Element;
}
