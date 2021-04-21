export interface ChatScrollAreaStyles {
  container?: React.CSSProperties;
}

const styles: ChatScrollAreaStyles = {
  container: {
    overflow: 'auto',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    // flexDirection: 'column-reverse'
  },
};

export { styles as DefaultChatScrollAreaStyles };

export default styles;
