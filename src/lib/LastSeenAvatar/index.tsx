import * as React from 'react';
import { Author } from '../Author';
import classnames from 'classnames';

export interface LastSeenAvatarProps {
  author: Author;
  styles?: LastSeenAvatarStyles;
  classes?: LastSeenAvatarClasses;
  style?: React.CSSProperties;
  className?: string;
}

export interface LastSeenAvatarClasses {
  container?: string;
  text?: string;
}

export interface LastSeenAvatarStyles {
  container?: React.CSSProperties;
  text?: React.CSSProperties;
}

const lastSeenAvatarStyles = {
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
  } as React.CSSProperties,
  text: {
    pointerEvents: 'none'
  } as React.CSSProperties
};

const LastSeenAvatar: React.SFC<LastSeenAvatarProps> = props => {
  let { styles, classes } = props;
  if (!styles) {
    styles = {};
  }
  if (!classes) {
    classes = {};
  }
  const { container, text } = styles;
  return (
    props.author && (
      <div
        style={{
          ...lastSeenAvatarStyles.container,
          ...container,
          ...props.style
        }}
        className={classnames(
          'react-bell-chat__last-seen-avatar',
          props.className,
          classes.container
        )}
      >
        <span
          style={{ ...lastSeenAvatarStyles.text, ...text }}
          className={classnames(
            'react-bell-chat__last-seen-avatar__text',
            classes.text
          )}
        >
          {props.author.lastSeenAvatarName
            ? props.author.lastSeenAvatarName
            : props.author.name[0].toUpperCase()}
        </span>
      </div>
    )
  );
};

export default LastSeenAvatar;
