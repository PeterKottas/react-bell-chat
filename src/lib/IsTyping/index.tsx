import * as React from 'react';
import { Author } from '../Author';
import classnames from 'classnames';

const isTypingStyles: IsTypingStyles = {
  container: {
    position: 'absolute',
    bottom: 2,
    left: 0,
    right: 0,
    color: 'rgb(204, 204, 204)',
    textAlign: 'center'
  } as React.CSSProperties
};

export interface IsTypingStyles {
  container?: React.CSSProperties;
}

export interface IsTypingClasses {
  container?: string;
}

export interface IsTypingProps {
  typingAuthors: Author[];
  styles?: IsTypingStyles;
  style?: React.CSSProperties;
  className?: string;
  classes?: IsTypingClasses;
}

const IsTyping = (props: IsTypingProps) => {
  let { styles, classes } = props;
  if (!styles) {
    styles = {};
  }
  if (!classes) {
    classes = {};
  }
  const { container } = styles;

  return (
    props.typingAuthors &&
    props.typingAuthors.length > 0 && (
      <div
        className={classnames(
          'react-bell-chat__is-typing__container',
          props.className,
          classes.container
        )}
        style={{ ...isTypingStyles.container, ...container, ...props.style }}
      >
        {props.typingAuthors
          .map(a => a.name)
          .join(', ')
          .replace(/,(?!.*,)/gim, ' and') +
          (props.typingAuthors.length === 1 ? ' is ' : ' are ') +
          'typing'}
      </div>
    )
  );
};

export default IsTyping;
