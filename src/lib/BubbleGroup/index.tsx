import * as React from 'react';
import {
  ChatBubbleProps,
  ChatBubbleStyles,
  MessageRenderProps,
} from '../ChatBubble';
import { Message } from '../';
import { Author } from '../Author';
import { AvatarProps, AvatarClasses } from '../Avatar';
import {
  LastSeenAvatarProps,
  LastSeenAvatarStyles,
  LastSeenAvatarClasses,
} from '../LastSeenAvatar';
import { AvatarStyles } from './../Avatar';
import classnames from 'classnames';
import { ChatBubbleClasses } from './../ChatBubble';
import { BubbleGroupClasses, defaultBubbleGroupClasses } from './classes';
import { BubbleGroupStyles, defaultBubbleGroupStyles } from './styles';
import { ComponentType } from '../utils/componentType';
import { typedMemo } from '../utils/typedMemo';

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

  CustomAvatar?: ComponentType<AvatarProps>;
  CustomMessageRender?: ComponentType<MessageRenderProps<T>>;
  CustomLastSeenAvatar?: ComponentType<LastSeenAvatarProps>;
  CustomChatBubble?: ComponentType<ChatBubbleProps<T>>;
  CustomSystemChatBubble?: ComponentType<ChatBubbleProps<T>>;

  showRecipientLastSeenMessage?: boolean;
}

function BubbleGroup<T = string>(props: BubbleGroupProps<T>) {
  const {
    messages,
    author,

    CustomAvatar,

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
      <CustomChatBubble key={i} {..._props} />
    ) : (
      <CustomSystemChatBubble key={i} {..._props} />
    );
  });

  const youAreAuthor = author && props.yourAuthorId === author.id;
  return (
    <div
      style={{
        ...defaultBubbleGroupStyles.bubbleGroupWrapper,
        ...styles?.bubbleGroupWrapper,
      }}
      className={classnames(
        defaultBubbleGroupClasses.chatBubbleWrapper,
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

const Memoized = typedMemo(BubbleGroup);
export { Memoized as BubbleGroup };
