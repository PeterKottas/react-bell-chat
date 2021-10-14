import * as React from 'react';
import { Author } from '../Author';
import classnames from 'classnames';
import { AvatarStyles, defaultAvatarStyles } from './styles';
import { AvatarClasses, defaultAvatarClasses } from './classes';
import { typedMemo } from '../utils/typedMemo';

export * from './classes';
export * from './styles';

export interface AvatarProps<
  TMessage = string,
  TAuthor extends Author<TMessage> = Author<TMessage>
> {
  author: TAuthor;
  styles?: AvatarStyles;
  classes?: AvatarClasses;
}

function Avatar<
  TMessage = string,
  TAuthor extends Author<TMessage> = Author<TMessage>
>(props: AvatarProps<TMessage, TAuthor>) {
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
                .map(part => part[0])
                .join('')
                .toUpperCase()
                .substr(0, 3)}
        </span>
      </div>
    )
  );
}
const Memoized = typedMemo(Avatar);
export { Memoized as Avatar };
