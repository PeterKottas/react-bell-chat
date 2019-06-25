/// <reference types="react" />
import * as React from 'react';
export interface ChatFeedStyles {
    chatPanel?: React.CSSProperties;
    showRecipientAvatarChatMessagesStyle?: React.CSSProperties;
    showRecipientLastSeenMessageChatMessagesStyle?: React.CSSProperties;
    showIsTypingChatMessagesStyle?: React.CSSProperties;
    chatBubbleWrapper?: React.CSSProperties;
    chatMessages?: React.CSSProperties;
}
declare const styles: ChatFeedStyles;
export default styles;
