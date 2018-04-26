import * as React from 'react';
import { render } from 'react-dom';
import { ChatFeed, ChatBubble, BubbleGroup, Message, Author } from '../lib';

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

const users = {
  0: 'You',
  1: 'Mark',
  2: 'Evan',
};

const customBubble = props => (
  <div>
    <p>{`${props.message.senderName} ${props.message.id ? 'says' : 'said'}: ${
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
}

class Chat extends React.Component<ChatProps, ChatState> {
  constructor(props: ChatProps) {
    super(props);
    this.state = {
      authors: [
        {
          id: 0,
          name: 'You'
        },
        {
          id: 1,
          name: 'Mark'
        },
        {
          id: 2,
          name: 'Evan'
        }
      ],
      messages: [
        {
          authorId: 1,
          message: 'Hey guys!!',
        },
        {
          authorId: 2,
          message: 'Hey! Evan here. react-chat-ui is pretty dooope.',
        },
      ],
      useCustomBubble: false,
      currentUser: 0,
      messageText: ''
    };
  }

  onPress(user) {
    this.setState({ currentUser: user });
  }

  onMessageSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.pushMessage(this.state.currentUser, this.state.messageText);
    this.setState({ messageText: '' });
    return true;
  }

  pushMessage(recipient, message) {
    const newMessage = {
      authorId: recipient,
      message,
    };
    const messages = this.state.messages.concat(newMessage);
    this.setState({ messages });
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
            selfAuthorId={0}
            authors={this.state.authors}
            chatBubble={this.state.useCustomBubble && customBubble}
            maxHeight={250}
            messages={this.state.messages} // Boolean: list of message objects
            showAvatar
          />

          <form onSubmit={e => this.onMessageSubmit(e)}>
            <input
              placeholder="Type a message..."
              className="message-input"
            />
          </form>

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button
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
            style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}
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
          </div>
        </div>
        <h2 className="text-center">There are Bubbles!</h2>
        <ChatBubble
          selfAuthorId={0}
          message={{ authorId: 1, message: 'I float to the left!' }}
        />
        <ChatBubble
          selfAuthorId={0}
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
          selfAuthorId={0}
          author={this.state.authors[1]}
          showAvatar={true}
        />
        <ChatBubble
          selfAuthorId={0}
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
          selfAuthorId={0}
          author={this.state.authors[0]}
          showAvatar={true}
        />
      </div>
    );
  }
}

render(<Chat />, document.getElementById('chat-ui'));
