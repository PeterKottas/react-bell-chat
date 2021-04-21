export interface ChatMessagesContainerClasses {
  root?: string;
  showRecipientAvatar?: string;
  showRecipientLastSeenMessage?: string;
  showIsTyping?: string;
}

const classes: ChatMessagesContainerClasses = {
  root: 'react-bell-chat__chat-messages',
  showRecipientAvatar: 'react-bell-chat__chat-messages--showRecipientAvatar',
  showRecipientLastSeenMessage:
    'react-bell-chat__chat-messages--showRecipientLastSeenMessage',
  showIsTyping: 'react-bell-chat__chat-messages--showIsTyping',
};

export { classes as DefaultChatMessagesContainerClasses };

export default classes;
