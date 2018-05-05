# :bell: react-bell-chat

A library of React components for building chat UIs.

# DEMO

[Live demo](https://peterkottas.github.io/react-bell-chat/)

[![NPM](https://nodei.co/npm/react-bell-chat.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-bell-chat/)

## Features

* Chat like scroll behaviour (eg. automatic scroll to bottom)
* Load more messages on scrolling to the top (with custom threshold)
* SUPER easy to use
* Customize anything
* Author avatars
* Last seen messages for each author
* Show if authors are typing or not
* Automatic date rows (when the following message is from a different date than the preceding one)

Keep in mind that this project is still in the early stages of development. If you encounter a bug or have a feature request, please create an issue.

## Installation

`npm install react-bell-chat --save`

OR

`yarn add react-bell-chat`

## Basic Usage

```typescript
import { ChatFeed } from 'react-bell-chat'

// Your code stuff...

render() {

  return (

    // Your JSX...

    <ChatFeed
      messages={this.state.messages} // Array: list of message objects
      authors={this.state.authors} // Array: list of authors
      yourAuthorId={2} // Number: Your author id (corresponds with id from list of authors)
    />

    // Your JSX...

  )

}
```

The bare minimum is to provide a list of messages and authors, check this out for an example:

```typescript
//...
this.state = {
  messages: [
    {
      id: 1,
      authorId: 1,
      message: "Sample message",
      createdOn: new Date(),
      isSend: true
    },
    {
      id: 2,
      authorId: 2,
      message: "Second sample message",
      createdOn: new Date(),
      isSend: false
    },
  ],
  authors: [
    {
      id: 1,
      name: 'Mark',
      isTyping: true,
      lastSeenMessageId: 1,
      bgImageUrl: undefined
    },
    {
      id: 2,
      name: 'Peter',
      isTyping: false,
      lastSeenMessageId: 2,
      bgImageUrl: undefined
    }
  ]
};
//...
```

Complete props for author:

typescript
```
export interface Author {
    id: number;
    name: string;
    avatarName?: string;
    lastSeenAvatarName?: string;
    isTyping?: boolean;
    lastSeenMessageId?: number;
    bgImageUrl?: number;
}
```

Complete props for message:

typescript
```
export interface Message {
  id?: number;
  authorId: number;
  message: string;
  createdOn?: Date;
  isSend?: boolean;
}
```

## API

Api is obtained as ref of the ChatFeed component. It's divided in 2 parts, feedApi and scrollApi. Ref gives you and object like this:
```typescript
interface ChatFeedApi {
  onMessageSend: () => void; // Should be called when user sends a message (this scrolls the component down)
  scrollApi: ChatScrollAreaApi;
}
```

Where scroll api is

```typescript
interface ChatScrollAreaApi {
  scrollToBottom: (behavior?: ScrollBehavior) => void;
  scrollTo: (top: number) => void;
  scrolledToBottom: () => boolean; // Check if we are scrolled to bottom
}
```

## Whole list of properties

```typescript
export interface ChatFeedProps {
  // Structural props
  className?: string;

  // Functional props
  messages: Message[];
  authors: Author[];
  yourAuthorId: number;
  hasOldMessages?: boolean;
  loadOldMessagesThreshold?: number;

  // Visual props
  bubblesCentered?: boolean;
  bubbleStyles?: ChatBubbleStyles;
  maxHeight?: string | number;
  minHeight?: string | number;

  // Switches
  showDateRow?: boolean;
  showRecipientAvatar?: boolean;
  showRecipientLastSeenMessage?: boolean;
  showIsTyping?: boolean;
  showLoadingMessages?: boolean;

  // Extra container styles for custom components
  showRecipientAvatarChatMessagesStyle?: React.CSSProperties;
  showRecipientLastSeenMessageChatMessagesStyle?: React.CSSProperties;
  showIsTypingChatMessagesStyle?: React.CSSProperties;

  // Custom components
  customLoadingMessages?: (props: LoadingMessagesProps) => JSX.Element;
  customChatBubble?: (props: ChatBubbleProps) => JSX.Element;
  customAvatar?: (props: AvatarProps) => JSX.Element;
  customScrollArea?: (props: ChatScrollAreaProps) => JSX.Element;
  customIsTyping?: (props: ChatScrollAreaProps) => JSX.Element;
  customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
  customDateRow?: (props: DateRowProps) => JSX.Element;

  // Callbacks
  onLoadOldMessages?: () => Promise<void>; // Make sure to return promise that only resolves after state is updated.

  ref?: (api: ChatFeedApi) => void;
}
```

## Custom components

Most of the UI is customizable via injecting custom components. These are pure components, the library injects props to them so that you can customize pretty much anything.

## FAQ

Q: My chat is scrolling up/down automatically everytime I use setState on parent component.

A: Make sure to provide const expresions for custom components. Not inline functions.

## Contributing 🔧

Contributions are always welcomed and encouraged.

## Development

```sh
npm run start
```

## Acknowledgments

This lib started as a fork from https://github.com/brandonmowat/react-chat-ui
