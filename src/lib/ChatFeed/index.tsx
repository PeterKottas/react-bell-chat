// Copyright 2017 Brandon Mowat
// Written, developed, and designed by Brandon Mowat for the purpose of helping
// other developers make chat interfaces.

import * as React from 'react';
import BubbleGroup from '../BubbleGroup';
import DefaultChatBubble, { ChatBubbleProps } from '../ChatBubble';
import Message from '../Message';
import styles from './styles';
import { Author } from '../Author';
import { ChatBubbleStyles } from '../ChatBubble/';
import Avatar, { AvatarProps } from '../Avatar';
import ChatScrollArea, { ChatScrollAreaProps, IChatScrollArea } from '../ChatScrollArea';

// Model for ChatFeed props.

export interface ChatFeedProps {
  authors: Author[];
  selfAuthorId: number;
  bubblesCentered?: boolean;
  bubbleStyles?: ChatBubbleStyles;
  maxHeight?: number;
  messages: Message[];
  showAvatar?: boolean;
  customChatBubble?: (props: ChatBubbleProps) => JSX.Element;
  customAvatar?: (props: AvatarProps) => JSX.Element;
  customScrollArea?: (props: ChatScrollAreaProps) => JSX.Element;
  onMessageSendRef?: (onMessageSend: () => void) => void;
}

// React component to render a complete chat feed
export default class ChatFeed extends React.Component<ChatFeedProps> {
  public static defaultProps: ChatFeedProps = {
    messages: [],
    authors: [],
    customChatBubble: props => <DefaultChatBubble {...props} />,
    customAvatar: props => <Avatar {...props} />,
    customScrollArea: props => <ChatScrollArea {...props} />,
    selfAuthorId: 0
  }

  private scrollElementRef: IChatScrollArea;

  constructor(props: ChatFeedProps) {
    super(props);
  }

  componentDidMount() {
    this.props.onMessageSendRef && this.props.onMessageSendRef(() => this.scrollElementRef && this.scrollElementRef.scrollToBottom());
  }

  componentWillUnmount() {
    this.props.onMessageSendRef && this.props.onMessageSendRef(undefined);
  }

  /**
   * Determines what type of message/messages to render.
   */
  renderMessages(messages: Message[]) {
    const { bubbleStyles, customChatBubble, showAvatar } = this.props;

    let group = [];

    const messageNodes = messages.map((message, index) => {
      group.push(message);
      // Find diff in message type or no more messages
      if (!messages[index + 1] || messages[index + 1].authorId !== message.authorId) {
        const messageGroup = group;
        const author = this.props.authors && this.props.authors.filter(a => a.id === message.authorId)[0];
        group = [];
        return (
          <BubbleGroup
            key={index}
            selfAuthorId={this.props.selfAuthorId}
            messages={messageGroup}
            author={author}
            showAvatar={showAvatar}
            customChatBubble={customChatBubble}
            bubbleStyles={bubbleStyles}
          />
        );
      }

      return null;
    });

    this.props.authors && this.props.authors.forEach(a => {
      if (a.isTyping) {
        messageNodes.push(
          <div key="isTyping" style={{ ...styles.chatBubbleWrapper }}>
            <this.props.customChatBubble
              selfAuthorId={this.props.selfAuthorId}
              message={{ authorId: a.id, message: '...' }}
              bubbleStyles={bubbleStyles}
              bubblesCentered={this.props.bubblesCentered}
            />
          </div>
        );
      }
    });
    // messageNodes.reverse();
    // return nodes
    return messageNodes;
  }

  /**
   * render : renders our chat feed
   */
  render() {
    return (
      <div id="chat-panel" style={styles.chatPanel}>
        <this.props.customScrollArea
          maxHeight={this.props.maxHeight}
          refScrollElement={e => this.scrollElementRef = e}
        >
          <div className="chat-messages">
            {this.renderMessages(this.props.messages)}
          </div>
        </this.props.customScrollArea>
      </div>
    );
  }
}
