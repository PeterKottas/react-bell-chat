import classNames from 'classnames';
import {
  ChatBubbleClasses,
  defaultChatBubbleClasses,
} from '../ChatBubble/classes';

const classes: ChatBubbleClasses = {
  chatBubbleWrapper: classNames(
    defaultChatBubbleClasses.chatBubbleWrapper,
    'react-bell-chat__chat-bubble--system'
  ),
  createdOn: 'react-bell-chat__chat-bubble--system__created-on',
};

export { classes as defaultSystemChatBubbleClasses };
