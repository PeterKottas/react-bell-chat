export interface AvatarStyles {
  container?: React.CSSProperties;
  text?: React.CSSProperties;
}

const styles = {
  container: {
    position: 'absolute',
    left: -50,
    top: 0,
    width: 40,
    height: 40,
    lineHeight: '40px',
    fontWeight: 400,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    textAlign: 'center',
    borderTopRightRadius: 5,
  } as React.CSSProperties,
  text: {
    pointerEvents: 'none',
  } as React.CSSProperties,
};

export { styles as defaultAvatarStyles };
