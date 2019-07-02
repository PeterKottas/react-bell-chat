import * as React from 'react';

export interface BubbleGroupStyles {
  chatBubbleWrapper?: React.CSSProperties;
}

export default {
  chatBubbleWrapper: {
    marginTop: 10,
    marginBottom: 10,
    position: 'relative'
  },
} as BubbleGroupStyles;
