import * as React from 'react';
import { Author } from '../Author';

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

export interface IsTypingProps {
  typingAuthors: Author[];
  styles?: IsTypingStyles;
}

const IsTyping = (props: IsTypingProps) => {
  let { styles } = props;
  if (!styles) {
    styles = {};
  }
  const { container } = styles;

  return (
    props.typingAuthors &&
    props.typingAuthors.length > 0 && (
      <div
        className="react-bell-chat__is-typing__container"
        style={{ ...isTypingStyles.container, ...container }}
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
