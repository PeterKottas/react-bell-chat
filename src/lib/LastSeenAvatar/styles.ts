export interface LastSeenAvatarStyles {
  container?: React.CSSProperties;
  containerMouseOver?: React.CSSProperties;
  text?: React.CSSProperties;
}

const styles = {
  container: {
    width: 24,
    height: 24,
    lineHeight: '24px',
    fontWeight: 400,
    fontSize: 10,
    borderRadius: 12,
    textAlign: 'center',
    transition: '0.3s all ease-in-out',
    display: 'block',
    position: 'relative',
  } as React.CSSProperties,
  text: {
    pointerEvents: 'none',
  } as React.CSSProperties,
};

export { styles as defaultLastSeenAvatarStyles };
