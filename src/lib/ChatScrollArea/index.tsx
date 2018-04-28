import * as React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  chatHistory: {
    overflow: 'auto',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'column-reverse'
  }
};

export interface ChatScrollAreaProps {
  // scrollDown: () => void;
  maxHeight?: string | number;
  refScrollElement: (scrollElement: IChatScrollArea) => void;
}

export interface IChatScrollArea {
  scrollToBottom: () => void;
}

export class ChatScrollArea extends React.Component<ChatScrollAreaProps> implements IChatScrollArea {
  scrollContainer: HTMLDivElement;
  constructor(props: ChatScrollAreaProps) {
    super(props);
    //this.raf = 
  }

  public componentDidMount() {
    this.props.refScrollElement(this);
  }

  public componentWillUnmount() {
    this.props.refScrollElement(undefined);
  }

  public scrollToBottom() {
    if (this.scrollContainer) {
      this.scrollContainer.scrollTop = this.scrollContainer.scrollHeight;
    }
  }

  public render() {
    return (
      <div
        ref={scrollContainer => this.scrollContainer = scrollContainer}
        className="react-chat-ui__chat-history"
        style={{
          ...styles.chatHistory,
          maxHeight: this.props.maxHeight
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ChatScrollArea;
