import * as React from 'react';
import { ChatBubbleProps } from '../ChatBubble';
export * from './classes';
export * from './styles';
export interface SystemChatBubbleProps<T> extends ChatBubbleProps<T> {
}
declare function SystemChatBubble<T = string>(props: SystemChatBubbleProps<T>): JSX.Element;
declare const Memoized: React.MemoExoticComponent<typeof SystemChatBubble>;
export { Memoized as SystemChatBubble };
