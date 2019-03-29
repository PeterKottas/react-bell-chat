import * as React from 'react';
import DefaultChatBubble, { ChatBubbleProps, ChatBubbleStyles } from '../ChatBubble';
import DefaultSystemChatBubble from '../SystemChatBubble';
import styles from './styles';
import { Message, IsTypingProps } from '../';
import { Author } from '../Author';
import Avatar, { AvatarProps } from '../Avatar';
import { LastSeenAvatarProps } from '../LastSeenAvatar';

export interface BubbleGroupProps {
  yourAuthorId?: number;
  messages: Message[];
  author: Author;
  authors?: Author[];
  showRecipientAvatar?: boolean;
  bubblesCentered?: boolean;
  bubbleStyles?: ChatBubbleStyles;
  customAvatar?: (props: AvatarProps) => JSX.Element;
  customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
  customChatBubble?: (props: ChatBubbleProps) => JSX.Element;
  customIsTyping?: (props: IsTypingProps) => JSX.Element;
  customSystemChatBubble?: (props: ChatBubbleProps) => JSX.Element;
  showRecipientLastSeenMessage?: boolean;
}

export default class BubbleGroup extends React.Component<BubbleGroupProps> {
  public static defaultProps: BubbleGroupProps = {
    messages: [],
    author: undefined,
    customAvatar: Avatar,
    showRecipientLastSeenMessage: false
  };

  constructor(props: BubbleGroupProps) {
    super(props);
  }

  renderGroup(messages: Message[], author: Author) {
    const {
      bubblesCentered,
      bubbleStyles,
      showRecipientAvatar,
      customChatBubble,
      customSystemChatBubble,
      showRecipientLastSeenMessage,
      customLastSeenAvatar,
      customIsTyping,
    } = this.props;
    const ChatBubble = customChatBubble || DefaultChatBubble;
    const SystemChatBubble = customSystemChatBubble || DefaultSystemChatBubble;

    const messageNodes = messages.map((message, i) => {
      const props = {
        key: i,
        yourAuthorId: this.props.yourAuthorId,
        author,
        message,
        bubblesCentered,
        bubbleStyles,
        isFirstInGroup: i === 0,
        isLastInGroup: i === messages.length - 1 && messages.length > 1,
        isCenterInGroup: i < messages.length - 1 && messages.length > 1,
        lastSeenByAuthors: this.props.authors && this.props.authors.filter(a => a.lastSeenMessageId !== undefined && a.lastSeenMessageId === message.id),
        showRecipientLastSeenMessage,
        customLastSeenAvatar,
        customIsTyping
      };
      return message.authorId !== undefined ?
        (
          <ChatBubble
            {...props}
          />
        )
        :
        (
          <SystemChatBubble
            {...props}
          />
        );
    });

    const youAreAuthor = author && this.props.yourAuthorId === author.id;

    return (
      <div style={styles.chatBubbleWrapper}>
        {!youAreAuthor && showRecipientAvatar && author && this.props.customAvatar &&
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
