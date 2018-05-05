import * as React from 'react';
import { render } from 'react-dom';
import { ChatFeed, Message, Author, ChatBubbleProps, ChatFeedApi } from '../lib';

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

const customBubble: React.SFC<ChatBubbleProps> = props => (
  <div>
    <p>{props.author && props.author.name + ' ' + (props.message.authorId !== props.yourAuthorId ? 'says' : 'said') + ': ' + props.message.message}</p>
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
  showAvatar: boolean;
  showLastSeen: boolean;
  showDateRow: boolean;
  showIsTyping: boolean;
  showLoadingMessages: boolean;
  hasOldMessages: boolean;
}

class Chat extends React.Component<ChatProps, ChatState> {
  private chat: ChatFeedApi;
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
          createdOn: new Date(2018, 2, 27, 18, 32, 24),
          isSend: true
        },
        {
          id: 1,
          authorId: 2,
          message: 'Hey! Evan here. react-bell-chat is pretty dooope.',
          createdOn: new Date(2018, 2, 28, 18, 12, 24),
          isSend: true
        },
        {
          id: 2,
          authorId: 2,
          message: 'Rly is.',
          createdOn: new Date(2018, 2, 28, 18, 13, 24),
          isSend: true
        },
        {
          id: 3,
          authorId: 2,
          message: 'Long group.',
          createdOn: new Date(2018, 2, 28, 18, 13, 24),
          isSend: true
        },
        {
          id: 4,
          authorId: 0,
          message: 'My message.',
          createdOn: new Date(2018, 2, 29, 19, 32, 24),
          isSend: true
        },
        {
          id: 5,
          authorId: 0,
          message: 'One more.',
          createdOn: new Date(2018, 2, 29, 19, 33, 24),
          isSend: true
        },
        {
          id: 6,
          authorId: 2,
          message: 'One more group to see the scroll.',
          createdOn: new Date(2018, 2, 29, 19, 35, 24),
          isSend: true
        },
        {
          id: 7,
          authorId: 2,
          message: 'I said group.',
          createdOn: new Date(2018, 2, 29, 19, 35, 24),
          isSend: true
        }
      ],
      useCustomBubble: false,
      currentUser: 0,
      messageText: '',
      simulateTyping: false,
      showAvatar: true,
      showDateRow: true,
      showLastSeen: true,
      showIsTyping: true,
      showLoadingMessages: false,
      hasOldMessages: true
    } as ChatState;
  }

  onPress(user: number) {
    this.setState({ currentUser: user });
  }

  onMessageSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (this.state.messageText !== '') {
      const id = Number(new Date());
      const newMessage: Message = {
        id,
        authorId: this.state.currentUser,
        message: this.state.messageText,
        createdOn: new Date(),
        isSend: false
      };
      this.setState(previousState => ({
        messageText: '',
        messages: previousState.messages.concat(newMessage)
      }), () => this.chat && this.chat.onMessageSend());
      setTimeout(() => {
        this.setState(previousState => ({ messages: previousState.messages.map(m => m.id === id ? { ...m, isSend: true } : m) }));
      }, 2000);
    }
    return true;
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">react-bell-chat</h1>
        <p className="text-center">
          <a
            href="https://github.com/PeterKottas/react-bell-chat"
            target="_blank"
          >
            Github
          </a>
        </p>
        <div className="install">
          <code>npm i -S react-bell-chat</code>
        </div>
        <div className="chatfeed-wrapper">
          <ChatFeed
            yourAuthorId={0}
            authors={this.state.authors}
            customChatBubble={this.state.useCustomBubble && customBubble}
            maxHeight={350}
            messages={this.state.messages}
            showRecipientAvatar={this.state.showAvatar}
            ref={e => this.chat = e}
            showIsTyping={this.state.showIsTyping}
            showRecipientLastSeenMessage={this.state.showLastSeen}
            showDateRow={this.state.showDateRow}
            showLoadingMessages={this.state.showLoadingMessages}
            // tslint:disable-next-line:no-console
            onLoadOldMessages={() => new Promise(resolve => setTimeout(() => {
              this.setState(previousState => ({
                messages: (new Array(10).fill(1)).map((e, i) => ({
                  id: Number(new Date()),
                  createdOn: new Date(2017, 1, 1),
                  message: 'Old message ' + (i + 1).toString(),
                  authorId: Math.round(Math.random() + 1)
                } as Message)).concat(previousState.messages)
              }), () => resolve());
            }, 1000))}
            hasOldMessages={this.state.hasOldMessages}
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
                  this.firstAuthorTimer = window.setInterval(() => this.setState({
                    authors: this.state.authors.slice(0).map((a, i) => i === 1 ? a : { ...a, isTyping: !a.isTyping })
                  }), 2000);
                  this.secondAuthorTimer = window.setInterval(() => this.setState({
                    authors: this.state.authors.slice(0).map((a, i) => i === 2 ? a : { ...a, isTyping: !a.isTyping })
                  }), 3200);
                }
                this.setState({ simulateTyping: !this.state.simulateTyping });
              }}
            >
              Simulate typing
            </button>
            <button
              style={{
                ...styles.button,
              }}
              onClick={() => {
                this.setState({
                  messages: this.state.messages.concat([{
                    id: Number(new Date()),
                    createdOn: new Date(),
                    message: 'Simulated message',
                    authorId: Math.round(Math.random() + 1)
                  }])
                });
              }}
            >
              Simulate message
            </button>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'space-around', marginTop: 10 }}
          >
            <button
              style={{
                ...styles.button,
                ...(this.state.showAvatar ? styles.selected : {}),
              }}
              onClick={() => this.setState({ showAvatar: !this.state.showAvatar })}
            >
              Show avatar
            </button>
            <button
              style={{
                ...styles.button,
                ...(this.state.showIsTyping ? styles.selected : {}),
              }}
              onClick={() => this.setState({ showIsTyping: !this.state.showIsTyping })}
            >
              Show typing
            </button>
            <button
              style={{
                ...styles.button,
                ...(this.state.showLastSeen ? styles.selected : {}),
              }}
              onClick={() => this.setState({ showLastSeen: !this.state.showLastSeen })}
            >
              Show last seen
            </button>
            <button
              style={{
                ...styles.button,
                ...(this.state.showDateRow ? styles.selected : {}),
              }}
              onClick={() => this.setState({ showDateRow: !this.state.showDateRow })}
            >
              Show date row
            </button>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'space-around', marginTop: 10 }}
          >
            <button
              style={{
                ...styles.button,
                ...(this.state.showLoadingMessages ? styles.selected : {}),
              }}
              onClick={() => this.setState({ showLoadingMessages: !this.state.showLoadingMessages })}
            >
              Show Loading
            </button>
            <button
              style={{
                ...styles.button,
                ...(this.state.hasOldMessages ? styles.selected : {}),
              }}
              onClick={() => this.setState({ hasOldMessages: !this.state.hasOldMessages })}
            >
              Has more messages
            </button>
          </div>
        </div>
      </div>
    );
  }
}

render(<Chat />, document.getElementById('chat-ui'));
