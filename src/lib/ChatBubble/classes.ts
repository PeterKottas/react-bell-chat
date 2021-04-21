export interface ChatBubbleClasses {
  chatBubbleWrapper?: string;
  chatBubble?: string;
  systemChatBubbleContainer?: string;
  systemChatBubbleText?: string;
  userChatBubbleOrientationNormal?: string;
  recipientChatBubbleOrientationNormal?: string;
  text?: string;
  userText?: string;
  recipientText?: string;
  userChatBubble?: string;
  recipientChatBubble?: string;
  firstChatBubbleInGroup?: string;
  userFirstChatBubbleInGroup?: string;
  recipientFirstChatBubbleInGroup?: string;
  lastChatBubbleInGroup?: string;
  userLastChatBubbleInGroup?: string;
  recipientLastChatBubbleInGroup?: string;
  centerChatBubbleInGroup?: string;
  userCenterChatBubbleInGroup?: string;
  recipientCenterChatBubbleInGroup?: string;
  createdOn?: string;
  recipientCreatedOn?: string;
  userCreatedOn?: string;
  isSend?: string;

  lastSeenByContainer?: string;
}

const classes: ChatBubbleClasses = {
  chatBubbleWrapper: 'react-bell-chat__chat-bubble__wrapper',

  isSend: 'react-bell-chat__chat-bubble__is-send',

  chatBubble: 'react-bell-chat__chat-bubble',
  userChatBubble: 'react-bell-chat__chat-bubble--user',
  recipientChatBubble: 'react-bell-chat__chat-bubble--recipient',

  text: 'react-bell-chat__chat-bubble__text',
  userText: 'react-bell-chat__chat-bubble__text--user',
  recipientText: 'react-bell-chat__chat-bubble__text--recipient',

  createdOn: 'react-bell-chat__chat-bubble__created-on',
  userCreatedOn: 'react-bell-chat__chat-bubble__created-on--user',
  recipientCreatedOn: 'react-bell-chat__chat-bubble__created-on--recipient',

  lastSeenByContainer: 'react-bell-chat__chat-bubble__last-seen-by__container',
};

export { classes as DefaultChatBubbleClasses };

export default classes;
