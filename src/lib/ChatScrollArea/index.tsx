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
  maxHeight?: string | number;
  minHeight?: string | number;
  children?: any;
  apiRef?: (api: ChatScrollAreaApi) => void;
}

export interface ChatScrollAreaApi {
  scrollToBottom: () => void;
}

export class ChatScrollArea extends React.Component<ChatScrollAreaProps> implements ChatScrollAreaApi {
  scrollContainer: HTMLDivElement;
  constructor(props: ChatScrollAreaProps) {
    super(props);
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
          ...(this.props.maxHeight !== undefined ? { maxHeight: this.props.maxHeight } : {}),
          ...(this.props.minHeight !== undefined ? { minHeight: this.props.minHeight } : {}),
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ChatScrollArea;
