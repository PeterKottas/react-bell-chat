import * as React from 'react';
import { Author } from '../Author';
import classnames from 'classnames';
import { LastSeenAvatarClasses, defaultLastSeenAvatarClasses } from './classes';
import { LastSeenAvatarStyles, defaultLastSeenAvatarStyles } from './styles';
import { typedMemo } from '../utils/typedMemo';
export * from './classes';
export * from './styles';

export interface LastSeenAvatarProps<T = string> {
  author: Author<T>;
  index?: number;
  mouseOver?: boolean;
  styles?: LastSeenAvatarStyles;
  classes?: LastSeenAvatarClasses;
}

function LastSeenAvatar<T = string>(props: LastSeenAvatarProps<T>) {
  let { styles, classes, index, mouseOver, author } = props;

  const style = React.useMemo(
    () => ({
      ...defaultLastSeenAvatarStyles.container,
      ...styles?.container,
      ...(author?.bgImageUrl
        ? ({
            backgroundImage: `url(${author?.bgImageUrl})`,
            backgroundSize: 'cover',
          } as React.CSSProperties)
        : {}),
      ...(index > 0 && !mouseOver ? { marginTop: -12 } : { marginTop: -4 }),
    }),
    [styles?.container, index, mouseOver, author?.bgImageUrl]
  );

  const textStyle = React.useMemo(
    () => ({
      ...defaultLastSeenAvatarStyles.text,
      ...styles?.text,
    }),
    [styles?.text]
  );

  return (
    author && (
      <div
        style={style}
        className={classnames(
          defaultLastSeenAvatarClasses.container,
          classes?.container
        )}
      >
        <span
          style={textStyle}
          className={classnames(
            defaultLastSeenAvatarClasses.text,
            classes?.text
          )}
        >
          {author.bgImageUrl
            ? null
            : author.lastSeenAvatarName
            ? author.lastSeenAvatarName
            : author.name[0].toUpperCase()}
        </span>
      </div>
    )
  );
}

const Memoized = typedMemo(LastSeenAvatar);

export { Memoized as LastSeenAvatar };
