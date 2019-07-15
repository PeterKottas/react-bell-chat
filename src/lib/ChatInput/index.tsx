import * as React from 'react';
import classnames from 'classnames';

export interface ChatInputStyles {
  chatInput?: React.CSSProperties;
  input?: React.CSSProperties;
}

export interface ChatInputClasses {
  chatInput?: string;
  input?: string;
}

const chatInputStyles: ChatInputStyles = {
  chatInput: {
    flex: 1
  },
  input: {
    border: 'none',
    borderTopWidth: '1',
    borderTopStyle: 'solid',
    borderTopColor: '#ddd',
    fontSize: '16',
    outline: 'none',
    padding: '30',
    width: '100%'
  }
};

export interface ChatInputProps {
  styles?: ChatInputStyles;
  inputPlaceholder?: string;
  className?: string;
  classes?: ChatInputClasses;
  style?: React.CSSProperties;
}

const ChatInput: React.FC<ChatInputProps> = props => {
  let { styles, classes, inputPlaceholder } = props;
  if (!styles) {
    styles = {};
  }
  if (!classes) {
    classes = {};
  }
  return (
    <div
      className={classnames(
        'react-bell-chat__chat-input',
        props.className,
        classes.chatInput
      )}
      style={{ ...chatInputStyles.chatInput, ...styles.chatInput }}
    >
      <input
        type="text"
        className={classnames(
          'react-bell-chat__chat-input__input',
          classes.input
        )}
        style={{ ...chatInputStyles.input, ...styles.input }}
        placeholder={inputPlaceholder}
      />
    </div>
  );
};

export default React.memo(ChatInput);
