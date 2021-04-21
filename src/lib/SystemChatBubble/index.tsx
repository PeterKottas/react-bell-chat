import * as React from 'react';
import { ChatBubbleProps } from '../ChatBubble';
import classnames from 'classnames';
import defaultClasses from './classes';
import defaultStyles from './styles';
export * from './classes';
export * from './styles';

export interface SystemChatBubbleProps<T> extends ChatBubbleProps<T> {}

export function SystemChatBubble<T = string>(props: SystemChatBubbleProps<T>) {
  const { styles, classes, message } = props;

  const time =
    message.createdOn &&
    message.createdOn.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

  const style = React.useMemo(
    () => ({
      ...defaultStyles.systemChatBubbleContainer,
      ...styles?.systemChatBubbleContainer,
    }),
    [styles?.systemChatBubbleContainer]
  );
  const textStyle = React.useMemo(
    () => ({
      ...defaultStyles.systemChatBubbleText,
      ...styles?.systemChatBubbleText,
    }),
    [styles?.systemChatBubbleText]
  );
  return (
    message && (
      <div
        className={classnames(
          defaultClasses.chatBubbleWrapper,
          classes?.chatBubbleWrapper
        )}
        style={style}
      >
        {time && (
          <span
            className={classnames(defaultClasses.createdOn, classes?.createdOn)}
            title={props.message.createdOn.toLocaleString()}
            style={textStyle}
          >
            {time}:{' '}
          </span>
        )}
        {props.message.message}
      </div>
    )
  );
}

export default React.memo(SystemChatBubble);
