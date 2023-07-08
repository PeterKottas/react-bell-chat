import * as React from 'react';
import { Author, ChatFeed, Message } from '../../lib';
import { getGravatarUrl } from '../utils/getGravatarUrl';
import {
  avatarStyles,
  chatBubbleStyles,
  lastSeenAvatarStyles,
  style,
} from '../common';

export interface MobileProps {
  children?: React.ReactNode;
}

interface ChatState {
  authors: Author<string>[];
  messages: Message<string>[];
  messageText: string;
}

const currentUser = 0;

function Mobile(props: MobileProps) {
  const [{ authors, messages, messageText }, setState] =
    React.useState<ChatState>({
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
      messageText: '',
    });
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
  const onMessageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMessage = e.target.value;
      setState((prev) => ({
        ...prev,
        messageText: newMessage,
      }));
    },
    []
  );
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
        }));
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
    [messageText]
  );
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <>
      <ChatFeed<string>
        yourAuthorId={0}
        messages={messages}
        authors={authors}
        showRecipientAvatar={true}
        showIsTyping={true}
        showRecipientLastSeenMessage={true}
        showDateRow={true}
        showLoadingMessages={true}
        hasOldMessages={true}
        onLoadOldMessages={onLoadOldMessages}
        style={style}
        avatarStyles={avatarStyles}
        lastSeenAvatarStyles={lastSeenAvatarStyles}
        chatBubbleStyles={chatBubbleStyles}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onMessageSubmit(e);
          inputRef.current?.focus();
        }}
      >
        <input
          type="search"
          placeholder="Type a message..."
          className="message-input"
          value={messageText}
          onChange={onMessageChange}
          ref={inputRef}
        />
        <button type="submit" className="message-submit">
          Send
        </button>
      </form>
    </>
  );
}

export default Mobile;
