import * as React from 'react';
import { ChatMessagesContainerClasses } from './classes';
import { ChatMessagesContainerStyles } from './styles';
export * from './classes';
export * from './styles';
export interface ChatMessagesContainerProps extends React.PropsWithChildren<{
    showRecipientLastSeenMessage: boolean;
    showRecipientAvatar: boolean;
    showIsTyping: boolean;
    classes?: ChatMessagesContainerClasses;
    styles?: ChatMessagesContainerStyles;
}> {
}
export declare const ChatMessagesContainer: React.FC<ChatMessagesContainerProps>;
