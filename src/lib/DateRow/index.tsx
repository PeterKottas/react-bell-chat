import * as React from 'react';

export interface DateRowStyles {
  container?: React.CSSProperties;
}

const dateRowStyles: DateRowStyles = {
  container: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.55)'
  },
};

export interface DateRowProps {
  date: Date;
  styles?: DateRowStyles;
}

const DateRow = (props: DateRowProps) => {
  let { styles } = props;
  if (!styles) {
    styles = {};
  }
  const {
    container
  } = styles;
  return props.date && (
    <div
      className="react-bell-chat__date-row"
      style={{
        ...dateRowStyles.container,
        ...container
      }}
      title={props.date.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
    >
      {props.date.toLocaleDateString()}
    </div>
  );
};

export default DateRow;
