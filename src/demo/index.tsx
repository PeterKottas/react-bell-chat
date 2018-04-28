import * as React from 'react';
import { render } from 'react-dom';
import { ChatFeed, ChatBubble, BubbleGroup, Message, Author, ChatBubbleProps } from '../lib';

const styles: { [key: string]: React.CSSProperties } = {
  button: {
    backgroundColor: '#fff',
    borderColor: '#1D2129',
    borderStyle: 'solid',
    borderRadius: 20,
    borderWidth: 2,
    color: '#1D2129',
    fontSize: 18,
    fontWeight: 300,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  selected: {
    color: '#fff',
    backgroundColor: '#0084FF',
    borderColor: '#0084FF',
  },
};

const customBubble: React.SFC<ChatBubbleProps>= props => (
  <div>
    <p>{`${props.author && props.author.name} ${props.message.authorId !== props.yourAuthorId ? 'says' : 'said'}: ${
      props.message.message
      }`}</p>
  </div>
);

interface ChatProps {

}

interface ChatState {
  authors: Author[];
  messages: Message[];
  useCustomBubble: boolean;
  currentUser: number;
  messageText: string;
  simulateTyping: boolean;
}

class Chat extends React.Component<ChatProps, ChatState> {
  private onMessageSendRef: () => void;
  private firstAuthorTimer: number;
  private secondAuthorTimer: number;

  constructor(props: ChatProps) {
    super(props);
    this.state = {
      authors: [
        {
          id: 0,
          name: 'You',
        },
        {
          id: 1,
          name: 'Mark',
          isTyping: true,
          lastSeenMessageId: 7,
        },
        {
          id: 2,
          name: 'Evan',
          isTyping: true,
          lastSeenMessageId: 7,
        }
      ],
      messages: [
        {
          id: 0,
          authorId: 1,
          message: 'Hey guys!!',
          createdOn: new Date(2018, 4, 27, 18, 32, 24)
        },
        {
          id: 1,
          authorId: 2,
          message: 'Hey! Evan here. react-chat-ui is pretty dooope.',
          createdOn: new Date(2018, 4, 28, 18, 12, 24)
        },
        {
          id: 2,
          authorId: 2,
          message: 'Rly is.',
          createdOn: new Date(2018, 4, 28, 18, 13, 24)
        },
        {
          id: 3,
          authorId: 2,
          message: 'Long group.',
          createdOn: new Date(2018, 4, 28, 18, 13, 24)
        },
        {
          id: 4,
          authorId: 0,
          message: 'My message.',
          createdOn: new Date(2018, 4, 29, 19, 32, 24)
        },
        {
          id: 5,
          authorId: 0,
          message: 'One more.',
          createdOn: new Date(2018, 4, 29, 19, 33, 24)
        },
        {
          id: 6,
          authorId: 2,
          message: 'One more group to see the scroll.',
          createdOn: new Date(2018, 4, 29, 19, 35, 24)
        },
        {
          id: 7,
          authorId: 2,
          message: 'I said group.',
          createdOn: new Date(2018, 4, 29, 19, 35, 24)
        }
      ],
      useCustomBubble: false,
      currentUser: 0,
      messageText: '',
      simulateTyping: false
    };
  }

  onPress(user) {
    this.setState({ currentUser: user });
  }

  onMessageSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newMessage = {
      authorId: this.state.currentUser,
      message: this.state.messageText,
    };
    const messages = this.state.messages.concat(newMessage);
    this.setState({ messageText: '', messages }, () => this.onMessageSendRef && this.onMessageSendRef());
    return true;
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">react-chat-ui</h1>
        <p className="text-center">
          <a
            href="https://github.com/brandonmowat/react-chat-ui"
            target="_blank"
          >
            Github
          </a>
        </p>
        <div className="install">
          <code>npm i -S react-chat-ui</code>
        </div>
        <div className="chatfeed-wrapper">
          <ChatFeed
            yourAuthorId={0}
            authors={this.state.authors}
            customChatBubble={this.state.useCustomBubble && customBubble}
            maxHeight={350}
            messages={this.state.messages} // Boolean: list of message objects
            showRecipientAvatar
            onMessageSendRef={onMessageSendRef => this.onMessageSendRef = onMessageSendRef}
            showIsTyping={true}
            showRecipientLastSeenMessage={true}
          />

          <form onSubmit={e => this.onMessageSubmit(e)}>
            <input
              placeholder="Type a message..."
              className="message-input"
              value={this.state.messageText}
              onChange={e => this.setState({ messageText: e.target.value })}
            />
          </form>

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button
              role="button"
              style={{
                ...styles.button,
                ...(this.state.currentUser === 0 ? styles.selected : {}),
              }}
              onClick={() => this.onPress(0)}
            >
              You
            </button>
            <button
              style={{
                ...styles.button,
                ...(this.state.currentUser === 1 ? styles.selected : {}),
              }}
              onClick={() => this.onPress(1)}
            >
              Mark
            </button>
            <button
              style={{
                ...styles.button,
                ...(this.state.currentUser === 2 ? styles.selected : {}),
              }}
              onClick={() => this.onPress(2)}
            >
              Evan
            </button>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'space-around', marginTop: 10 }}
          >
            <button
              style={{
                ...styles.button,
                ...(this.state.useCustomBubble ? styles.selected : {}),
              }}
              onClick={() =>
                this.setState({ useCustomBubble: !this.state.useCustomBubble })
              }
            >
              Custom Bubbles
            </button>
            <button
              style={{
                ...styles.button,
                ...(this.state.simulateTyping ? styles.selected : {}),
              }}
              onClick={() => {
                if (this.state.simulateTyping) {
                  clearInterval(this.firstAuthorTimer);
                  clearInterval(this.secondAuthorTimer);
                } else {
                  this.firstAuthorTimer = window.setInterval(() => this.setState({ authors: this.state.authors.slice(0).map((a, i) => i === 1 ? a : { ...a, isTyping: !a.isTyping }) }), 2000);
                  this.secondAuthorTimer = window.setInterval(() => this.setState({ authors: this.state.authors.slice(0).map((a, i) => i === 2 ? a : { ...a, isTyping: !a.isTyping }) }), 3200);
                }
                this.setState({ simulateTyping: !this.state.simulateTyping });
              }}
            >
              Simulate typing
            </button>
          </div>
        </div>
        <h2 className="text-center">There are Bubbles!</h2>
        <ChatBubble
          yourAuthorId={0}
          message={{ authorId: 1, message: 'I float to the left!' }}
        />
        <ChatBubble
          yourAuthorId={0}
          message={{ authorId: 0, message: 'I float to the right!' }}
        />

        <h2 className="text-center">And we have Bubble Groups!</h2>
        <BubbleGroup
          messages={[
            { authorId: 1, message: 'Hey!' },
            { authorId: 1, message: 'I forgot to mention...' },
            {
              authorId: 1,
              message:
                "Oh no, I forgot... I think I was going to say I'm a BubbleGroup",
            },
          ]}
          yourAuthorId={0}
          author={this.state.authors[1]}
        />
        <ChatBubble
          yourAuthorId={0}
          message={{ authorId: 2, message: "I 'm a single ChatBubble!" }}
        />
        <BubbleGroup
          messages={[
            { authorId: 0, message: 'How could you forget already?!' },
            {
              authorId: 0,
              message: "Oh well. I'm a BubbleGroup as well",
            },
          ]}
          yourAuthorId={0}
          author={this.state.authors[0]}
        />
      </div>
    );
  }
}

render(<Chat />, document.getElementById('chat-ui'));
