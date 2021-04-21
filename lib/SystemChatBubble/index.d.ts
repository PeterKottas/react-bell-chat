import * as React from 'react';
import { ChatBubbleProps } from '../ChatBubble';
export * from './classes';
export * from './styles';
export interface SystemChatBubbleProps<T> extends ChatBubbleProps<T> {
}
export declare function SystemChatBubble<T = string>(props: SystemChatBubbleProps<T>): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof SystemChatBubble>;
export default _default;
