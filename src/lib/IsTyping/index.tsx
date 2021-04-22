import * as React from 'react';
import { Author } from '../Author';
import classnames from 'classnames';
import { IsTypingClasses, defaultIsTypingClasses } from './classes';
import { IsTypingStyles, defaultIsTypingStyles } from './styles';
import { typedMemo } from '../utils/typedMemo';
export * from './classes';
export * from './styles';

export interface IsTypingProps<T = string> {
  typingAuthors: Author<T>[];
  styles?: IsTypingStyles;
  classes?: IsTypingClasses;
}

function IsTyping<T = string>(props: IsTypingProps<T>) {
  let { styles, classes } = props;

  const style = React.useMemo(
    () => ({ ...defaultIsTypingStyles.container, ...styles?.container }),
    [styles?.container]
  );

  return (
    props.typingAuthors &&
    props.typingAuthors.length > 0 && (
      <div
        className={classnames(
          defaultIsTypingClasses.container,
          classes?.container
        )}
        style={style}
      >
        {props.typingAuthors
          .map((a) => a.name)
          .join(', ')
          .replace(/,(?!.*,)/gim, ' and') +
          (props.typingAuthors.length === 1 ? ' is ' : ' are ') +
          'typing'}
      </div>
    )
  );
}

const Memoized = typedMemo(IsTyping);

export { Memoized as IsTyping };
