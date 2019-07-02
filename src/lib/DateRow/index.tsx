import * as React from 'react';
import classnames from 'classnames';

export interface DateRowStyles {
  container?: React.CSSProperties;
}

export interface DateRowClasses {
  container?: string;
}

const dateRowStyles: DateRowStyles = {
  container: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.55)'
  }
};

export interface DateRowProps {
  date: Date;
  styles?: DateRowStyles;
  style?: React.CSSProperties;
  className?: string;
  classes?: DateRowClasses;
}

const DateRow = (props: DateRowProps) => {
  let { styles, classes } = props;
  if (!styles) {
    styles = {};
  }
  if (!classes) {
    classes = {};
  }
  const { container } = styles;
  return (
    props.date && (
      <div
        className={classnames(
          'react-bell-chat__date-row',
          props.className,
          classes.container
        )}
        style={{
          ...dateRowStyles.container,
          ...container,
          ...props.style
        }}
        title={props.date.toLocaleDateString([], {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      >
        {props.date.toLocaleDateString()}
      </div>
    )
  );
};

export default DateRow;
