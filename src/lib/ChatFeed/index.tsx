// Copyright 2017 Brandon Mowat
// Written, developed, and designed by Brandon Mowat for the purpose of helping
// other developers make chat interfaces.

import * as React from 'react';
import BubbleGroup, {
  BubbleGroupClasses,
  BubbleGroupStyles,
} from '../BubbleGroup';
import DefaultChatBubble, {
  ChatBubbleProps,
  MessageRenderProps,
} from '../ChatBubble';
import Message from '../Message';
import { Author } from '../Author';
import { ChatBubbleStyles, ChatBubbleClasses } from '../ChatBubble';
import Avatar, { AvatarProps, AvatarStyles, AvatarClasses } from '../Avatar';
import IsTyping, { IsTypingStyles, IsTypingClasses } from '../IsTyping';
import ChatScrollArea, {
  ChatScrollAreaProps,
  ChatScrollAreaApi,
  ChatScrollAreaStyles,
  ChatScrollAreaClasses,
} from '../ChatScrollArea';
import ChatMessagesContainer, {
  ChatMessagesContainerProps,
  ChatMessagesContainerClasses,
  ChatMessagesContainerStyles,
} from '../ChatMessagesContainer';
import LastSeenAvatar, {
  LastSeenAvatarProps,
  LastSeenAvatarStyles,
  LastSeenAvatarClasses,
} from '../LastSeenAvatar';
import { groupBy } from '../utils/utils';
import DateRow, {
  DateRowProps,
  DateRowStyles,
  DateRowClasses,
} from '../DateRow';
import LoadingMessages, {
  LoadingMessagesProps,
  LoadingMessagesStyle,
  LoadingMessagesClasses,
} from '../LoadingMessages';
import SystemChatBubble from '../SystemChatBubble';
import classnames from 'classnames';
import chatStyles, { ChatFeedStyles } from './styles';
import defaultClasses, { ChatFeedClasses } from './classes';

export * from './classes';
export * from './styles';

// Model for ChatFeed props.

export interface ChatFeedProps<T = string> {
  // Structural props
  className?: string;

  // Functional props
  messages: Message<T>[];
  authors: Author[];
  yourAuthorId: number;
  hasOldMessages?: boolean;
  loadOldMessagesThreshold?: number;

  // Visual props
  bubblesCentered?: boolean;
  maxHeight?: string | number;
  minHeight?: string | number;

  // Switches
  showDateRow?: boolean;
  showRecipientAvatar?: boolean;
  showRecipientLastSeenMessage?: boolean;
  showIsTyping?: boolean;
  showLoadingMessages?: boolean;

  // Custom components
  customLoadingMessages?: (props: LoadingMessagesProps) => JSX.Element;
  customChatBubble?: (props: ChatBubbleProps<T>) => JSX.Element;
  customSystemChatBubble?: (props: ChatBubbleProps<T>) => JSX.Element;
  customAvatar?: (props: AvatarProps) => JSX.Element;
  customScrollArea?: (props: ChatScrollAreaProps) => JSX.Element;
  customChatMessagesContainer?: (
    props: ChatMessagesContainerProps
  ) => JSX.Element;
  customIsTyping?: (props: ChatScrollAreaProps) => JSX.Element;
  customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
  customMessageRender?: (props: MessageRenderProps<T>) => JSX.Element | string;
  customDateRow?: (props: DateRowProps) => JSX.Element;

  // Callbacks
  onLoadOldMessages?: () => Promise<void>;

  // Styles
  style?: React.CSSProperties;
  styles?: ChatFeedStyles;
  bubbleGroupStyles?: BubbleGroupStyles;
  chatBubbleStyles?: ChatBubbleStyles;
  chatScrollAreaStyles?: ChatScrollAreaStyles;
  chatMessagesContainerStyles?: ChatMessagesContainerStyles;
  avatarStyles?: AvatarStyles;
  lastSeenAvatarStyles?: LastSeenAvatarStyles;
  dateRowStyles?: DateRowStyles;
  loadingMessagesStyle?: LoadingMessagesStyle;
  isTypingStyles?: IsTypingStyles;
  chatFeedStyles?: ChatFeedStyles;

  // Classes
  classes?: ChatFeedClasses;
  chatBubbleClasses?: ChatBubbleClasses;
  bubbleGroupClasses?: BubbleGroupClasses;
  chatScrollAreaClasses?: ChatScrollAreaClasses;
  chatMessagesContainerClasses?: ChatMessagesContainerClasses;
  avatarClasses?: AvatarClasses;
  lastSeenAvatarClasses?: LastSeenAvatarClasses;
  dateRowClasses?: DateRowClasses;
  loadingMessagesClasses?: LoadingMessagesClasses;
  isTypingClasses?: IsTypingClasses;
  chatFeedClasses?: ChatFeedStyles;
}

export interface ChatFeedState {
  isLoadingMessages: boolean;
}

export interface ChatFeedApi {
  onMessageSend: () => void;
  scrollApi: ChatScrollAreaApi;
}

function DefaultChatBubbleFunc<T>(props: ChatBubbleProps<T>) {
  return <DefaultChatBubble<T> {...props} />;
}
function DefaultScrollAreaFunc(props: ChatScrollAreaProps) {
  return <ChatScrollArea {...props} />;
}
function DefaultMessageRenderFunc<T>(props: MessageRenderProps<T>) {
  return props.message && props.message.message;
}

export interface ChatFeedSnapshot {
  wasScrolledToBottom: boolean;
  scrollHeight: number;
  clientHeight: number;
}

// React component to render a complete chat feed
export class ChatFeed<T = string>
  extends React.PureComponent<ChatFeedProps<T>, ChatFeedState>
  implements ChatFeedApi {
  public static defaultProps: ChatFeedProps = {
    messages: [],
    authors: [],
    customChatBubble: DefaultChatBubbleFunc,
    customMessageRender: DefaultMessageRenderFunc,
    customAvatar: Avatar,
    customScrollArea: DefaultScrollAreaFunc,
    customChatMessagesContainer: ChatMessagesContainer,
    customLastSeenAvatar: LastSeenAvatar,
    customDateRow: DateRow,
    customLoadingMessages: LoadingMessages,
    yourAuthorId: 0,
    loadOldMessagesThreshold: 50,
    customSystemChatBubble: SystemChatBubble,
  };

  public scrollApi: ChatScrollAreaApi;

  constructor(props: ChatFeedProps<T>) {
    super(props);
    this.onLoadOldMessages = this.onLoadOldMessages.bind(this);
    this.apiRef = this.apiRef.bind(this);
    this.state = {
      isLoadingMessages: false,
    };
  }

  public onMessageSend() {
    this.scrollApi && this.scrollApi.scrollToBottom();
  }

  componentDidMount() {
    this.scrollApi && this.scrollApi.scrollToBottom();
  }

  getSnapshotBeforeUpdate(
    prevProps: ChatFeedProps<T>,
    prevState: ChatFeedState
  ) {
    const wasScrolledToBottom =
      this.scrollApi && this.scrollApi.scrolledToBottom();
    const scrollHeight = this.scrollApi && this.scrollApi.scrollHeight();
    const clientHeight = this.scrollApi && this.scrollApi.clientHeight();

    return {
      wasScrolledToBottom,
      scrollHeight,
      clientHeight,
    };
  }

  componentDidUpdate(
    prevProps: ChatFeedProps<T>,
    prevState: ChatFeedState,
    snapshot: ChatFeedSnapshot
  ) {
    if (
      this.props.messages.length !== prevProps.messages.length &&
      snapshot &&
      snapshot.wasScrolledToBottom
    ) {
      this.scrollApi.scrollToBottom();
    } else if (
      this.props.messages.length !== prevProps.messages.length &&
      snapshot &&
      prevState.isLoadingMessages
    ) {
      const scrollHeight = this.scrollApi && this.scrollApi.scrollHeight();
      this.scrollApi.scrollTo(scrollHeight - snapshot.scrollHeight);
    }
  }

  /**
   * Determines what type of message/messages to render.
   */
  renderMessages<T>(messages: Message<T>[]) {
    let { styles } = this.props;
    if (!styles) {
      styles = {};
    }
    const {
      chatBubbleStyles,
      chatBubbleClasses,
      dateRowStyles,
      dateRowClasses,
      avatarStyles,
      avatarClasses,
      lastSeenAvatarStyles,
      lastSeenAvatarClasses,
      bubbleGroupStyles,
      bubbleGroupClasses,
    } = this.props;
    const { customChatBubble, showRecipientAvatar } = this.props;

    // First group by days
    const groups = groupBy(
      messages,
      (item) => item.createdOn && item.createdOn.toDateString()
    );
    let messageNodes: JSX.Element[] = [];
    let jsxKey = 0;
    Object.keys(groups).forEach((key) => {
      let group = [];
      const messagesGroup = groups[key];
      if (
        messagesGroup[0] &&
        messagesGroup[0].createdOn &&
        this.props.showDateRow
      ) {
        messageNodes.push(
          <this.props.customDateRow
            key={key}
            date={messagesGroup[0].createdOn}
            styles={dateRowStyles}
            classes={dateRowClasses}
          />
        );
      }
      messageNodes = messageNodes.concat(
        messagesGroup.map((message, index) => {
          group.push(message);
          // Find diff in message type or no more messages
          if (
            !messagesGroup[index + 1] ||
            messagesGroup[index + 1].authorId !== message.authorId
          ) {
            const messageGroup = group;
            const author =
              this.props.authors &&
              this.props.authors.filter((a) => a.id === message.authorId)[0];
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
                chatBubbleStyles={chatBubbleStyles}
                chatBubbleClasses={chatBubbleClasses}
                avatarStyles={avatarStyles}
                avatarClasses={avatarClasses}
                lastSeenAvatarStyles={lastSeenAvatarStyles}
                lastSeenAvatarClasses={lastSeenAvatarClasses}
                showRecipientLastSeenMessage={
                  this.props.showRecipientLastSeenMessage
                }
                customAvatar={this.props.customAvatar}
                customLastSeenAvatar={this.props.customLastSeenAvatar}
                customMessageRender={this.props.customMessageRender}
                customSystemChatBubble={this.props.customSystemChatBubble}
                classes={bubbleGroupClasses}
                styles={bubbleGroupStyles}
              />
            );
          }
          return null;
        })
      );
    });
    return messageNodes;
  }

  renderIsTyping() {
    let { styles } = this.props;
    if (!styles) {
      styles = {};
    }
    const { isTypingStyles, isTypingClasses } = this.props;
    const typingAuthors =
      this.props.authors &&
      this.props.authors.filter(
        (a) => a.isTyping && a.id !== this.props.yourAuthorId
      );
    if (!typingAuthors || typingAuthors.length === 0) {
      return null;
    }
    return (
      <IsTyping
        typingAuthors={typingAuthors}
        styles={isTypingStyles}
        classes={isTypingClasses}
      />
    );
  }

  apiRef(e: ChatScrollAreaApi) {
    if (!this.scrollApi) {
      e.scrollToBottom();
    }
    this.scrollApi = e;
  }

  /**
   * render : renders our chat feed
   */
  render() {
    let { styles, classes } = this.props;
    if (!styles) {
      styles = {};
    }
    if (!classes) {
      classes = {};
    }
    const {
      loadingMessagesStyle,
      chatFeedStyles,
      chatScrollAreaStyles,
      loadingMessagesClasses,
      chatScrollAreaClasses,
    } = this.props;

    return (
      <div
        className={classnames(
          defaultClasses.chatPanel,
          this.props.className,
          classes?.chatPanel
        )}
        style={{
          ...chatStyles.chatPanel,
          ...(chatFeedStyles && chatFeedStyles.chatPanel),
          ...this.props.style,
        }}
      >
        <this.props.customScrollArea
          minHeight={this.props.minHeight}
          maxHeight={this.props.maxHeight}
          apiRef={this.apiRef}
          loadOldMessagesThreshold={this.props.loadOldMessagesThreshold}
          onLoadOldMessages={this.onLoadOldMessages}
          styles={chatScrollAreaStyles}
          classes={chatScrollAreaClasses}
        >
          <this.props.customChatMessagesContainer
            classes={this.props.chatMessagesContainerClasses}
            styles={this.props.chatMessagesContainerStyles}
            showIsTyping={this.props.showIsTyping}
            showRecipientAvatar={this.props.showRecipientAvatar}
            showRecipientLastSeenMessage={
              this.props.showRecipientLastSeenMessage
            }
          >
            {
              <this.props.customLoadingMessages
                isVisible={
                  this.props.showLoadingMessages || this.state.isLoadingMessages
                }
                styles={loadingMessagesStyle}
                classes={loadingMessagesClasses}
              />
            }
            {this.renderMessages<T>(this.props.messages)}
            {this.props.showIsTyping && this.renderIsTyping()}
          </this.props.customChatMessagesContainer>
        </this.props.customScrollArea>
      </div>
    );
  }

  private onLoadOldMessages() {
    if (!this.state.isLoadingMessages && this.props.hasOldMessages) {
      return new Promise<void>((resolve) => {
        this.setState(
          {
            isLoadingMessages: true,
          },
          () => resolve()
        );
      })
        .then(async () => {
          if (this.props.onLoadOldMessages) {
            await this.props.onLoadOldMessages();
          }
        })
        .then(async () => {
          await new Promise<void>((resolve) => {
            this.setState(
              {
                isLoadingMessages: false,
              },
              () => {
                if (this.scrollApi.scrolledToLoadThreshold()) {
                  this.scrollApi.scrollTo(
                    this.props.loadOldMessagesThreshold + 1
                  );
                }
                resolve();
              }
            );
          });
        });
    }
  }
}
