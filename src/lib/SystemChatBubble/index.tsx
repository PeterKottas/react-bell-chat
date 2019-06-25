import * as React from 'react';
import { ChatBubbleProps } from '../ChatBubble';
import { ChatBubbleStyles } from '../ChatBubble/styles';

const systemChatBubbleStyles: ChatBubbleStyles = {
  systemChatBubbleContainer: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.55)'
  } as React.CSSProperties,
};

export interface SystemChatBubbleProps extends ChatBubbleProps {
}

const SystemChatBubble = (props: SystemChatBubbleProps) => {
  let {
    styles
  } = props;
  if (!styles) {
    styles = {};
  }
  const {
    systemChatBubbleContainer,
    systemChatBubbleText
  } = styles;
  const time = props.message.createdOn && props.message.createdOn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  return props.message && (
    <div
      className="react-bell-chat__chat-bubble react-bell-chat__chat-bubble--system"
      style={{
        ...systemChatBubbleStyles.systemChatBubbleContainer,
        ...systemChatBubbleContainer
      }}
    >
      {time && (
        <span
          className="react-bell-chat__chat-bubble--system__created-on"
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
  );
};

export default SystemChatBubble;
