import * as React from 'react';
import { Author } from '../Author';
import classnames from 'classnames';
import defaultStyles, { AvatarStyles } from './styles';
import defaultClasses, { AvatarClasses } from './classes';

export * from './classes';
export * from './styles';

export interface AvatarProps {
  author: Author;
  styles?: AvatarStyles;
  classes?: AvatarClasses;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const { author, classes, styles } = props;
  return (
    author && (
      <div
        style={{
          ...defaultStyles.container,
          ...styles?.container,
        }}
        title={author.name}
        className={classnames(defaultClasses.container, classes?.container)}
      >
        <span
          style={{ ...styles?.text, ...(props.styles && props.styles?.text) }}
          className={classnames(defaultClasses.text, classes?.text)}
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
