import * as React from 'react';
import DefaultChatBubble, {
  ChatBubbleProps,
  ChatBubbleStyles,
  MessageRenderProps,
} from '../ChatBubble';
import DefaultSystemChatBubble from '../SystemChatBubble';
import bubbleGroupStyles, { BubbleGroupStyles } from './styles';
import { Message } from '../';
import { Author } from '../Author';
import Avatar, { AvatarProps, AvatarClasses } from '../Avatar';
import {
  LastSeenAvatarProps,
  LastSeenAvatarStyles,
  LastSeenAvatarClasses,
} from '../LastSeenAvatar';
import { AvatarStyles } from './../Avatar/index';
import classnames from 'classnames';
import { ChatBubbleClasses } from './../ChatBubble/index';

export interface BubbleGroupClasses {
  chatBubbleWrapper?: string;
}

export interface BubbleGroupProps<T = string> {
  yourAuthorId?: number;
  messages: Message<T>[];
  author: Author;
  authors?: Author[];
  showRecipientAvatar?: boolean;
  bubblesCentered?: boolean;

  className?: string;
  classes?: BubbleGroupClasses;
  chatBubbleClasses?: ChatBubbleClasses;
  avatarClasses?: AvatarClasses;
  lastSeenAvatarClasses?: LastSeenAvatarClasses;

  style?: React.CSSProperties;
  styles?: BubbleGroupStyles;
  chatBubbleStyles?: ChatBubbleStyles;
  avatarStyles?: AvatarStyles;
  lastSeenAvatarStyles?: LastSeenAvatarStyles;

  customAvatar?: (props: AvatarProps) => JSX.Element;
  customMessageRender?: (props: MessageRenderProps<T>) => JSX.Element | string;
  customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
  customChatBubble?: (props: ChatBubbleProps<T>) => JSX.Element;
  customSystemChatBubble?: (props: ChatBubbleProps<T>) => JSX.Element;
  showRecipientLastSeenMessage?: boolean;
}

export default class BubbleGroup<T = string> extends React.PureComponent<
  BubbleGroupProps<T>
> {
  public static defaultProps: BubbleGroupProps<string> = {
    messages: [],
    author: undefined,
    customAvatar: Avatar,
    showRecipientLastSeenMessage: false,
  };

  constructor(props: BubbleGroupProps<T>) {
    super(props);
  }

  renderGroup(messages: Message<T>[], author: Author) {
    let { styles } = this.props;
    if (!styles) {
      styles = {};
    }
    const { bubbleGroupWrapper: chatBubbleWrapper } = styles;
    const {
      bubblesCentered,

      chatBubbleStyles,
      lastSeenAvatarStyles,
      avatarStyles,

      classes,
      chatBubbleClasses,
      lastSeenAvatarClasses,
      avatarClasses,

      showRecipientAvatar,
      customChatBubble,
      customSystemChatBubble,
      showRecipientLastSeenMessage,
      customLastSeenAvatar,
      customMessageRender,
    } = this.props;
    const ChatBubble = customChatBubble || DefaultChatBubble;
    const SystemChatBubble = customSystemChatBubble || DefaultSystemChatBubble;

    const messageNodes = messages.map((message, i) => {
      const props: ChatBubbleProps<T> = {
        yourAuthorId: this.props.yourAuthorId,
        author,
        message,
        bubblesCentered,

        styles: chatBubbleStyles,
        lastSeenAvatarStyles,

        classes: chatBubbleClasses,
        lastSeenAvatarClasses,

        isFirstInGroup: i === 0,
        isLastInGroup: i === messages.length - 1 && messages.length > 1,
        isCenterInGroup: i < messages.length - 1 && messages.length > 1,
        lastSeenByAuthors:
          this.props.authors &&
          this.props.authors.filter(
            (a) =>
              a.lastSeenMessageId !== undefined &&
              a.lastSeenMessageId === message.id
          ),
        showRecipientLastSeenMessage,
        customLastSeenAvatar,
        customMessageRender,
      };
      return message.authorId !== undefined ? (
        <ChatBubble key={i} {...props} />
      ) : (
        <SystemChatBubble key={i} {...props} />
      );
    });

    const youAreAuthor = author && this.props.yourAuthorId === author.id;

    return (
      <div
        style={{
          ...bubbleGroupStyles.bubbleGroupWrapper,
          ...chatBubbleWrapper,
          ...this.props.style,
        }}
        className={classnames(
          'react-bell-chat__bubble-group',
          classes && classes.chatBubbleWrapper,
          this.props.className
        )}
      >
        {!youAreAuthor &&
          showRecipientAvatar &&
          author &&
          this.props.customAvatar && (
            <this.props.customAvatar
              author={this.props.author}
              styles={avatarStyles}
              classes={avatarClasses}
            />
          )}
        {messageNodes}
      </div>
    );
  }

  render() {
    const { messages, author } = this.props;
    return this.renderGroup(messages, author);
  }
}
