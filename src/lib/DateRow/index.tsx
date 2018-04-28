import * as React from 'react';

const styles = {
  container: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.55)'
  } as React.CSSProperties,
};

export interface DateRowProps {
  date: Date;
  containerStyles?: React.CSSProperties;
}

const DateRow = (props: DateRowProps) => {
  return props.date && (
    <div
      className="react-chat-ui__date-row"
      style={{
        ...styles.container,
        ...props.containerStyles
      }}
      title={props.date.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
    >
      {props.date.toLocaleDateString()}
    </div>
  );
};

export default DateRow;
