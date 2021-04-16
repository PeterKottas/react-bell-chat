import * as React from 'react';
export interface ChatFeedStyles {
  chatPanel?: React.CSSProperties;
  showRecipientAvatarChatMessages?: React.CSSProperties;
  showRecipientLastSeenMessageChatMessages?: React.CSSProperties;
  showIsTypingChatMessages?: React.CSSProperties;
  chatMessages?: React.CSSProperties;
}
declare const styles: ChatFeedStyles;
export default styles;
