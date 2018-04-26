import * as React from 'react';

export interface ChatFeedStyles {
  chatPanel: React.CSSProperties;
  chatHistory: React.CSSProperties;
  chatBubbleWrapper: React.CSSProperties;
  img: React.CSSProperties;
}

export default {
  chatPanel: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
  },
  chatHistory: { 
    overflow: 'auto',
    padding: '0 10px'
  },
  chatBubbleWrapper: {
    marginTop: 10,
    marginBottom: 10,
    overflow: 'auto',
    position: 'relative',
  },
  img: {
    borderRadius: 100,
    bottom: 0,
    left: 0,
    position: 'absolute',
    width: 36,
    zIndex: 100,
  },
} as ChatFeedStyles;
