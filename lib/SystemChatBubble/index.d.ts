import * as React from 'react';
import { ChatBubbleProps } from '../ChatBubble';
import { Author } from '../Author';
import { Message } from '../Message';
export * from './classes';
export * from './styles';
export interface SystemChatBubbleProps<TMessageData = string, TMessage extends Message<TMessageData> = Message<TMessageData>, TAuthor extends Author<TMessageData> = Author<TMessageData>> extends ChatBubbleProps<TMessageData, TMessage, TAuthor> {
}
declare function SystemChatBubble<TMessageData = string, TMessage extends Message<TMessageData> = Message<TMessageData>, TAuthor extends Author<TMessageData> = Author<TMessageData>>(props: SystemChatBubbleProps<TMessageData, TMessage, TAuthor>): React.JSX.Element;
declare const Memoized: React.MemoExoticComponent<typeof SystemChatBubble>;
export { Memoized as SystemChatBubble };
