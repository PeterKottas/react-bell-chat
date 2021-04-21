import * as classNames from 'classnames';
import * as React from 'react';
import defaultClasses, { ChatMessagesContainerClasses } from './classes';
import defaultStyles, { ChatMessagesContainerStyles } from './styles';
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

const ChatMessagesContainer: React.FC<ChatMessagesContainerProps> = (props) => {
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
      ...defaultStyles?.root,
      ...styles?.root,
      ...(showRecipientAvatar && defaultStyles?.showRecipientAvatar),
      ...(showRecipientAvatar && styles?.showRecipientAvatar),
      ...(showIsTyping && defaultStyles?.showIsTyping),
      ...(showIsTyping && styles?.showIsTyping),
      ...(showRecipientLastSeenMessage &&
        defaultStyles?.showRecipientLastSeenMessage),
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
  const className = classNames(defaultClasses.root, classes?.root, {
    [defaultClasses?.showRecipientAvatar]: showRecipientAvatar,
    [classes?.showRecipientAvatar]: showRecipientAvatar,
    [defaultClasses?.showIsTyping]: showIsTyping,
    [classes?.showIsTyping]: showIsTyping,
    [defaultClasses?.showRecipientLastSeenMessage]: showRecipientLastSeenMessage,
    [classes?.showRecipientLastSeenMessage]: showRecipientLastSeenMessage,
  });

  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

export default ChatMessagesContainer;
