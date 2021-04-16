import * as React from "react";
import { ChatBubbleProps, ChatBubbleStyles, MessageRenderProps } from "../ChatBubble";
import { BubbleGroupStyles } from "./styles";
import { Message } from "../";
import { Author } from "../Author";
import { AvatarProps, AvatarClasses } from "../Avatar";
import { LastSeenAvatarProps, LastSeenAvatarStyles, LastSeenAvatarClasses } from "../LastSeenAvatar";
import { AvatarStyles } from "./../Avatar/index";
import { ChatBubbleClasses } from "./../ChatBubble/index";
export interface BubbleGroupClasses {
    chatBubbleWrapper?: string;
}
export interface BubbleGroupProps<T> {
    yourAuthorId?: number;
    messages: Message<T>[];
    author: Author;
    authors?: Author[];
    showRecipientAvatar?: boolean;
    bubblesCentered?: boolean;
    className?: string;
    classes?: BubbleGroupClasses;
    chatBubbleClasses?: ChatBubbleClasses;
    avatarClasses?: AvatarClasses;
    lastSeenAvatarClasses?: LastSeenAvatarClasses;
    style?: React.CSSProperties;
    styles?: BubbleGroupStyles;
    chatBubbleStyles?: ChatBubbleStyles;
    avatarStyles?: AvatarStyles;
    lastSeenAvatarStyles?: LastSeenAvatarStyles;
    customAvatar?: (props: AvatarProps) => JSX.Element;
    customMessageRender?: (props: MessageRenderProps<T>) => JSX.Element | string;
    customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
    customChatBubble?: (props: ChatBubbleProps<T>) => JSX.Element;
    customSystemChatBubble?: (props: ChatBubbleProps<T>) => JSX.Element;
    showRecipientLastSeenMessage?: boolean;
}
export default class BubbleGroup<T> extends React.PureComponent<BubbleGroupProps<T>> {
    static defaultProps: BubbleGroupProps<string>;
    constructor(props: BubbleGroupProps<T>);
    renderGroup(messages: Message<T>[], author: Author): JSX.Element;
    render(): JSX.Element;
}
