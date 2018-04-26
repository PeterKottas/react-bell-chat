import * as React from 'react';
import styles from './styles';
import Message from '../Message';

const defaultBubbleStyles: ChatBubbleStyles = {
  userBubble: {},
  chatBubble: {},
  text: {},
};

export interface ChatBubbleStyles {
  userBubble?: React.CSSProperties;
  chatBubble?: React.CSSProperties;
  text?: React.CSSProperties;
}

export interface ChatBubbleProps {
  message: Message;
  bubbleStyles?: ChatBubbleStyles;
  bubblesCentered?: boolean;
  selfAuthorId: number;
}

export default class ChatBubble extends React.Component<ChatBubbleProps> {

  constructor(props: ChatBubbleProps) {
    super(props);
  }

  public render() {
    const { bubblesCentered } = this.props;
    let { bubbleStyles } = this.props;
    bubbleStyles = bubbleStyles || defaultBubbleStyles;
    const { userBubble, chatBubble, text } = bubbleStyles;

    // message.id 0 is reserved for blue
    const chatBubbleStyles: React.CSSProperties =
      this.props.message.authorId === this.props.selfAuthorId
        ? {
            ...styles.chatBubble,
            ...bubblesCentered ? {} : styles.chatBubbleOrientationNormal,
            ...chatBubble,
            ...userBubble,
          }
        : {
            ...styles.chatBubble,
            ...styles.recipientChatBubble,
            ...bubblesCentered
              ? {}
              : styles.recipientChatBubbleOrientationNormal,
            ...chatBubble,
            ...userBubble,
          };

    return (
      <div
        style={{
          ...styles.chatBubbleWrapper,
        }}
      >
        <div style={chatBubbleStyles}>
          <p style={{ ...styles.p, ...text }}>{this.props.message.message}</p>
        </div>
      </div>
    );
  }
}
