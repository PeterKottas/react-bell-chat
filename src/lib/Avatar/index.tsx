import * as React from 'react';
import { Author } from '../Author';

export interface AvatarProps {
  author: Author;
  containerStyle?: React.CSSProperties;

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
    color: 'white',
    backgroundColor: 'rgb(153, 153, 153)',
    borderRadius: 20,
    textAlign: 'center',
    borderTopRightRadius: 5
  } as React.CSSProperties
};

const Avatar: React.SFC<AvatarProps> = props => props.author && (
  <div
    style={{
      ...styles.container,
      ...props.containerStyle
    }}
    title={props.author.name}
    className="react-bell-chat__avatar"
  >
    <span style={{ pointerEvents: 'none' }}>{
      props.author.avatarName ?
        props.author.avatarName
        :
        props.author.name.split(' ').map(part => part[0]).join('').toUpperCase().substr(0, 3)}
    </span>
  </div>
);

export default Avatar;
