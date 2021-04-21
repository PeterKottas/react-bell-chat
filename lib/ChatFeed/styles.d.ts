import * as React from 'react';
export interface ChatFeedStyles {
    chatPanel?: React.CSSProperties;
    showRecipientAvatarChatMessages?: React.CSSProperties;
    showRecipientLastSeenMessageChatMessages?: React.CSSProperties;
    showIsTypingChatMessages?: React.CSSProperties;
}
declare const styles: ChatFeedStyles;
export { styles as defaultChatFeedStyles };
