import * as classNames from 'classnames';
import defaultClasses, { ChatBubbleClasses } from '../ChatBubble/classes';

const classes: ChatBubbleClasses = {
  chatBubbleWrapper: classNames(
    defaultClasses.chatBubbleWrapper,
    'react-bell-chat__chat-bubble--system'
  ),
  createdOn: 'react-bell-chat__chat-bubble--system__created-on',
};

export { classes as DefaultSystemChatBubbleClasses };

export default classes;
