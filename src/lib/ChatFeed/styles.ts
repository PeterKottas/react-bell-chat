import * as React from 'react';

export interface ChatFeedStyles {
  chatPanel?: React.CSSProperties;
  showRecipientAvatarChatMessagesStyle?: React.CSSProperties;
  showRecipientLastSeenMessageChatMessagesStyle?: React.CSSProperties;
  showIsTypingChatMessagesStyle?: React.CSSProperties;
  chatBubbleWrapper?: React.CSSProperties;
  chatMessages?: React.CSSProperties;
}

const styles: ChatFeedStyles = {
  chatPanel: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflow: 'hidden',
    position: 'relative'
  },
  showRecipientAvatarChatMessagesStyle: {
    paddingLeft: 50
  },
  showIsTypingChatMessagesStyle: {
    paddingBottom: 24,
    position: 'relative'
  },
  showRecipientLastSeenMessageChatMessagesStyle: {
    paddingRight: 30,
  },
  chatBubbleWrapper: {
    marginTop: 10,
    marginBottom: 10,
    overflow: 'visible',
  },
  chatMessages: {
    paddingBottom: 10,
    paddingTop: 10,
  }
};

export default styles;
