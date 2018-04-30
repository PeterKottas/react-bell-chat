import * as React from 'react';

const styles = {
  containerStyles: {
    display: 'flex',
    marginBottom: 10
  } as React.CSSProperties,
  buttonStyles: {
    backgroundColor: '#fff',
    borderColor: '#1D2129',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 2,
    color: '#1D2129',
    fontSize: 16,
    fontWeight: 300,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    margin: 'auto'
  } as React.CSSProperties
};

export interface LoadMoreMessagesProps {
  containerStyles?: object;
  onClick?: () => void;
}

const LoadMoreMessages = (props: LoadMoreMessagesProps) => {
  return (
    <div className="react-chat-ui__load-more-messages" style={{ ...styles.containerStyles, ...props.containerStyles }}>
      <button className="react-chat-ui__load-more-messages__button" onClick={e => props.onClick && props.onClick()} style={styles.buttonStyles}>Load more</button>
    </div>
  );
};

export default LoadMoreMessages;
