import * as React from 'react';

export interface BubbleGroupStyles{
  chatBubbleWrapper: React.CSSProperties;
  bubbleGroupHeader: React.CSSProperties;
}

export default {
  chatBubbleWrapper: {
    marginTop: 10,
    marginBottom: 10,
    position: 'relative',
  },
  bubbleGroupHeader: {
    margin: 0,
    fontSize: 14,
    fontWeight: 400,
    color: '#999',
  },
  
} as BubbleGroupStyles;
