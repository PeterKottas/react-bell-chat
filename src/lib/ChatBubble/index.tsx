import * as React from 'react';
import { Message } from '../Message';
import { Author } from '../Author';
import {
  LastSeenAvatarProps,
  LastSeenAvatarStyles,
  LastSeenAvatarClasses,
} from './../LastSeenAvatar';
import classnames from 'classnames';
import { ChatBubbleStyles, defaultChatBubbleStyles } from './styles';
import { ChatBubbleClasses, defaultChatBubbleClasses } from './classes';
import { ComponentType } from '../utils/componentType';
import { ChatBubbleConfig, defaultChatBubbleConfig } from './config';

export * from './styles';
export * from './classes';
export * from './config';

export interface MessageRenderProps<
  TMessageData = string,
  TMessage extends Message<TMessageData> = Message<TMessageData>
> {
  message: TMessage;
  style?: React.CSSProperties;
  className?: string;
}

export interface ChatBubbleProps<
  TMessageData = string,
  TMessage extends Message<TMessageData> = Message<TMessageData>,
  TAuthor extends Author<TMessageData> = Author<TMessageData>
> {
  message: TMessage;
  author?: TAuthor;

  config?: ChatBubbleConfig;

  styles?: ChatBubbleStyles;
  lastSeenAvatarStyles?: LastSeenAvatarStyles;

  classes?: ChatBubbleClasses;
  lastSeenAvatarClasses?: LastSeenAvatarClasses;

  bubblesCentered?: boolean;
  yourAuthorId: number;
  isFirstInGroup?: boolean;
  isLastInGroup?: boolean;
  isCenterInGroup?: boolean;
  lastSeenByAuthors?: TAuthor[];
  showRecipientLastSeenMessage?: boolean;
  CustomLastSeenAvatar?: ComponentType<LastSeenAvatarProps<TMessageData>>;
  CustomMessageRender?: ComponentType<MessageRenderProps<TMessageData>>;
}

export function ChatBubble<
  TMessageData = string,
  TMessage extends Message<TMessageData> = Message<TMessageData>,
  TAuthor extends Author<TMessageData> = Author<TMessageData>
>(props: ChatBubbleProps<TMessageData, TMessage, TAuthor>) {
  if (!props.message) {
    return null;
  }

  const {
    lastSeenAvatarStyles,
    yourAuthorId,
    lastSeenAvatarClasses,
    styles,
    classes,
    config,
  } = props;

  const finalConfig = {
    ...defaultChatBubbleConfig,
    ...config,
  };

  const {
    userChatBubble,
    chatBubble,
    text,
    userText,
    recipientText,
    recipientChatBubble,
    firstChatBubbleInGroup,
    userFirstChatBubbleInGroup,
    recipientFirstChatBubbleInGroup,
    centerChatBubbleInGroup,
    userCenterChatBubbleInGroup,
    recipientCenterChatBubbleInGroup,
    lastChatBubbleInGroup,
    userLastChatBubbleInGroup,
    recipientLastChatBubbleInGroup,
    userChatBubbleOrientationNormal,
    recipientChatBubbleOrientationNormal,
    chatBubbleWrapper,
    createdOn,
    userCreatedOn,
    recipientCreatedOn,
    isSendIconColor,
    isSend,
    loadingSpinnerColor,
    lastSeenByContainer,
  } = styles ?? {};
  const youAreAuthor = props.message.authorId === yourAuthorId;

  // message.id 0 is reserved for blue
  const finalChatBubbleStyles: React.CSSProperties = {
    ...defaultChatBubbleStyles.chatBubble,
    ...chatBubble,
    ...(youAreAuthor
      ? defaultChatBubbleStyles.userChatBubble
      : defaultChatBubbleStyles.recipientChatBubble),
    ...(youAreAuthor ? userChatBubble : recipientChatBubble),
    ...(youAreAuthor
      ? defaultChatBubbleStyles.userChatBubbleOrientationNormal
      : defaultChatBubbleStyles.recipientChatBubbleOrientationNormal),
    ...(youAreAuthor
      ? userChatBubbleOrientationNormal
      : recipientChatBubbleOrientationNormal),
    ...(props.isFirstInGroup && defaultChatBubbleStyles.firstChatBubbleInGroup),
    ...(props.isFirstInGroup &&
      (youAreAuthor
        ? defaultChatBubbleStyles.userFirstChatBubbleInGroup
        : defaultChatBubbleStyles.recipientFirstChatBubbleInGroup)),
    ...(props.isCenterInGroup &&
      defaultChatBubbleStyles.centerChatBubbleInGroup),
    ...(props.isCenterInGroup &&
      (youAreAuthor
        ? defaultChatBubbleStyles.userCenterChatBubbleInGroup
        : defaultChatBubbleStyles.recipientCenterChatBubbleInGroup)),
    ...(props.isLastInGroup && defaultChatBubbleStyles.lastChatBubbleInGroup),
    ...(props.isLastInGroup &&
      (youAreAuthor
        ? defaultChatBubbleStyles.userLastChatBubbleInGroup
        : defaultChatBubbleStyles.recipientLastChatBubbleInGroup)),
    ...(props.isFirstInGroup && firstChatBubbleInGroup),
    ...(props.isFirstInGroup &&
      (youAreAuthor
        ? userFirstChatBubbleInGroup
        : recipientFirstChatBubbleInGroup)),
    ...(props.isCenterInGroup && centerChatBubbleInGroup),
    ...(props.isCenterInGroup &&
      (youAreAuthor
        ? userCenterChatBubbleInGroup
        : recipientCenterChatBubbleInGroup)),
    ...(props.isLastInGroup && lastChatBubbleInGroup),
    ...(props.isLastInGroup &&
      (youAreAuthor
        ? userLastChatBubbleInGroup
        : recipientLastChatBubbleInGroup)),
  };

  const messageStyle = {
    ...defaultChatBubbleStyles.text,
    ...text,
    ...(youAreAuthor ? userText : recipientText),
  };
  const messageClassName = classnames(
    defaultChatBubbleClasses.text,
    classes?.text,
    youAreAuthor
      ? defaultChatBubbleClasses.userText
      : defaultChatBubbleClasses.recipientText,
    youAreAuthor ? classes?.userText : classes?.recipientText
  );

  const [
    isMouseOverLastSeenContainer,
    setIsMouseOverLastSeenContainer,
  ] = React.useState(false);

  const onMouseEnterLastSeenContainer = React.useCallback(
    () => setIsMouseOverLastSeenContainer(true),
    []
  );
  const onMouseLeaveLastSeenContainer = React.useCallback(
    () => setIsMouseOverLastSeenContainer(false),
    []
  );

  return (
    <div
      style={{
        ...defaultChatBubbleStyles.chatBubbleWrapper,
        ...chatBubbleWrapper,
      }}
      className={classnames(
        defaultChatBubbleClasses.chatBubbleWrapper,
        classes?.chatBubbleWrapper
      )}
    >
      <div
        style={{ ...finalChatBubbleStyles }}
        className={classnames(
          defaultChatBubbleClasses.chatBubble,
          classes?.chatBubble,
          {
            [defaultChatBubbleClasses.recipientChatBubble]: !youAreAuthor,
            [classes?.recipientChatBubble ?? '']: !youAreAuthor,
            [defaultChatBubbleClasses.userChatBubble]: youAreAuthor,
            [classes?.userChatBubble ?? '']: youAreAuthor,
          }
        )}
      >
        {props.CustomMessageRender ? (
          <props.CustomMessageRender
            message={props.message}
            style={messageStyle}
            className={messageClassName}
          />
        ) : (
          <span style={messageStyle} className={messageClassName}>
            {props.message.message}
          </span>
        )}
        {props.message.createdOn && (
          <span
            style={{
              ...defaultChatBubbleStyles.createdOn,
              ...createdOn,
              ...(youAreAuthor
                ? defaultChatBubbleStyles.userCreatedOn
                : defaultChatBubbleStyles.recipientCreatedOn),
              ...(youAreAuthor ? userCreatedOn : recipientCreatedOn),
            }}
            className={classnames(
              defaultChatBubbleClasses.createdOn,
              classes?.createdOn,
              {
                [defaultChatBubbleClasses.userCreatedOn]: youAreAuthor,
                [classes?.userCreatedOn ?? '']: youAreAuthor,
                [defaultChatBubbleClasses.recipientCreatedOn]: !youAreAuthor,
                [classes?.recipientCreatedOn ?? '']: !youAreAuthor,
              }
            )}
            title={props.message.createdOn.toLocaleString()}
          >
            {finalConfig.formatTime(props.message.createdOn)}
          </span>
        )}
        {props.message.isSend !== undefined && youAreAuthor && (
          <span
            style={{
              ...defaultChatBubbleStyles.isSend,
              ...isSend,
            }}
            className={classnames(
              defaultChatBubbleClasses.isSend,
              classes?.isSend
            )}
            // TODO: Maybe when we do translations
            // title={props.message.isSend ? 'Send' : 'Sending'}
          >
            {props.message.isSend ? (
              <svg
                width="10px"
                height="10px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
                preserveAspectRatio="xMidYMid"
                style={{ background: 'none' }}
              >
                <path
                  fill={
                    isSendIconColor
                      ? isSendIconColor
                      : defaultChatBubbleStyles.isSendIconColor
                  }
                  {
                    /* tslint:disable-next-line:max-line-length*/ ...{}
                  }
                  d="M9,1.7L8.6,1.4C8.5,1.3,8.3,1.3,8.2,1.4L3.9,7C3.8,7.1,3.6,7.1,3.5,7c0,0,0,0,0,0L1.7,5.3c-0.1-0.1-0.3-0.1-0.4,0L1,5.6 C0.9,5.7,0.9,5.9,1,6l2.6,2.6c0.1,0.1,0.3,0.1,0.4,0L9,2.1C9.1,2,9.1,1.8,9,1.7z"
                />
              </svg>
            ) : (
              <svg
                width="10px"
                height="10px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                style={{ background: 'none' }}
              >
                <path
                  stroke="none"
                  d="M10 50A40 40 0 0 0 90 50A40 45 0 0 1 10 50"
                  fill={
                    loadingSpinnerColor
                      ? loadingSpinnerColor
                      : defaultChatBubbleStyles.loadingSpinnerColor
                  }
                  transform="rotate(78 50 52.5)"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="linear"
                    values="0 50 52.5;360 50 52.5"
                    keyTimes="0;1"
                    dur="1s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            )}
          </span>
        )}
      </div>
      {props.showRecipientLastSeenMessage &&
        props.lastSeenByAuthors &&
        props.lastSeenByAuthors.length > 0 &&
        props.CustomLastSeenAvatar && (
          <div
            style={{
              ...defaultChatBubbleStyles.lastSeenByContainer,
              ...lastSeenByContainer,
            }}
            className={classnames(
              defaultChatBubbleClasses.lastSeenByContainer,
              classes?.lastSeenByContainer
            )}
            onMouseEnter={onMouseEnterLastSeenContainer}
            onMouseLeave={onMouseLeaveLastSeenContainer}
            // TODO: Maybe when we do translations
            /*title={
                'Last seen by ' +
                props.lastSeenByAuthors
                  .map((a) => a.name)
                  .join(', ')
                  .replace(/,(?!.*,)/gim, ' and')
              }*/
          >
            {props.lastSeenByAuthors.map((a, i) => (
              <props.CustomLastSeenAvatar
                key={i}
                author={a}
                styles={lastSeenAvatarStyles}
                index={i}
                mouseOver={isMouseOverLastSeenContainer}
                classes={lastSeenAvatarClasses}
              />
            ))}
          </div>
        )}
    </div>
  );
}
