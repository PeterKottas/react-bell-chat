import * as React from 'react';
import { ChatBubbleProps, ChatBubbleStyles, MessageRenderProps } from '../ChatBubble';
import { Message } from '../';
import { Author } from '../Author';
import { AvatarProps, AvatarClasses } from '../Avatar';
import { LastSeenAvatarProps, LastSeenAvatarStyles, LastSeenAvatarClasses } from '../LastSeenAvatar';
import { AvatarStyles } from './../Avatar';
import { ChatBubbleClasses } from './../ChatBubble';
import { BubbleGroupClasses } from './classes';
import { BubbleGroupStyles } from './styles';
import { ComponentType } from '../utils/componentType';
export * from './styles';
export * from './classes';
export interface BubbleGroupProps<TMessageData = string, TMessage extends Message<TMessageData> = Message<TMessageData>, TAuthor extends Author<TMessageData> = Author<TMessageData>> {
    yourAuthorId?: number;
    messages: TMessage[];
    author: TAuthor;
    authors?: TAuthor[];
    showRecipientAvatar?: boolean;
    bubblesCentered?: boolean;
    classes?: BubbleGroupClasses;
    chatBubbleClasses?: ChatBubbleClasses;
    avatarClasses?: AvatarClasses;
    lastSeenAvatarClasses?: LastSeenAvatarClasses;
    styles?: BubbleGroupStyles;
    chatBubbleStyles?: ChatBubbleStyles;
    avatarStyles?: AvatarStyles;
    lastSeenAvatarStyles?: LastSeenAvatarStyles;
    CustomAvatar?: ComponentType<AvatarProps<TMessageData, TAuthor>>;
    CustomMessageRender?: ComponentType<MessageRenderProps<TMessageData, TMessage>>;
    CustomLastSeenAvatar?: ComponentType<LastSeenAvatarProps<TMessageData, TAuthor>>;
    CustomChatBubble?: ComponentType<ChatBubbleProps<TMessageData, TMessage, TAuthor>>;
    CustomSystemChatBubble?: ComponentType<ChatBubbleProps<TMessageData, TMessage, TAuthor>>;
    showRecipientLastSeenMessage?: boolean;
}
declare function BubbleGroup<TMessageData = string, TMessage extends Message<TMessageData> = Message<TMessageData>, TAuthor extends Author<TMessageData> = Author<TMessageData>>(props: BubbleGroupProps<TMessageData, TMessage, TAuthor>): React.JSX.Element;
declare const Memoized: typeof BubbleGroup;
export { Memoized as BubbleGroup };
