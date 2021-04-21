export interface IsTypingStyles {
  container?: React.CSSProperties;
}

const styles: IsTypingStyles = {
  container: {
    position: 'absolute',
    bottom: 2,
    left: 0,
    right: 0,
    color: 'rgb(204, 204, 204)',
    textAlign: 'center',
  } as React.CSSProperties,
};

export { styles as defaultIsTypingStyles };
