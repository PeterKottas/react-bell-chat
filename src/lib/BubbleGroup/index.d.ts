/// <reference types="react" />
import * as React from 'react';
import { ChatBubbleProps, ChatBubbleStyles } from '../ChatBubble';
import { Message } from '../';
import { Author } from '../Author';
import { AvatarProps } from '../Avatar';
export interface BubbleGroupProps {
    selfAuthorId?: number;
    messages: Message[];
    author: Author;
    showAvatar?: boolean;
    bubblesCentered?: boolean;
    bubbleStyles?: ChatBubbleStyles;
    customAvatar?: (props: AvatarProps) => JSX.Element;
    customChatBubble?: (props: ChatBubbleProps) => JSX.Element;
}
export default class BubbleGroup extends React.Component<BubbleGroupProps> {
    static defaultProps: BubbleGroupProps;
    constructor(props: BubbleGroupProps);
    /**
     * Parses and collects messages of one type to be grouped together.
     * @return {messageNodes} - a JSX wrapped group of messages
     */
    renderGroup(messages: Message[], author: Author): JSX.Element;
    render(): JSX.Element;
}
