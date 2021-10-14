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

export interface BubbleGroupProps<
  TMessageData = string,
  TMessage extends Message<TMessageData> = Message<TMessageData>,
  TAuthor extends Author<TMessageData> = Author<TMessageData>
> {
  yourAuthorId?: number;
  messages: TMessage[];
  author: TAuthor;
  authors?: TAuthor[];
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

  CustomAvatar?: ComponentType<AvatarProps<TMessageData, TAuthor>>;
  CustomMessageRender?: ComponentType<
    MessageRenderProps<TMessageData, TMessage>
  >;
  CustomLastSeenAvatar?: ComponentType<
    LastSeenAvatarProps<TMessageData, TAuthor>
  >;
  CustomChatBubble?: ComponentType<
    ChatBubbleProps<TMessageData, TMessage, TAuthor>
  >;
  CustomSystemChatBubble?: ComponentType<
    ChatBubbleProps<TMessageData, TMessage, TAuthor>
  >;

  showRecipientLastSeenMessage?: boolean;
}

function BubbleGroup<
  TMessageData = string,
  TMessage extends Message<TMessageData> = Message<TMessageData>,
  TAuthor extends Author<TMessageData> = Author<TMessageData>
>(props: BubbleGroupProps<TMessageData, TMessage, TAuthor>) {
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
    const _props: ChatBubbleProps<TMessageData, TMessage, TAuthor> = {
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
          a =>
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
