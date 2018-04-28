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
}

export interface ChatBubbleState {
  mouseOverLastSeenContainer: boolean;
}

export default class ChatBubble extends React.Component<ChatBubbleProps, ChatBubbleState> {

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
              className="react-chat-ui__chat-bubble__created-on"
              style={{
                ...styles.createdOn,
                ...(youAreAuthor ? bubbleStyles.createdOn : bubbleStyles.recipientCreatedOn)
              }}
              title={this.props.message.createdOn.toLocaleString()}
            >{this.props.message.createdOn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
            </span>
          )}
        </div>
        {this.props.showRecipientLastSeenMessage && this.props.lastSeenByAuthors && this.props.lastSeenByAuthors.length > 0 && this.props.customLastSeenAvatar && (
          <div
            className="react-chat-ui__chat-bubble__last-seen-by__container"
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
