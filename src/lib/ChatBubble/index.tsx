import * as React from 'react';
import Message from '../Message';
import { Author } from '../Author';
import {
  LastSeenAvatarProps,
  LastSeenAvatarStyles,
  LastSeenAvatarClasses,
} from './../LastSeenAvatar';
import chatBubbleStyles, { ChatBubbleStyles } from './styles';
export { ChatBubbleStyles };
import classnames from 'classnames';

export interface MessageRenderProps<T = string> {
  message: Message<T>;
  style?: React.CSSProperties;
  className?: string;
}

export interface ChatBubbleClasses {
  chatBubbleWrapper?: string;
  chatBubble?: string;
  systemChatBubbleContainer?: string;
  systemChatBubbleText?: string;
  userChatBubbleOrientationNormal?: string;
  recipientChatBubbleOrientationNormal?: string;
  text?: string;
  userText?: string;
  recipientText?: string;
  userChatBubble?: string;
  recipientChatBubble?: string;
  firstChatBubbleInGroup?: string;
  userFirstChatBubbleInGroup?: string;
  recipientFirstChatBubbleInGroup?: string;
  lastChatBubbleInGroup?: string;
  userLastChatBubbleInGroup?: string;
  recipientLastChatBubbleInGroup?: string;
  centerChatBubbleInGroup?: string;
  userCenterChatBubbleInGroup?: string;
  recipientCenterChatBubbleInGroup?: string;
  createdOn?: string;
  recipientCreatedOn?: string;
  userCreatedOn?: string;
  isSend?: string;

  lastSeenByContainer?: string;
}

export interface ChatBubbleProps<T = string> {
  message: Message<T>;
  author?: Author;

  style?: React.CSSProperties;
  styles?: ChatBubbleStyles;
  lastSeenAvatarStyles?: LastSeenAvatarStyles;

  className?: string;
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

export default class ChatBubble<T = string> extends React.PureComponent<
  ChatBubbleProps<T>,
  ChatBubbleState
> {
  constructor(props: ChatBubbleProps<T>) {
    super(props);
    this.state = {
      mouseOverLastSeenContainer: false,
    };
  }

  public render() {
    if (!this.props.message) {
      return null;
    }

    const {
      lastSeenAvatarStyles,
      yourAuthorId,
      lastSeenAvatarClasses,
    } = this.props;

    let { styles, classes } = this.props;

    if (!classes) {
      classes = {};
    }

    if (!styles) {
      styles = {};
    }
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
    } = styles;
    const youAreAuthor = this.props.message.authorId === yourAuthorId;

    // message.id 0 is reserved for blue
    const finalChatBubbleStyles: React.CSSProperties = {
      ...chatBubbleStyles.chatBubble,
      ...chatBubble,
      ...this.props.style,
      ...(youAreAuthor
        ? chatBubbleStyles.userChatBubble
        : chatBubbleStyles.recipientChatBubble),
      ...(youAreAuthor ? userChatBubble : recipientChatBubble),
      ...(youAreAuthor
        ? chatBubbleStyles.userChatBubbleOrientationNormal
        : chatBubbleStyles.recipientChatBubbleOrientationNormal),
      ...(youAreAuthor
        ? userChatBubbleOrientationNormal
        : recipientChatBubbleOrientationNormal),
      ...(this.props.isFirstInGroup && chatBubbleStyles.firstChatBubbleInGroup),
      ...(this.props.isFirstInGroup &&
        (youAreAuthor
          ? chatBubbleStyles.userFirstChatBubbleInGroup
          : chatBubbleStyles.recipientFirstChatBubbleInGroup)),
      ...(this.props.isCenterInGroup &&
        chatBubbleStyles.centerChatBubbleInGroup),
      ...(this.props.isCenterInGroup &&
        (youAreAuthor
          ? chatBubbleStyles.userCenterChatBubbleInGroup
          : chatBubbleStyles.recipientCenterChatBubbleInGroup)),
      ...(this.props.isLastInGroup && chatBubbleStyles.lastChatBubbleInGroup),
      ...(this.props.isLastInGroup &&
        (youAreAuthor
          ? chatBubbleStyles.userLastChatBubbleInGroup
          : chatBubbleStyles.recipientLastChatBubbleInGroup)),
      ...(this.props.isFirstInGroup && firstChatBubbleInGroup),
      ...(this.props.isFirstInGroup &&
        (youAreAuthor
          ? userFirstChatBubbleInGroup
          : recipientFirstChatBubbleInGroup)),
      ...(this.props.isCenterInGroup && centerChatBubbleInGroup),
      ...(this.props.isCenterInGroup &&
        (youAreAuthor
          ? userCenterChatBubbleInGroup
          : recipientCenterChatBubbleInGroup)),
      ...(this.props.isLastInGroup && lastChatBubbleInGroup),
      ...(this.props.isLastInGroup &&
        (youAreAuthor
          ? userLastChatBubbleInGroup
          : recipientLastChatBubbleInGroup)),
    };

    const messageStyle = {
      ...chatBubbleStyles.text,
      ...text,
      ...(youAreAuthor ? userText : recipientText),
    };
    const messageClassName = classnames(
      'react-bell-chat__chat-bubble__text',
      classes.text,
      youAreAuthor ? classes.userText : classes.recipientText
    );

    return (
      <div
        style={{
          ...chatBubbleStyles.chatBubbleWrapper,
          ...chatBubbleWrapper,
        }}
        className={classnames(
          'react-bell-chat__chat-bubble__wrapper',
          this.props.className,
          classes.chatBubbleWrapper
        )}
      >
        <div
          style={{ ...finalChatBubbleStyles }}
          className={classnames(
            'react-bell-chat__chat-bubble',
            this.props.className,
            classes.chatBubble,
            {
              [classes.recipientChatBubble]: !youAreAuthor,
              [classes.userChatBubble]: youAreAuthor,
            }
          )}
        >
          {this.props.customMessageRender ? (
            this.props.customMessageRender({
              message: this.props.message,
              style: messageStyle,
              className: messageClassName,
            })
          ) : (
            <span style={messageStyle} className={messageClassName}>
              {this.props.message.message}
            </span>
          )}
          {this.props.message.createdOn && (
            <span
              style={{
                ...chatBubbleStyles.createdOn,
                ...createdOn,
                ...(youAreAuthor
                  ? chatBubbleStyles.userCreatedOn
                  : chatBubbleStyles.recipientCreatedOn),
                ...(youAreAuthor ? userCreatedOn : recipientCreatedOn),
              }}
              className={classnames(
                'react-bell-chat__chat-bubble__created-on',
                classes.createdOn,
                youAreAuthor
                  ? classes.userCreatedOn
                  : classes.recipientCreatedOn
              )}
              title={this.props.message.createdOn.toLocaleString()}
            >
              {this.props.message.createdOn.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
              })}
            </span>
          )}
          {this.props.message.isSend !== undefined && youAreAuthor && (
            <span
              style={{
                ...chatBubbleStyles.isSend,
              }}
              className={classnames(
                'react-bell-chat__chat-bubble__is-send',
                classes.isSend
              )}
              title={this.props.message.isSend ? 'Send' : 'Sending'}
            >
              {this.props.message.isSend ? (
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
                        : chatBubbleStyles.isSendIconColor
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
                        : chatBubbleStyles.loadingSpinnerColor
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
        {this.props.showRecipientLastSeenMessage &&
          this.props.lastSeenByAuthors &&
          this.props.lastSeenByAuthors.length > 0 &&
          this.props.customLastSeenAvatar && (
            <div
              style={{
                ...chatBubbleStyles.lastSeenByContainer,
                ...lastSeenByContainer,
              }}
              className={classnames(
                'react-bell-chat__chat-bubble__last-seen-by__container',
                classes.lastSeenByContainer
              )}
              onMouseEnter={() =>
                this.setState({ mouseOverLastSeenContainer: true })
              }
              onMouseLeave={() =>
                this.setState({ mouseOverLastSeenContainer: false })
              }
              title={
                'Last seen by ' +
                this.props.lastSeenByAuthors
                  .map((a) => a.name)
                  .join(', ')
                  .replace(/,(?!.*,)/gim, ' and')
              }
            >
              {this.props.lastSeenByAuthors.map((a, i) => (
                <this.props.customLastSeenAvatar
                  key={i}
                  author={a}
                  styles={{
                    ...lastSeenAvatarStyles,
                    container: {
                      ...(lastSeenAvatarStyles
                        ? lastSeenAvatarStyles.container
                        : {}),
                      ...(i > 0 && !this.state.mouseOverLastSeenContainer
                        ? { marginTop: -12 }
                        : { marginTop: -4 }),
                    },
                  }}
                  classes={lastSeenAvatarClasses}
                />
              ))}
            </div>
          )}
      </div>
    );
  }
}
