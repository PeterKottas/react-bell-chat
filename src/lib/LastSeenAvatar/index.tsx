import * as React from 'react';
import { Author } from '../Author';
import classnames from 'classnames';
import defaultClasses, { LastSeenAvatarClasses } from './classes';
import defaultStyles, { LastSeenAvatarStyles } from './styles';
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
  let { styles, classes, index, mouseOver } = props;

  const style = React.useMemo(
    () => ({
      ...defaultStyles.container,
      ...styles?.container,
      ...(index > 0 && !mouseOver ? { marginTop: -12 } : { marginTop: -4 }),
    }),
    [styles?.container, index, mouseOver]
  );

  const textStyle = React.useMemo(
    () => ({
      ...defaultStyles.text,
      ...styles?.text,
    }),
    [styles?.text]
  );

  return (
    props.author && (
      <div
        style={style}
        className={classnames(defaultClasses.container, classes?.container)}
      >
        <span
          style={textStyle}
          className={classnames(defaultClasses.text, classes?.text)}
        >
          {props.author.lastSeenAvatarName
            ? props.author.lastSeenAvatarName
            : props.author.name[0].toUpperCase()}
        </span>
      </div>
    )
  );
};

export default React.memo(LastSeenAvatar);
