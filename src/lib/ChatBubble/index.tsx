import * as React from 'react';
import styles from './styles';
import Message from '../Message';
import { Author } from '../Author';
import { LastSeenAvatarProps } from './../LastSeenAvatar';

const defaultBubbleStyles: ChatBubbleStyles = {
  userBubble: {},
  chatBubble: {},
  text: {},
  createdOn: {}
};

export interface ChatBubbleStyles {
  userBubble?: React.CSSProperties;
  recipientBubble?: React.CSSProperties;
  chatBubble?: React.CSSProperties;
  text?: React.CSSProperties;
  createdOn?: React.CSSProperties;
  recipientCreatedOn?: React.CSSProperties;
}

export interface ChatBubbleProps {
  message: Message;
  author?: Author;
  bubbleStyles?: ChatBubbleStyles;
  bubblesCentered?: boolean;
  yourAuthorId: number;
  isFirstInGroup?: boolean;
  isLastInGroup?: boolean;
  isCenterInGroup?: boolean;
  lastSeenByAuthors?: Author[];
  showRecipientLastSeenMessage?: boolean;
  customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
  loadingSpinnerColor?: string;
  isSendIconColor?: string;
}

export interface ChatBubbleState {
  mouseOverLastSeenContainer: boolean;
}

export default class ChatBubble extends React.Component<ChatBubbleProps, ChatBubbleState> {
  public static defaultProps = {
    loadingSpinnerColor: 'rgba(255, 255, 255, 0.55)',
    isSendIconColor: '#cddc39'
  };

  constructor(props: ChatBubbleProps) {
    super(props);
    this.state = {
      mouseOverLastSeenContainer: false
    };
  }

  public render() {
    if (!this.props.message) {
      return null;
    }
    const { yourAuthorId } = this.props;
    let { bubbleStyles } = this.props;
    bubbleStyles = bubbleStyles || defaultBubbleStyles;
    const { userBubble, chatBubble, text, recipientBubble } = bubbleStyles;
    const youAreAuthor = this.props.message.authorId === yourAuthorId;

    // message.id 0 is reserved for blue
    const chatBubbleStyles: React.CSSProperties = {
      ...styles.chatBubble,
      ...(youAreAuthor ? {} : styles.recipientChatBubble),
      ...(youAreAuthor ? styles.chatBubbleOrientationNormal : styles.recipientChatBubbleOrientationNormal),
      ...(this.props.isFirstInGroup && (youAreAuthor ? styles.firstChatBubbleInGroup : styles.recipientFirstChatBubbleInGroup)),
      ...(this.props.isLastInGroup && (youAreAuthor ? styles.lastChatBubbleInGroup : styles.recipientLastChatBubbleInGroup)),
      ...(this.props.isCenterInGroup && (youAreAuthor ? styles.centerChatBubbleInGroup : styles.recipientCenterChatBubbleInGroup)),
      ...chatBubble,
      ...(youAreAuthor ? userBubble : recipientBubble),
    };

    return (
      <div
        style={{
          ...styles.chatBubbleWrapper,
        }}
      >
        <div style={chatBubbleStyles}>
          <p style={{ ...styles.p, ...text }}>{this.props.message.message}</p>
          {this.props.message.createdOn && (
            <span
              className="react-bell-chat__chat-bubble__created-on"
              style={{
                ...styles.createdOn,
                ...(youAreAuthor ? bubbleStyles.createdOn : bubbleStyles.recipientCreatedOn)
              }}
              title={this.props.message.createdOn.toLocaleString()}
            >{this.props.message.createdOn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
            </span>
          )}
          {this.props.message.isSend !== undefined && youAreAuthor && (
            <span
              className="react-bell-chat__chat-bubble__is-send"
              style={{
                ...styles.isSend,
              }}
              title={this.props.message.isSend ? 'Send' : 'Sending'}
            >
              {this.props.message.isSend ?
                <svg
                  width="10px"
                  height="10px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 10"
                  preserveAspectRatio="xMidYMid"
                  style={{ background: 'none' }}
                >
                  <path
                    fill={this.props.isSendIconColor}
                    {/* tslint:disable-next-line:max-line-length*/...{}}
                    d="M9,1.7L8.6,1.4C8.5,1.3,8.3,1.3,8.2,1.4L3.9,7C3.8,7.1,3.6,7.1,3.5,7c0,0,0,0,0,0L1.7,5.3c-0.1-0.1-0.3-0.1-0.4,0L1,5.6 C0.9,5.7,0.9,5.9,1,6l2.6,2.6c0.1,0.1,0.3,0.1,0.4,0L9,2.1C9.1,2,9.1,1.8,9,1.7z"
                  />
                </svg>
                :
                <svg
                  width="10px"
                  height="10px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                  className="lds-eclipse"
                  style={{ background: 'none' }}
                >
                  <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 45 0 0 1 10 50" fill={this.props.loadingSpinnerColor} transform="rotate(78 50 52.5)">
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
              }
            </span>
          )}
        </div>
        {this.props.showRecipientLastSeenMessage && this.props.lastSeenByAuthors &&
          this.props.lastSeenByAuthors.length > 0 && this.props.customLastSeenAvatar &&
          (
            <div
              className="react-bell-chat__chat-bubble__last-seen-by__container"
              style={styles.lastSeenByContainer}
              onMouseEnter={() => this.setState({ mouseOverLastSeenContainer: true })}
              onMouseLeave={() => this.setState({ mouseOverLastSeenContainer: false })}
              title={'Last seen by ' + this.props.lastSeenByAuthors.map(a => a.name).join(', ').replace(/,(?!.*,)/gmi, ' and')}
            >
              {this.props.lastSeenByAuthors.map((a, i) => (
                <this.props.customLastSeenAvatar
                  key={i}
                  author={a}
                  containerStyle={{
                    ...(i > 0 && !this.state.mouseOverLastSeenContainer ? { marginTop: -12 } : { marginTop: -4 }),
                    zIndex: 100 + i
                  }}
                />
              ))}
            </div>
          )}
      </div>
    );
  }
}
