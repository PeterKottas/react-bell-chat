import * as React from 'react';
import Message from '../Message';
import { Author } from '../Author';
import {
  LastSeenAvatarProps,
  LastSeenAvatarStyles,
  LastSeenAvatarClasses,
} from './../LastSeenAvatar';
import classnames from 'classnames';
import defaultStyles, { ChatBubbleStyles } from './styles';
import defaultClasses, { ChatBubbleClasses } from './classes';

export * from './styles';
export * from './classes';

export interface MessageRenderProps<T = string> {
  message: Message<T>;
  style?: React.CSSProperties;
  className?: string;
}

export interface ChatBubbleProps<T = string> {
  message: Message<T>;
  author?: Author;

  styles?: ChatBubbleStyles;
  lastSeenAvatarStyles?: LastSeenAvatarStyles;

  classes?: ChatBubbleClasses;
  lastSeenAvatarClasses?: LastSeenAvatarClasses;

  bubblesCentered?: boolean;
  yourAuthorId: number;
  isFirstInGroup?: boolean;
  isLastInGroup?: boolean;
  isCenterInGroup?: boolean;
  lastSeenByAuthors?: Author[];
  showRecipientLastSeenMessage?: boolean;
  customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
  customMessageRender?: (props: MessageRenderProps<T>) => JSX.Element | string;
}

export interface ChatBubbleState {
  mouseOverLastSeenContainer: boolean;
}

export function ChatBubble<T = string>(props: ChatBubbleProps<T>) {
  if (!props.message) {
    return null;
  }

  const {
    lastSeenAvatarStyles,
    yourAuthorId,
    lastSeenAvatarClasses,
    styles,
    classes,
  } = props;

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
    loadingSpinnerColor,
    lastSeenByContainer,
  } = styles ?? {};
  const youAreAuthor = props.message.authorId === yourAuthorId;

  // message.id 0 is reserved for blue
  const finalChatBubbleStyles: React.CSSProperties = {
    ...defaultStyles.chatBubble,
    ...chatBubble,
    ...(youAreAuthor
      ? defaultStyles.userChatBubble
      : defaultStyles.recipientChatBubble),
    ...(youAreAuthor ? userChatBubble : recipientChatBubble),
    ...(youAreAuthor
      ? defaultStyles.userChatBubbleOrientationNormal
      : defaultStyles.recipientChatBubbleOrientationNormal),
    ...(youAreAuthor
      ? userChatBubbleOrientationNormal
      : recipientChatBubbleOrientationNormal),
    ...(props.isFirstInGroup && defaultStyles.firstChatBubbleInGroup),
    ...(props.isFirstInGroup &&
      (youAreAuthor
        ? defaultStyles.userFirstChatBubbleInGroup
        : defaultStyles.recipientFirstChatBubbleInGroup)),
    ...(props.isCenterInGroup && defaultStyles.centerChatBubbleInGroup),
    ...(props.isCenterInGroup &&
      (youAreAuthor
        ? defaultStyles.userCenterChatBubbleInGroup
        : defaultStyles.recipientCenterChatBubbleInGroup)),
    ...(props.isLastInGroup && defaultStyles.lastChatBubbleInGroup),
    ...(props.isLastInGroup &&
      (youAreAuthor
        ? defaultStyles.userLastChatBubbleInGroup
        : defaultStyles.recipientLastChatBubbleInGroup)),
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
    ...defaultStyles.text,
    ...text,
    ...(youAreAuthor ? userText : recipientText),
  };
  const messageClassName = classnames(
    defaultClasses.text,
    classes?.text,
    youAreAuthor ? defaultClasses.userText : defaultClasses.recipientText,
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
        ...defaultStyles.chatBubbleWrapper,
        ...chatBubbleWrapper,
      }}
      className={classnames(
        defaultClasses.chatBubbleWrapper,
        classes?.chatBubbleWrapper
      )}
    >
      <div
        style={{ ...finalChatBubbleStyles }}
        className={classnames(defaultClasses.chatBubble, classes?.chatBubble, {
          [defaultClasses.recipientChatBubble]: !youAreAuthor,
          [classes?.recipientChatBubble]: !youAreAuthor,
          [defaultClasses.userChatBubble]: youAreAuthor,
          [classes?.userChatBubble]: youAreAuthor,
        })}
      >
        {props.customMessageRender ? (
          props.customMessageRender({
            message: props.message,
            style: messageStyle,
            className: messageClassName,
          })
        ) : (
          <span style={messageStyle} className={messageClassName}>
            {props.message.message}
          </span>
        )}
        {props.message.createdOn && (
          <span
            style={{
              ...defaultStyles.createdOn,
              ...createdOn,
              ...(youAreAuthor
                ? defaultStyles.userCreatedOn
                : defaultStyles.recipientCreatedOn),
              ...(youAreAuthor ? userCreatedOn : recipientCreatedOn),
            }}
            className={classnames(
              defaultClasses.createdOn,
              classes?.createdOn,
              {
                [defaultClasses.userCreatedOn]: youAreAuthor,
                [classes?.userCreatedOn]: youAreAuthor,
                [defaultClasses.recipientCreatedOn]: !youAreAuthor,
                [classes?.recipientCreatedOn]: !youAreAuthor,
              }
            )}
            title={props.message.createdOn.toLocaleString()}
          >
            {props.message.createdOn.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })}
          </span>
        )}
        {props.message.isSend !== undefined && youAreAuthor && (
          <span
            style={{
              ...defaultStyles.isSend,
            }}
            className={classnames(defaultClasses.isSend, classes?.isSend)}
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
                      : defaultStyles.isSendIconColor
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
                      : defaultStyles.loadingSpinnerColor
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
        props.customLastSeenAvatar && (
          <div
            style={{
              ...defaultStyles.lastSeenByContainer,
              ...lastSeenByContainer,
            }}
            className={classnames(
              defaultClasses.lastSeenByContainer,
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
              <props.customLastSeenAvatar
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

export default ChatBubble;
