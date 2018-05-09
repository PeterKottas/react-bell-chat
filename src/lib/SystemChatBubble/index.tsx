import * as React from 'react';
import { ChatBubbleProps, defaultBubbleStyles } from '../ChatBubble';

const styles = {
  container: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.55)'
  } as React.CSSProperties,
};

export interface SystemChatBubbleProps extends ChatBubbleProps {
}

const SystemChatBubble = (props: SystemChatBubbleProps) => {
  let { bubbleStyles } = props;
  bubbleStyles = bubbleStyles || defaultBubbleStyles;
  const time = props.message.createdOn && props.message.createdOn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  return props.message && (
    <div
      className="react-bell-chat__chat-bubble react-bell-chat__chat-bubble--system"
      style={{
        ...styles.container,
        ...bubbleStyles.systemChatBubbleContainerStyle
      }}
    >
      {time && (
        <span
          className="react-bell-chat__chat-bubble--system__created-on"
          title={props.message.createdOn.toLocaleString()}
        >
          {time}:{' '}
        </span>
      )}
      {props.message.message}
    </div>
  );
};

export default SystemChatBubble;
