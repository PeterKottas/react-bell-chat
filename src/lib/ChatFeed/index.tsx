// Copyright 2017 Brandon Mowat
// Written, developed, and designed by Brandon Mowat for the purpose of helping
// other developers make chat interfaces.

import * as React from 'react';
import {
  BubbleGroup as DefaultBubbleGroup,
  BubbleGroupClasses,
  BubbleGroupProps,
  BubbleGroupStyles,
} from '../BubbleGroup';
import {
  ChatBubble as DefaultChatBubble,
  ChatBubbleProps,
  MessageRenderProps,
} from '../ChatBubble';
import { Message } from '../Message';
import { Author } from '../Author';
import { ChatBubbleStyles, ChatBubbleClasses } from '../ChatBubble';
import {
  Avatar as DefaultAvatar,
  AvatarProps,
  AvatarStyles,
  AvatarClasses,
} from '../Avatar';
import {
  IsTyping as DefaultIsTyping,
  IsTypingStyles,
  IsTypingClasses,
  IsTypingProps,
} from '../IsTyping';
import {
  ChatScrollArea as DefaultChatScrollArea,
  ChatScrollAreaProps,
  ChatScrollAreaApi,
  ChatScrollAreaStyles,
  ChatScrollAreaClasses,
} from '../ChatScrollArea';
import {
  ChatMessagesContainer as DefaultChatMessagesContainer,
  ChatMessagesContainerProps,
  ChatMessagesContainerClasses,
  ChatMessagesContainerStyles,
} from '../ChatMessagesContainer';
import {
  LastSeenAvatar as DefaultLastSeenAvatar,
  LastSeenAvatarProps,
  LastSeenAvatarStyles,
  LastSeenAvatarClasses,
} from '../LastSeenAvatar';
import { groupBy } from '../utils/utils';
import {
  DateRow as DefaultDateRow,
  DateRowProps,
  DateRowStyles,
  DateRowClasses,
} from '../DateRow';
import {
  LoadingMessages as DefaultLoadingMessages,
  LoadingMessagesProps,
  LoadingMessagesStyle,
  LoadingMessagesClasses,
} from '../LoadingMessages';
import { SystemChatBubble as DefaultSystemChatBubble } from '../SystemChatBubble';
import classnames from 'classnames';
import { ChatFeedStyles, defaultChatFeedStyles } from './styles';
import { ChatFeedClasses, defaultChatFeedClasses } from './classes';
import { ComponentType } from '../utils/componentType';

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
  CustomLoadingMessages?: ComponentType<LoadingMessagesProps>;
  CustomChatBubble?: ComponentType<ChatBubbleProps<T>>;
  CustomBubbleGroup?: ComponentType<BubbleGroupProps<T>>;
  CustomSystemChatBubble?: ComponentType<ChatBubbleProps<T>>;
  CustomAvatar?: ComponentType<AvatarProps>;
  CustomScrollArea?: ComponentType<ChatScrollAreaProps>;
  CustomChatMessagesContainer?: ComponentType<ChatMessagesContainerProps>;
  CustomIsTyping?: ComponentType<IsTypingProps>;
  CustomLastSeenAvatar?: ComponentType<LastSeenAvatarProps>;
  CustomMessageRender?: ComponentType<MessageRenderProps<T>>;
  CustomDateRow?: ComponentType<DateRowProps>;

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
function DefaultMessageRenderFunc(props: MessageRenderProps<string>) {
  return (
    props.message && (
      <span className={props.className} style={props.style}>
        {props.message.message}
      </span>
    )
  );
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
    CustomChatBubble: DefaultChatBubble,
    CustomBubbleGroup: DefaultBubbleGroup,
    CustomMessageRender: DefaultMessageRenderFunc,
    CustomAvatar: DefaultAvatar,
    CustomScrollArea: DefaultChatScrollArea,
    CustomIsTyping: DefaultIsTyping,
    CustomChatMessagesContainer: DefaultChatMessagesContainer,
    CustomLastSeenAvatar: DefaultLastSeenAvatar,
    CustomDateRow: DefaultDateRow,
    CustomLoadingMessages: DefaultLoadingMessages,
    yourAuthorId: 0,
    loadOldMessagesThreshold: 50,
    CustomSystemChatBubble: DefaultSystemChatBubble,
  };

  public scrollApi: ChatScrollAreaApi;

  constructor(props: ChatFeedProps<T>) {
    super(props);
    this.renderMessages = this.renderMessages.bind(this);
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
      CustomChatBubble,
      showRecipientAvatar,
    } = this.props;

    // First group by days
    const groups = groupBy(
      messages,
      (item) => item.createdOn && item.createdOn.toDateString()
    );
    let messageNodes: React.ReactNode[] = [];
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
          <this.props.CustomDateRow
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
              <this.props.CustomBubbleGroup
                key={jsxKey}
                yourAuthorId={this.props.yourAuthorId}
                messages={messageGroup}
                author={author}
                authors={this.props.authors}
                showRecipientAvatar={showRecipientAvatar}
                CustomChatBubble={CustomChatBubble}
                chatBubbleStyles={chatBubbleStyles}
                chatBubbleClasses={chatBubbleClasses}
                avatarStyles={avatarStyles}
                avatarClasses={avatarClasses}
                lastSeenAvatarStyles={lastSeenAvatarStyles}
                lastSeenAvatarClasses={lastSeenAvatarClasses}
                showRecipientLastSeenMessage={
                  this.props.showRecipientLastSeenMessage
                }
                CustomAvatar={this.props.CustomAvatar}
                CustomLastSeenAvatar={this.props.CustomLastSeenAvatar}
                CustomMessageRender={this.props.CustomMessageRender}
                CustomSystemChatBubble={this.props.CustomSystemChatBubble}
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

  apiRef(e: ChatScrollAreaApi) {
    if (!this.scrollApi) {
      e.scrollToBottom();
    }
    this.scrollApi = e;
  }

  render() {
    let { styles, classes, isTypingStyles, isTypingClasses } = this.props;
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

    const typingAuthors =
      this.props.authors &&
      this.props.authors.filter(
        (a) => a.isTyping && a.id !== this.props.yourAuthorId
      );

    return (
      <div
        className={classnames(
          defaultChatFeedClasses.chatPanel,
          this.props.className,
          classes?.chatPanel
        )}
        style={{
          ...defaultChatFeedStyles.chatPanel,
          ...(chatFeedStyles && chatFeedStyles.chatPanel),
          ...this.props.style,
        }}
      >
        <this.props.CustomScrollArea
          minHeight={this.props.minHeight}
          maxHeight={this.props.maxHeight}
          apiRef={this.apiRef}
          loadOldMessagesThreshold={this.props.loadOldMessagesThreshold}
          onLoadOldMessages={this.onLoadOldMessages}
          styles={chatScrollAreaStyles}
          classes={chatScrollAreaClasses}
        >
          <this.props.CustomChatMessagesContainer
            classes={this.props.chatMessagesContainerClasses}
            styles={this.props.chatMessagesContainerStyles}
            showIsTyping={this.props.showIsTyping}
            showRecipientAvatar={this.props.showRecipientAvatar}
            showRecipientLastSeenMessage={
              this.props.showRecipientLastSeenMessage
            }
          >
            <this.props.CustomLoadingMessages
              key={-1}
              isVisible={
                this.props.showLoadingMessages && this.state.isLoadingMessages
              }
              styles={loadingMessagesStyle}
              classes={loadingMessagesClasses}
            />
            {this.renderMessages<T>(this.props.messages)}
            {this.props.showIsTyping && (
              <this.props.CustomIsTyping
                key={-2}
                typingAuthors={typingAuthors}
                styles={isTypingStyles}
                classes={isTypingClasses}
              />
            )}
          </this.props.CustomChatMessagesContainer>
        </this.props.CustomScrollArea>
      </div>
    );
  }

  private async onLoadOldMessages() {
    if (!this.state.isLoadingMessages && this.props.hasOldMessages) {
      await new Promise<void>((resolve) => {
        this.setState(
          {
            isLoadingMessages: true,
          },
          () => resolve()
        );
      });
      if (this.props.onLoadOldMessages) {
        await this.props.onLoadOldMessages();
      }
      await new Promise<void>((resolve) => {
        this.setState(
          {
            isLoadingMessages: false,
          },
          () => {
            if (this.scrollApi.scrolledToLoadThreshold()) {
              this.scrollApi.scrollTo(this.props.loadOldMessagesThreshold + 1);
            }
            resolve();
          }
        );
      });
    }
  }
}
