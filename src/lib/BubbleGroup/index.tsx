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
import { AvatarStyles } from './../Avatar';
import classnames from 'classnames';
import { ChatBubbleClasses } from './../ChatBubble';
import defaultClasses, { BubbleGroupClasses } from './classes';

export * from './styles';
export * from './classes';

export interface BubbleGroupProps<T = string> {
  yourAuthorId?: number;
  messages: Message<T>[];
  author: Author;
  authors?: Author[];
  showRecipientAvatar?: boolean;
  bubblesCentered?: boolean;

  classes?: BubbleGroupClasses;
  chatBubbleClasses?: ChatBubbleClasses;
  avatarClasses?: AvatarClasses;
  lastSeenAvatarClasses?: LastSeenAvatarClasses;

  styles?: BubbleGroupStyles;
  chatBubbleStyles?: ChatBubbleStyles;
  avatarStyles?: AvatarStyles;
  lastSeenAvatarStyles?: LastSeenAvatarStyles;

  CustomAvatar?: (props: AvatarProps) => JSX.Element;
  CustomMessageRender?: (props: MessageRenderProps<T>) => JSX.Element | string;
  CustomLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
  CustomChatBubble?: (props: ChatBubbleProps<T>) => JSX.Element;
  CustomSystemChatBubble?: (props: ChatBubbleProps<T>) => JSX.Element;
  showRecipientLastSeenMessage?: boolean;
}

function BubbleGroup<T = string>(props: BubbleGroupProps<T>) {
  const {
    messages,
    author,

    CustomAvatar = Avatar,

    styles,

    bubblesCentered,

    chatBubbleStyles,
    lastSeenAvatarStyles,
    avatarStyles,

    classes,
    chatBubbleClasses,
    lastSeenAvatarClasses,
    avatarClasses,

    showRecipientAvatar,
    CustomChatBubble,
    CustomSystemChatBubble,
    showRecipientLastSeenMessage,
    CustomLastSeenAvatar,
    CustomMessageRender,
  } = props;
  const ChatBubble = CustomChatBubble || DefaultChatBubble;
  const SystemChatBubble = CustomSystemChatBubble || DefaultSystemChatBubble;

  const messageNodes = messages.map((message, i) => {
    const _props: ChatBubbleProps<T> = {
      yourAuthorId: props.yourAuthorId,
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
        props.authors &&
        props.authors.filter(
          (a) =>
            a.lastSeenMessageId !== undefined &&
            a.lastSeenMessageId === message.id
        ),
      showRecipientLastSeenMessage,
      CustomLastSeenAvatar,
      CustomMessageRender,
    };
    return message.authorId !== undefined ? (
      <ChatBubble key={i} {..._props} />
    ) : (
      <SystemChatBubble key={i} {..._props} />
    );
  });

  const youAreAuthor = author && props.yourAuthorId === author.id;

  return (
    <div
      style={{
        ...bubbleGroupStyles.bubbleGroupWrapper,
        ...styles?.bubbleGroupWrapper,
      }}
      className={classnames(
        defaultClasses.chatBubbleWrapper,
        classes?.chatBubbleWrapper
      )}
    >
      {!youAreAuthor && showRecipientAvatar && author && CustomAvatar && (
        <CustomAvatar
          author={author}
          styles={avatarStyles}
          classes={avatarClasses}
        />
      )}
      {messageNodes}
    </div>
  );
}

const Memoized = React.memo(BubbleGroup);
export default Memoized;
export { Memoized as BubbleGroup };
