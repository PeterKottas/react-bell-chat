export interface ChatMessagesContainerStyles {
  root?: React.CSSProperties;
  showRecipientAvatar?: React.CSSProperties;
  showRecipientLastSeenMessage?: React.CSSProperties;
  showIsTyping?: React.CSSProperties;
}

const styles: ChatMessagesContainerStyles = {
  root: {
    paddingBottom: 10,
    paddingTop: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  showRecipientAvatar: {
    paddingLeft: 50,
  },
  showIsTyping: {
    paddingBottom: 24,
    position: 'relative',
  },
  showRecipientLastSeenMessage: {
    paddingRight: 30,
  },
};

export { styles as DefaultChatMessagesContainerStyles };

export default styles;
