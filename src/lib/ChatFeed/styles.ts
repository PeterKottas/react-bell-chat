import * as React from 'react';

export interface ChatFeedStyles {
  chatPanel?: React.CSSProperties;
  showRecipientAvatarChatMessages?: React.CSSProperties;
  showRecipientLastSeenMessageChatMessages?: React.CSSProperties;
  showIsTypingChatMessages?: React.CSSProperties;
  chatMessages?: React.CSSProperties;
}

const styles: ChatFeedStyles = {
  chatPanel: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflow: 'hidden',
    position: 'relative',
  },
  showRecipientAvatarChatMessages: {
    paddingLeft: 50,
  },
  showIsTypingChatMessages: {
    paddingBottom: 24,
    position: 'relative',
  },
  showRecipientLastSeenMessageChatMessages: {
    paddingRight: 30,
  },
  chatMessages: {
    paddingBottom: 10,
    paddingTop: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
};

export default styles;
