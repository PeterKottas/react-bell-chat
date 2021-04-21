import * as React from 'react';

export interface BubbleGroupStyles {
  bubbleGroupWrapper?: React.CSSProperties;
}

const styles: BubbleGroupStyles = {
  bubbleGroupWrapper: {
    marginTop: 10,
    marginBottom: 10,
    position: 'relative',
  },
};

export default styles;

export { styles as defaultBubbleGroupStyles };
