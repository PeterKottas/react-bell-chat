import * as React from 'react';

export interface BubbleGroupStyles {
  bubbleGroupWrapper?: React.CSSProperties;
}

export default {
  bubbleGroupWrapper: {
    marginTop: 10,
    marginBottom: 10,
    position: 'relative',
  },
} as BubbleGroupStyles;
