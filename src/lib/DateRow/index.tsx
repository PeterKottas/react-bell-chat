import * as React from 'react';
import classnames from 'classnames';
import defaultClasses, { DateRowClasses } from './classes';
import defaultStyles, { DateRowStyles } from './styles';
export * from './classes';
export * from './styles';

export interface DateRowProps {
  date: Date;
  styles?: DateRowStyles;
  classes?: DateRowClasses;
}

const DateRow: React.FC<DateRowProps> = (props) => {
  let { styles, classes } = props;
  const style = React.useMemo(
    () => ({
      ...defaultStyles.container,
      ...styles?.container,
    }),
    [styles?.container]
  );
  return (
    props.date && (
      <div
        className={classnames(defaultClasses.container, classes?.container)}
        style={style}
        title={props.date.toLocaleDateString([], {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      >
        {props.date.toLocaleDateString()}
      </div>
    )
  );
};

export default React.memo(DateRow);
