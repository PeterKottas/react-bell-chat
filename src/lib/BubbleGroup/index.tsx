import * as React from 'react';
import DefaultChatBubble, { ChatBubbleProps, ChatBubbleStyles } from '../ChatBubble';
import styles from './styles';
import { Message } from '../';
import { Author } from '../Author';
import Avatar, { AvatarProps } from '../Avatar';

export interface BubbleGroupProps {
  selfAuthorId?: number;
  messages: Message[];
  author: Author;
  showAvatar?: boolean;
  chatBubble?: (props: ChatBubbleProps) => JSX.Element;
  bubblesCentered?: boolean;
  bubbleStyles?: ChatBubbleStyles;
  customAvatar?: (props: AvatarProps) => JSX.Element;
};

export default class BubbleGroup extends React.Component<BubbleGroupProps> {
  public static defaultProps: BubbleGroupProps = {
    messages: [],
    author: undefined,
    customAvatar: props => <Avatar {...props} />
  }
  
  constructor(props: BubbleGroupProps) {
    super(props);
  }

  /**
   * Parses and collects messages of one type to be grouped together.
   * @return {messageNodes} - a JSX wrapped group of messages
   */
  renderGroup(messages: Message[], author: Author) {
    const {
      bubblesCentered,
      bubbleStyles,
      showAvatar,
      chatBubble,
    } = this.props;
    const ChatBubble = chatBubble || DefaultChatBubble;

    const messageNodes = messages.map((message, i) => (
      <ChatBubble
        key={i}
        selfAuthorId={this.props.selfAuthorId}
        message={message}
        bubblesCentered={bubblesCentered}
        bubbleStyles={bubbleStyles}
      />
    ));

    return (
      <div style={styles.chatBubbleWrapper}>
        {showAvatar && author && this.props.customAvatar &&
          this.props.customAvatar({ author: this.props.author })
        }
        {messageNodes}
      </div>
    );
  }

  render() {
    const { messages, author } = this.props;
    return this.renderGroup(messages, author);
  }
}
