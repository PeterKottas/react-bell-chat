export interface LastSeenAvatarStyles {
  container?: React.CSSProperties;
  containerMouseOver?: React.CSSProperties;
  text?: React.CSSProperties;
}

const styles = {
  container: {
    width: 20,
    height: 20,
    lineHeight: '20px',
    fontWeight: 400,
    fontSize: 10,
    color: 'white',
    backgroundColor: 'rgb(153, 153, 153)',
    borderRadius: 10,
    textAlign: 'center',
    transition: '0.3s all ease-in-out',
    display: 'block',
    position: 'relative',
  } as React.CSSProperties,
  text: {
    pointerEvents: 'none',
  } as React.CSSProperties,
};

export { styles as DefaultLastSeenAvatarStyles };

export default styles;
