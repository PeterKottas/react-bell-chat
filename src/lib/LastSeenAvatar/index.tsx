import * as React from 'react';
import { Author } from '../Author';
import classnames from 'classnames';
import { LastSeenAvatarClasses, defaultLastSeenAvatarClasses } from './classes';
import { LastSeenAvatarStyles, defaultLastSeenAvatarStyles } from './styles';
export * from './classes';
export * from './styles';

export interface LastSeenAvatarProps {
  author: Author;
  index?: number;
  mouseOver?: boolean;
  styles?: LastSeenAvatarStyles;
  classes?: LastSeenAvatarClasses;
}

const LastSeenAvatar: React.FC<LastSeenAvatarProps> = (props) => {
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
    [styles?.container, index, mouseOver]
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
};

const Memoized = React.memo(LastSeenAvatar);

export { Memoized as LastSeenAvatar };
