import * as React from 'react';
import { Author } from '../Author';
import classnames from 'classnames';

export interface AvatarStyles {
  container?: React.CSSProperties;
  text?: React.CSSProperties;
}

export interface AvatarClasses {
  container?: string;
  text?: string;
}

export interface AvatarProps {
  author: Author;
  className?: string;
  styles?: AvatarStyles;
  classes?: AvatarClasses;
  style?: React.CSSProperties;
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
    borderTopRightRadius: 5,
  } as React.CSSProperties,
  text: {
    pointerEvents: 'none',
  } as React.CSSProperties,
};

const Avatar: React.FC<AvatarProps> = (props) => {
  const { author, classes, className } = props;
  return (
    author && (
      <div
        style={{
          ...styles.container,
          ...(props.styles && props.styles.container),
          ...props.style,
        }}
        title={author.name}
        className={classnames(
          'react-bell-chat__avatar',
          classes && classes.container,
          className
        )}
      >
        <span
          style={{ ...styles.text, ...(props.styles && props.styles.text) }}
          className={classnames(
            'react-bell-chat__avatar__text',
            classes && classes.text
          )}
        >
          {author.avatarName
            ? author.avatarName
            : author.name
                .split(' ')
                .map((part) => part[0])
                .join('')
                .toUpperCase()
                .substr(0, 3)}
        </span>
      </div>
    )
  );
};

export default React.memo(Avatar);
