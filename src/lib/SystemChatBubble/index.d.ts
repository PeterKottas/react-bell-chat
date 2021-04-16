import * as React from 'react';
import { ChatBubbleProps } from '../ChatBubble';
export interface SystemChatBubbleProps<T> extends ChatBubbleProps<T> {}
declare function SystemChatBubble<T>(
  props: SystemChatBubbleProps<T>
): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof SystemChatBubble>;
export default _default;
