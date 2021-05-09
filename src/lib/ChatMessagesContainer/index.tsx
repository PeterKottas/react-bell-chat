import * as React from 'react';
import classNames from 'classnames';
import { ChatMessagesContainerClasses, defaultChatMessagesContainerClasses } from './classes';
import { ChatMessagesContainerStyles, defaultChatMessagesContainerStyles } from './styles';
export * from './classes';
export * from './styles';

export interface ChatMessagesContainerProps
  extends React.PropsWithChildren<{
    showRecipientLastSeenMessage: boolean;
    showRecipientAvatar: boolean;
    showIsTyping: boolean;
    classes?: ChatMessagesContainerClasses;
    styles?: ChatMessagesContainerStyles;
  }> {}

export const ChatMessagesContainer: React.FC<ChatMessagesContainerProps> = (
  props
) => {
  const {
    children,
    classes,
    styles,
    showIsTyping,
    showRecipientAvatar,
    showRecipientLastSeenMessage,
  } = props;
  const style = React.useMemo(
    () => ({
      ...defaultChatMessagesContainerStyles?.root,
      ...styles?.root,
      ...(showRecipientAvatar && defaultChatMessagesContainerStyles?.showRecipientAvatar),
      ...(showRecipientAvatar && styles?.showRecipientAvatar),
      ...(showIsTyping && defaultChatMessagesContainerStyles?.showIsTyping),
      ...(showIsTyping && styles?.showIsTyping),
      ...(showRecipientLastSeenMessage &&
        defaultChatMessagesContainerStyles?.showRecipientLastSeenMessage),
      ...(showRecipientLastSeenMessage && styles?.showRecipientLastSeenMessage),
    }),
    [
      showIsTyping,
      showRecipientAvatar,
      showRecipientLastSeenMessage,
      styles?.root,
      styles?.showRecipientAvatar,
      styles?.showIsTyping,
      styles?.showRecipientLastSeenMessage,
    ]
  );
  const className = classNames(defaultChatMessagesContainerClasses.root, classes?.root, {
    [defaultChatMessagesContainerClasses?.showRecipientAvatar]: showRecipientAvatar,
    [classes?.showRecipientAvatar]: showRecipientAvatar,
    [defaultChatMessagesContainerClasses?.showIsTyping]: showIsTyping,
    [classes?.showIsTyping]: showIsTyping,
    [defaultChatMessagesContainerClasses?.showRecipientLastSeenMessage]: showRecipientLastSeenMessage,
    [classes?.showRecipientLastSeenMessage]: showRecipientLastSeenMessage,
  });

  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};
