import * as React from 'react';
import {
  ChatFeed,
  Message,
  Author,
  ChatBubbleProps,
  IsTypingProps,
  BubbleGroup,
  Avatar,
  LastSeenAvatar,
  ChatBubble,
} from '../../lib';
import { getGravatarUrl } from '../utils/getGravatarUrl';
import { useDebouncedCallback } from 'use-debounce';
import {
  avatarStyles,
  chatBubbleStyles,
  customBubble,
  lastSeenAvatarStyles,
  loadingChatBubbleClasses,
  messages,
  style,
  styles,
} from '../common';

const customIsTypingFactory: (props: {
  bubble: React.FC<ChatBubbleProps<string>>;
  useCustomStyles: boolean;
  showRecipientAvatar: boolean;
}) => React.FC<IsTypingProps<string>> =
  ({ bubble, useCustomStyles }) =>
  (props) =>
    props.typingAuthors?.length > 0 && (
      <>
        {props.typingAuthors.map((a) => (
          <BubbleGroup<string>
            key={a.id}
            yourAuthorId={0}
            author={a}
            messages={
              a.isTypingMessage
                ? [
                    {
                      message: a.isTypingMessage + '...',
                      authorId: a.id,
                    } as Message<string>,
                  ]
                : ([messages.find((m) => m.authorId === a.id)].filter(
                    (a) => a
                  ) as Message<string>[])
            }
            chatBubbleClasses={
              a.isTypingMessage ? undefined : loadingChatBubbleClasses
            }
            CustomChatBubble={bubble ?? ChatBubble}
            CustomAvatar={Avatar}
            CustomLastSeenAvatar={LastSeenAvatar}
            showRecipientAvatar={true}
            chatBubbleStyles={useCustomStyles ? chatBubbleStyles : undefined}
            avatarStyles={useCustomStyles ? avatarStyles : undefined}
          />
        ))}
      </>
    );

interface ChatState {
  authors: Author<string>[];
  messages: Message<string>[];
  useCustomBubble: boolean;
  currentUser: number;
  messageText: string;
  simulateTyping: boolean;
  showAvatar: boolean;
  showLastSeen: boolean;
  showDateRow: boolean;
  showIsTyping: boolean;
  showLoadingMessages: boolean;
  hasOldMessages: boolean;
  firstAuthorTimer?: number;
  secondAuthorTimer?: number;
  useCustomStyles: boolean;
  useAvatarBg: boolean;
  useCustomIsTyping: boolean;
  showMsgProgress: boolean;
}

function useClickHandler<T = ChatState>(
  propertyName: keyof T,
  setState: React.Dispatch<React.SetStateAction<T>>
) {
  const handler = React.useCallback(() => {
    setState((t) => ({ ...t, [propertyName]: !t[propertyName] }));
  }, [propertyName]);
  return handler;
}

const Standard: React.FC = () => {
  const chat: React.Ref<ChatFeed<string>> = React.useRef(null);

  const [
    {
      messageText,
      authors,
      currentUser,
      firstAuthorTimer,
      hasOldMessages,
      messages,
      secondAuthorTimer,
      showAvatar,
      showDateRow,
      showIsTyping,
      showLastSeen,
      showLoadingMessages,
      simulateTyping,
      useCustomBubble,
      useCustomStyles,
      useAvatarBg,
      useCustomIsTyping,
      showMsgProgress,
    },
    setState,
  ] = React.useState<ChatState>({
    authors: [
      {
        id: 0,
        name: 'You',
        bgImageUrl: getGravatarUrl(0),
      },
      {
        id: 1,
        name: 'Mark',
        isTyping: false,
        lastSeenMessageId: 7,
        bgImageUrl: getGravatarUrl(1),
      },
      {
        id: 2,
        name: 'Evan',
        isTyping: false,
        lastSeenMessageId: 7,
        bgImageUrl: getGravatarUrl(2),
      },
    ],
    messages: [
      {
        id: 0,
        authorId: 1,
        message: 'Hey guys!!',
        createdOn: new Date(2018, 2, 27, 18, 32, 24),
        isSend: true,
      },
      {
        id: 1,
        authorId: 2,
        message: 'Hey! Evan here. react-bell-chat is pretty dooope.',
        createdOn: new Date(2018, 2, 28, 18, 12, 24),
        isSend: true,
      },
      {
        id: 2,
        authorId: 2,
        message: 'Rly is.',
        createdOn: new Date(2018, 2, 28, 18, 13, 24),
        isSend: true,
      },
      {
        id: 3,
        authorId: 2,
        message: 'Long group.',
        createdOn: new Date(2018, 2, 28, 18, 13, 24),
        isSend: true,
      },
      {
        id: 4,
        authorId: 0,
        message: 'My message.',
        createdOn: new Date(2018, 2, 29, 19, 32, 24),
        isSend: true,
      },
      {
        id: 5,
        authorId: 0,
        message: 'One more.',
        createdOn: new Date(2018, 2, 29, 19, 33, 24),
        isSend: true,
      },
      {
        id: 6,
        authorId: 2,
        message: 'One more group to see the scroll.',
        createdOn: new Date(2018, 2, 29, 19, 35, 24),
        isSend: true,
      },
      {
        id: 7,
        authorId: 2,
        message: 'I said group.',
        createdOn: new Date(2018, 2, 29, 19, 35, 24),
        isSend: true,
      },
    ],
    useCustomBubble: false,
    currentUser: 0,
    messageText: '',
    simulateTyping: false,
    showAvatar: true,
    showDateRow: true,
    showLastSeen: true,
    showIsTyping: true,
    showLoadingMessages: true,
    hasOldMessages: true,
    firstAuthorTimer: undefined,
    secondAuthorTimer: undefined,
    useCustomStyles: true,
    useAvatarBg: true,
    useCustomIsTyping: true,
    showMsgProgress: false,
  });

  const onPress = React.useCallback((user: number) => {
    setState((prev) => ({ ...prev, currentUser: user }));
  }, []);

  const handleIsTyping = React.useCallback((authorId: number) => {
    setState((prev) => ({
      ...prev,
      authors: prev.authors
        .slice(0)
        .map((a, i) => (i === authorId ? a : { ...a, isTyping: !a.isTyping })),
    }));
  }, []);

  const handleIsCurrentTyping = React.useCallback(() => {
    if (currentUser !== 0) {
      setState((prev) => ({
        ...prev,
        authors: prev.authors
          .slice(0)
          .map((a, i) =>
            i === currentUser ? a : { ...a, isTyping: !a.isTyping }
          ),
      }));
    }
  }, [currentUser]);

  const handleIsTypingDebounced = React.useCallback(
    useDebouncedCallback(handleIsCurrentTyping, 700, {
      leading: true,
      trailing: true,
    }),
    [handleIsCurrentTyping]
  );

  const onMessageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMessage = e.target.value;
      setState((prev) => ({
        ...prev,
        messageText: newMessage,
        authors: showMsgProgress
          ? prev.authors
              .slice(0)
              .map((a, i) =>
                i === currentUser ? a : { ...a, isTypingMessage: newMessage }
              )
          : prev.authors,
      }));
      handleIsTypingDebounced();
      handleIsTypingDebounced();
    },
    [handleIsTypingDebounced, currentUser, showMsgProgress]
  );

  const onLoadOldMessages = React.useCallback(
    () =>
      new Promise<void>((resolve) =>
        setTimeout(() => {
          setState((previousState) => ({
            ...previousState,
            messages: new Array(10)
              .fill(1)
              .map(
                (e, i) =>
                  ({
                    id: Number(new Date()),
                    createdOn: new Date(2017, 1, 1),
                    message: 'Old message ' + (i + 1).toString(),
                    authorId: Math.round(Math.random() + 1),
                  } as Message<string>)
              )
              .concat(previousState.messages),
          }));
          resolve();
        }, 1000)
      ),
    []
  );

  React.useEffect(() => {
    if (!showMsgProgress) {
      setState((prev) => ({
        ...prev,
        authors: prev.authors.map((a, i) => ({
          ...a,
          isTypingMessage: '',
        })),
      }));
    }
  }, [showMsgProgress]);
  React.useEffect(
    () => chat.current?.scrollApi?.scrollToBottom?.(),
    [showIsTyping]
  );
  React.useEffect(
    () =>
      setState((prev) => ({
        ...prev,
        authors: prev.authors.map((a, i) => ({
          ...a,
          bgImageUrl: useAvatarBg ? getGravatarUrl(i) : undefined,
        })),
      })),
    [useAvatarBg]
  );

  const onShowMsgProgressClick = useClickHandler('showMsgProgress', setState);
  const onUseCustomStylesClick = useClickHandler('useCustomStyles', setState);
  const onUseCustomBubblesClick = useClickHandler('useCustomBubble', setState);
  const onShowAvatarClick = useClickHandler('showAvatar', setState);
  const onShowDateRowClick = useClickHandler('showDateRow', setState);
  const onShowIsTypingClick = useClickHandler('showIsTyping', setState);
  const onShowLastSeenClick = useClickHandler('showLastSeen', setState);
  const onShowLoadingMessagesClick = useClickHandler(
    'showLoadingMessages',
    setState
  );
  const onUseCustomIsTypingClick = useClickHandler(
    'useCustomIsTyping',
    setState
  );
  const onUseAvatarBgClick = useClickHandler('useAvatarBg', setState);
  const onHasOldMessagesClick = useClickHandler('hasOldMessages', setState);

  const onSimulateMessageButtonClick = React.useCallback(() => {
    setState((prev) => ({
      ...prev,
      messages: prev.messages.concat([
        {
          id: Number(new Date()),
          createdOn: new Date(),
          message: 'Simulated message',
          authorId: Math.round(Math.random() + 1),
        },
      ]),
    }));
  }, []);

  const onSystemMessageClick = React.useCallback(() => {
    setState((prev) => ({
      ...prev,
      messages: prev.messages.concat([
        {
          id: Number(new Date()),
          createdOn: new Date(),
          message: 'System message',
        },
      ]),
    }));
  }, []);

  const onSimulateTypingButtonClick = React.useCallback(() => {
    if (simulateTyping) {
      clearInterval(firstAuthorTimer);
      clearInterval(secondAuthorTimer);
      setState((prev) => ({
        ...prev,
        simulateTyping: !simulateTyping,
        firstAuthorTimer: undefined,
        secondAuthorTimer: undefined,
      }));
    } else {
      handleIsTyping(1);
      const _firstAuthorTimer = window.setInterval(
        () => handleIsTyping(1),
        4000
      );
      handleIsTyping(2);
      const _secondAuthorTimer = window.setInterval(
        () => handleIsTyping(2),
        5200
      );
      setState((prev) => ({
        ...prev,
        firstAuthorTimer: _firstAuthorTimer,
        secondAuthorTimer: _secondAuthorTimer,
        simulateTyping: !simulateTyping,
      }));
    }
  }, [simulateTyping, handleIsTyping]);

  const onMessageSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (messageText !== '') {
        const id = Number(new Date());
        const newMessage: Message<string> = {
          id,
          authorId: currentUser,
          message: messageText,
          createdOn: new Date(),
          isSend: false,
        };
        setState((previousState) => ({
          ...previousState,
          messageText: '',
          messages: previousState.messages.concat(newMessage),
          authors: previousState.authors
            .slice(0)
            .map((a, i) =>
              i === currentUser ? a : { ...a, isTypingMessage: '' }
            ),
        }));
        chat.current?.onMessageSend?.();
        setTimeout(() => {
          setState((previousState) => ({
            ...previousState,
            messages: previousState.messages.map((m) =>
              m.id === id ? { ...m, isSend: true } : m
            ),
          }));
        }, 2000);
      }
      return true;
    },
    [messageText, currentUser]
  );

  const CustomIsTyping = React.useMemo(
    () =>
      useCustomIsTyping
        ? customIsTypingFactory({
            bubble: useCustomBubble ? customBubble : ChatBubble,
            showRecipientAvatar: showAvatar,
            useCustomStyles,
          })
        : undefined,
    [useCustomBubble, useCustomIsTyping, showAvatar, useCustomStyles]
  );

  return (
    <div className="chat-feed-wrapper chat-feed-wrapper--standard">
      <ChatFeed<string>
        ref={chat}
        yourAuthorId={0}
        messages={messages}
        authors={authors}
        style={useCustomStyles ? style : undefined}
        avatarStyles={useCustomStyles ? avatarStyles : undefined}
        lastSeenAvatarStyles={
          useCustomStyles ? lastSeenAvatarStyles : undefined
        }
        chatBubbleStyles={useCustomStyles ? chatBubbleStyles : undefined}
        maxHeight={350}
        CustomChatBubble={useCustomBubble ? customBubble : undefined}
        CustomIsTyping={CustomIsTyping}
        showRecipientAvatar={showAvatar}
        showIsTyping={showIsTyping}
        showRecipientLastSeenMessage={showLastSeen}
        showDateRow={showDateRow}
        showLoadingMessages={showLoadingMessages}
        hasOldMessages={hasOldMessages}
        onLoadOldMessages={onLoadOldMessages}
      />

      <form onSubmit={(e) => onMessageSubmit(e)}>
        <input
          placeholder="Type a message..."
          className="message-input"
          value={messageText}
          onChange={onMessageChange}
        />
      </form>
      <div className="label mt-0 bt-0">Authors:</div>
      <div className="buttons-wrapper">
        <button
          role="button"
          style={{
            ...styles.button,
            ...(currentUser === 0 ? styles.selected : {}),
          }}
          onClick={() => onPress(0)}
        >
          You
        </button>
        <button
          style={{
            ...styles.button,
            ...(currentUser === 1 ? styles.selected : {}),
          }}
          onClick={() => onPress(1)}
        >
          Mark
        </button>
        <button
          style={{
            ...styles.button,
            ...(currentUser === 2 ? styles.selected : {}),
          }}
          onClick={() => onPress(2)}
        >
          Evan
        </button>
      </div>
      <div className="label">Simulate input:</div>
      <div className="buttons-wrapper">
        <button
          style={{
            ...styles.button,
            ...(simulateTyping ? styles.selected : {}),
          }}
          onClick={onSimulateTypingButtonClick}
        >
          Simulate typing
        </button>
        <button
          style={{
            ...styles.button,
          }}
          onClick={onSimulateMessageButtonClick}
        >
          Simulate message
        </button>
        <button
          style={{
            ...styles.button,
          }}
          onClick={onSystemMessageClick}
        >
          System message
        </button>
      </div>
      <div className="label">Switches:</div>
      <div className="buttons-wrapper">
        <button
          style={{
            ...styles.button,
            ...(showMsgProgress ? styles.selected : {}),
          }}
          onClick={onShowMsgProgressClick}
        >
          Show msg progress
        </button>
        <button
          style={{
            ...styles.button,
            ...(showAvatar ? styles.selected : {}),
          }}
          onClick={onShowAvatarClick}
        >
          Show Avatars
        </button>
        <button
          style={{
            ...styles.button,
            ...(showIsTyping ? styles.selected : {}),
          }}
          onClick={onShowIsTypingClick}
        >
          Show typing indicator
        </button>
        <button
          style={{
            ...styles.button,
            ...(showLastSeen ? styles.selected : {}),
          }}
          onClick={onShowLastSeenClick}
        >
          Show last seen
        </button>
      </div>
      <div className="buttons-wrapper">
        <button
          style={{
            ...styles.button,
            ...(showDateRow ? styles.selected : {}),
          }}
          onClick={onShowDateRowClick}
        >
          Show date row
        </button>
        <button
          style={{
            ...styles.button,
            ...(showLoadingMessages ? styles.selected : {}),
          }}
          onClick={onShowLoadingMessagesClick}
        >
          Show Loading
        </button>
        <button
          style={{
            ...styles.button,
            ...(useAvatarBg ? styles.selected : {}),
          }}
          onClick={onUseAvatarBgClick}
        >
          Avatars images
        </button>
        <button
          style={{
            ...styles.button,
            ...(hasOldMessages ? styles.selected : {}),
          }}
          onClick={onHasOldMessagesClick}
        >
          Has more messages
        </button>
      </div>
      <div className="label">Customization:</div>
      <div className="buttons-wrapper">
        <button
          style={{
            ...styles.button,
            ...(useCustomStyles ? styles.selected : {}),
          }}
          onClick={onUseCustomStylesClick}
        >
          Styles
        </button>
        <button
          style={{
            ...styles.button,
            ...(useCustomBubble ? styles.selected : {}),
          }}
          onClick={onUseCustomBubblesClick}
        >
          Bubbles
        </button>
        <button
          style={{
            ...styles.button,
            ...(useCustomIsTyping ? styles.selected : {}),
          }}
          onClick={onUseCustomIsTypingClick}
        >
          Typing indicator
        </button>
      </div>
    </div>
  );
};

export default Standard;
