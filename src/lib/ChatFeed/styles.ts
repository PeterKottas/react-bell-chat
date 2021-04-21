import * as React from 'react';

export interface ChatFeedStyles {
  chatPanel?: React.CSSProperties;
  showRecipientAvatarChatMessages?: React.CSSProperties;
  showRecipientLastSeenMessageChatMessages?: React.CSSProperties;
  showIsTypingChatMessages?: React.CSSProperties;
}

const styles: ChatFeedStyles = {
  chatPanel: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflow: 'hidden',
    position: 'relative',
  },
};

export { styles as DefaultChatFeedStyles };

export default styles;
