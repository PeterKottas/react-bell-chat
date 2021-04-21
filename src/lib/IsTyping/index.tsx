import * as React from 'react';
import { Author } from '../Author';
import classnames from 'classnames';
import defaultClasses, { IsTypingClasses } from './classes';
import defaultStyles, { IsTypingStyles } from './styles';
export * from './classes';
export * from './styles';

export interface IsTypingProps {
  typingAuthors: Author[];
  styles?: IsTypingStyles;
  classes?: IsTypingClasses;
}

const IsTyping: React.FC<IsTypingProps> = (props) => {
  let { styles, classes } = props;

  const style = React.useMemo(
    () => ({ ...defaultStyles.container, ...styles?.container }),
    [styles?.container]
  );

  return (
    props.typingAuthors &&
    props.typingAuthors.length > 0 && (
      <div
        className={classnames(defaultClasses.container, classes?.container)}
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
};

export default React.memo(IsTyping);
