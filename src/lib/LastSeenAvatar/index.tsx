import * as React from 'react';
import { Author } from '../Author';

export interface LastSeenAvatarProps {
  author: Author;
  containerStyle?: React.CSSProperties;
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
    position: 'relative'
  } as React.CSSProperties
};

const LastSeenAvatar: React.SFC<LastSeenAvatarProps> = props => props.author && (
  <div
    style={{
      ...styles.container,
      ...props.containerStyle
    }}
    className="react-bell-chat__last-seen-avatar"
  >
    <span style={{pointerEvents: 'none'}}>{props.author.name[0].toUpperCase()}</span>
  </div>
);

export default LastSeenAvatar;
