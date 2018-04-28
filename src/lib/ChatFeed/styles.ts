import * as React from 'react';

export default {
  chatPanel: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
    position: 'relative'
  } as React.CSSProperties,
  showRecipientAvatarChatMessagesStyle: {
    paddingLeft: 50
  } as React.CSSProperties,
  showIsTypingChatMessagesStyle: {
    paddingBottom: 24,
    position: 'relative'
  } as React.CSSProperties,
  showRecipientLastSeenMessageChatMessagesStyle: {
    paddingRight: 30,
  } as React.CSSProperties,
  chatBubbleWrapper: {
    marginTop: 10,
    marginBottom: 10,
    overflow: 'auto',
    position: 'relative',
  } as React.CSSProperties,
  img: {
    borderRadius: 100,
    bottom: 0,
    left: 0,
    position: 'absolute',
    width: 36,
    zIndex: 100,
  } as React.CSSProperties,
  chatMessages: {
  } as React.CSSProperties
};
