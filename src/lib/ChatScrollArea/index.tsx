import * as React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  chatHistory: {
    overflow: 'auto',
    padding: '0 10px',
    // flexDirection: 'column-reverse'
  }
};

export interface ChatScrollAreaProps {
  maxHeight?: string | number;
  minHeight?: string | number;
  children?: any;
  containerStyles?: React.CSSProperties;
  apiRef?: (api: ChatScrollAreaApi) => void;
}

export interface ChatScrollAreaApi {
  scrollToBottom: () => void;
  scrollTo: (top: number) => void;
}

export class ChatScrollArea extends React.Component<ChatScrollAreaProps> {
  scrollContainer: HTMLDivElement;
  constructor(props: ChatScrollAreaProps) {
    super(props);
  }

  public render() {
    return (
      <div
        ref={scrollContainer => {
          this.scrollContainer = scrollContainer;
          this.props.apiRef && this.props.apiRef({
            scrollToBottom: () => scrollContainer && scrollContainer.scrollTo({
              top: scrollContainer.scrollHeight
            }),
            scrollTo: top => scrollContainer && scrollContainer.scrollTo({
              top: top
            })
          });
        }}
        className="react-chat-ui__chat-history"
        style={{
          ...styles.chatHistory,
          ...(this.props.maxHeight !== undefined ? { maxHeight: this.props.maxHeight } : {}),
          ...(this.props.minHeight !== undefined ? { minHeight: this.props.minHeight } : {}),
          ...this.props.containerStyles
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ChatScrollArea;
