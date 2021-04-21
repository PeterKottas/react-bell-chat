import * as React from 'react';
import classnames from 'classnames';
import { DateRowClasses, defaultDateRowClasses } from './classes';
import { DateRowStyles, defaultDateRowStyles } from './styles';
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
      ...defaultDateRowStyles.container,
      ...styles?.container,
    }),
    [styles?.container]
  );
  return (
    props.date && (
      <div
        className={classnames(
          defaultDateRowClasses.container,
          classes?.container
        )}
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

const Memoized = React.memo(DateRow);

export { Memoized as DateRow };
