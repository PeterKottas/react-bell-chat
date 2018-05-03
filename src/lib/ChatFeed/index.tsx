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
import IsTyping from '../IsTyping';
import ChatScrollArea, { ChatScrollAreaProps, ChatScrollAreaApi } from '../ChatScrollArea';
import LastSeenAvatar, { LastSeenAvatarProps } from '../LastSeenAvatar';
import { groupBy } from '../utils/utils';
import DateRow, { DateRowProps } from '../DateRow';
import LoadMoreMessages, { LoadMoreMessagesProps } from '../LoadMoreMessages';
import LoadingMessages, { LoadingMessagesProps } from '../LoadingMessages';

// Model for ChatFeed props.

export interface ChatFeedProps {
  className?: string;

  messages: Message[];
  authors: Author[];
  yourAuthorId: number;

  bubblesCentered?: boolean;
  bubbleStyles?: ChatBubbleStyles;
  maxHeight?: string | number;
  minHeight?: string | number;

  showDateRow?: boolean;
  showRecipientAvatar?: boolean;
  showRecipientLastSeenMessage?: boolean;
  showIsTyping?: boolean;
  showLoadMoreMessages?: boolean;
  showLoadingMessages?: boolean;

  showRecipientAvatarChatMessagesStyle?: React.CSSProperties;
  showRecipientLastSeenMessageChatMessagesStyle?: React.CSSProperties;
  showIsTypingChatMessagesStyle?: React.CSSProperties;

  customLoadingMessages?: (props: LoadingMessagesProps) => JSX.Element;
  customLoadMoreMessages?: (props: LoadMoreMessagesProps) => JSX.Element;
  customChatBubble?: (props: ChatBubbleProps) => JSX.Element;
  customAvatar?: (props: AvatarProps) => JSX.Element;
  customScrollArea?: (props: ChatScrollAreaProps) => JSX.Element;
  customIsTyping?: (props: ChatScrollAreaProps) => JSX.Element;
  customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
  customDateRow?: (props: DateRowProps) => JSX.Element;

  ref?: (api: ChatFeedApi) => void;
}

export interface ChatFeedState {
}

export interface ChatFeedApi {
  onMessageSend: () => void;
  scrollApi: ChatScrollAreaApi;
}

const DefaultChatBubbleFunc = props => <DefaultChatBubble {...props} />;
const DefaultScrollAreaFunc = props => <ChatScrollArea {...props} />;

// React component to render a complete chat feed
export default class ChatFeed extends React.Component<ChatFeedProps, ChatFeedState> implements ChatFeedApi {
  public static defaultProps: ChatFeedProps = {
    messages: [],
    authors: [],
    customChatBubble: DefaultChatBubbleFunc,
    customAvatar: Avatar,
    customScrollArea: DefaultScrollAreaFunc,
    customLastSeenAvatar: LastSeenAvatar,
    customDateRow: DateRow,
    customLoadingMessages: LoadingMessages,
    customLoadMoreMessages: LoadMoreMessages,
    yourAuthorId: 0
  }

  public scrollApi: ChatScrollAreaApi;

  constructor(props: ChatFeedProps) {
    super(props);
  }

  public onMessageSend() {
    this.scrollApi && this.scrollApi.scrollToBottom();
  }

  shouldComponentUpdate(nextProps: ChatFeedProps, nextState: ChatFeedState) {
    return (
      this.shallowDiffers(this.props, nextProps) ||
      this.shallowDiffers(this.state, nextState)
    )
  }

  shallowDiffers(a, b) {
    for (let i in a) {
      if (!(i in b)) {
        return true;
      }
    }
    for (let i in b) {
      if (a[i] !== b[i]) {
        return true;
      }
    }
    return false;
  }

  /**
   * Determines what type of message/messages to render.
   */
  renderMessages(messages: Message[]) {
    const { bubbleStyles, customChatBubble, showRecipientAvatar } = this.props;

    //First group by days
    const groups = groupBy(messages, item => item.createdOn && item.createdOn.toDateString());
    let messageNodes: JSX.Element[] = [];
    let jsxKey = 0;
    Object.keys(groups).forEach(key => {
      let group = [];
      const messagesGroup = groups[key];
      if (messagesGroup[0] && messagesGroup[0].createdOn && this.props.showDateRow) {
        messageNodes.push(<this.props.customDateRow key={key} date={messagesGroup[0].createdOn} />);
      }
      messageNodes = messageNodes.concat(messagesGroup.map((message, index) => {
        group.push(message);
        // Find diff in message type or no more messages
        if (!messagesGroup[index + 1] || messagesGroup[index + 1].authorId !== message.authorId) {
          const messageGroup = group;
          const author = this.props.authors && this.props.authors.filter(a => a.id === message.authorId)[0];
          group = [];
          jsxKey++;
          return (
            <BubbleGroup
              key={jsxKey}
              yourAuthorId={this.props.yourAuthorId}
              messages={messageGroup}
              author={author}
              authors={this.props.authors}
              showRecipientAvatar={showRecipientAvatar}
              customChatBubble={customChatBubble}
              bubbleStyles={bubbleStyles}
              showRecipientLastSeenMessage={this.props.showRecipientLastSeenMessage}
              customAvatar={this.props.customAvatar}
              customLastSeenAvatar={this.props.customLastSeenAvatar}
            />
          );
        }
        return null;
      }));
    });
    return messageNodes;
  }

  renderIsTyping() {
    const typingAuthors = this.props.authors && this.props.authors.filter(a => a.isTyping && a.id !== this.props.yourAuthorId);
    if (!typingAuthors || typingAuthors.length === 0) {
      return null;
    }
    return <IsTyping typingAuthors={typingAuthors} />;
  }

  /**
   * render : renders our chat feed
   */
  render() {
    return (
      <div
        id={'react-chat-ui__chat-panel ' + (this.props.className ? this.props.className : '')}
        style={{
          ...styles.chatPanel
        }}
      >
        <this.props.customScrollArea
          minHeight={this.props.minHeight}
          maxHeight={this.props.maxHeight}
          apiRef={e => this.scrollApi = e}
          containerStyles={{
            ...styles.chatMessages,
            ...(this.props.showRecipientAvatar && styles.showRecipientAvatarChatMessagesStyle),
            ...(this.props.showRecipientAvatar && this.props.showRecipientAvatarChatMessagesStyle),
            ...(this.props.showIsTyping && styles.showIsTypingChatMessagesStyle),
            ...(this.props.showIsTyping && this.props.showIsTypingChatMessagesStyle),
            ...(this.props.showRecipientLastSeenMessage && styles.showRecipientLastSeenMessageChatMessagesStyle),
            ...(this.props.showRecipientLastSeenMessage && this.props.showRecipientLastSeenMessageChatMessagesStyle),
          }}
        >
          {this.props.showLoadMoreMessages && <this.props.customLoadMoreMessages />}
          {this.props.showLoadingMessages && <this.props.customLoadingMessages />}
          {this.renderMessages(this.props.messages)}
          {this.props.showIsTyping && this.renderIsTyping()}
        </this.props.customScrollArea>
      </div>
    );
  }
}
