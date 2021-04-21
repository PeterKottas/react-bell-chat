import * as React from 'react';
import { ChatBubbleProps, defaultChatBubbleConfig } from '../ChatBubble';
import classnames from 'classnames';
import { defaultSystemChatBubbleClasses } from './classes';
import { defaultSystemChatBubbleStyles } from './styles';
export * from './classes';
export * from './styles';

export interface SystemChatBubbleProps<T> extends ChatBubbleProps<T> {}

function SystemChatBubble<T = string>(props: SystemChatBubbleProps<T>) {
  const { styles, classes, message, config } = props;

  const finalConfig = {
    ...defaultChatBubbleConfig,
    ...config,
  };

  const time = finalConfig.formatTime(message.createdOn);

  const style = React.useMemo(
    () => ({
      ...defaultSystemChatBubbleStyles.systemChatBubbleContainer,
      ...styles?.systemChatBubbleContainer,
    }),
    [styles?.systemChatBubbleContainer]
  );
  const textStyle = React.useMemo(
    () => ({
      ...defaultSystemChatBubbleStyles.systemChatBubbleText,
      ...styles?.systemChatBubbleText,
    }),
    [styles?.systemChatBubbleText]
  );
  return (
    message && (
      <div
        className={classnames(
          defaultSystemChatBubbleClasses.chatBubbleWrapper,
          classes?.chatBubbleWrapper
        )}
        style={style}
      >
        {time && (
          <span
            className={classnames(
              defaultSystemChatBubbleClasses.createdOn,
              classes?.createdOn
            )}
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

const Memoized = React.memo(SystemChatBubble);

export { Memoized as SystemChatBubble };
