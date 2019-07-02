import * as React from 'react';
import { ChatBubbleProps } from '../ChatBubble';
import { ChatBubbleStyles } from '../ChatBubble/styles';
import classnames from 'classnames';

const systemChatBubbleStyles: ChatBubbleStyles = {
  systemChatBubbleContainer: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.55)'
  } as React.CSSProperties
};

export interface SystemChatBubbleProps extends ChatBubbleProps {}

const SystemChatBubble = (props: SystemChatBubbleProps) => {
  let { styles, classes } = props;
  if (!styles) {
    styles = {};
  }
  if (!classes) {
    classes = {};
  }
  const { systemChatBubbleContainer, systemChatBubbleText } = styles;
  const time =
    props.message.createdOn &&
    props.message.createdOn.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  return (
    props.message && (
      <div
        className={classnames(
          'react-bell-chat__chat-bubble react-bell-chat__chat-bubble--system',
          props.className,
          classes.chatBubble
        )}
        style={{
          ...systemChatBubbleStyles.systemChatBubbleContainer,
          ...systemChatBubbleContainer,
          ...props.style
        }}
      >
        {time && (
          <span
            className={classnames(
              'react-bell-chat__chat-bubble--system__created-on',
              classes.createdOn
            )}
            title={props.message.createdOn.toLocaleString()}
            style={{
              ...systemChatBubbleStyles.systemChatBubbleText,
              ...systemChatBubbleText
            }}
          >
            {time}:{' '}
          </span>
        )}
        {props.message.message}
      </div>
    )
  );
};

export default SystemChatBubble;
