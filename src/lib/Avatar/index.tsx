import * as React from 'react';
import { Author } from '../Author';
import classnames from 'classnames';
import { AvatarStyles, defaultAvatarStyles } from './styles';
import { AvatarClasses, defaultAvatarClasses } from './classes';

export * from './classes';
export * from './styles';

export interface AvatarProps {
  author: Author;
  styles?: AvatarStyles;
  classes?: AvatarClasses;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const { author, classes, styles } = props;
  const style = {
    ...defaultAvatarStyles.container,
    ...styles?.container,
    ...(author?.bgImageUrl
      ? ({
          backgroundImage: `url(${author?.bgImageUrl})`,
          backgroundSize: 'cover',
        } as React.CSSProperties)
      : {}),
  };
  return (
    author && (
      <div
        style={style}
        title={author.name}
        className={classnames(
          defaultAvatarClasses.container,
          classes?.container
        )}
      >
        <span
          style={{
            ...defaultAvatarStyles.text,
            ...styles?.text,
            ...props.styles?.text,
          }}
          className={classnames(defaultAvatarClasses.text, classes?.text)}
        >
          {author.bgImageUrl
            ? null
            : author.avatarName
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
const Memoized = React.memo(Avatar);
export { Memoized as Avatar };
