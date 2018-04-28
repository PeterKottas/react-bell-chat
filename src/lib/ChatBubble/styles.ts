import * as React from 'react';

const styles = {
  chatBubbleWrapper: {
    position: 'relative',
    marginBottom: 2,
  } as React.CSSProperties,
  chatBubble: {
    position: 'relative',
    backgroundColor: '#0084FF',
    borderRadius: 7,
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: 425,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 14,
    paddingRight: 14,
    width: '-webkit-fit-content',
    // boxShadow: 'rgba(0, 0, 0, 0.3) 2px 2px 2px'
  } as React.CSSProperties,
  chatBubbleOrientationNormal: {
    marginRight: 0,
  } as React.CSSProperties,
  recipientChatBubble: {
    backgroundColor: '#ccc',
  } as React.CSSProperties,
  recipientChatBubbleOrientationNormal: {
    marginLeft: 0,
  } as React.CSSProperties,
  p: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 300,
    margin: 0,
    marginRight: 30
  } as React.CSSProperties,
  firstChatBubbleInGroup: {
    borderTopRightRadius: 0
  } as React.CSSProperties,
  recipientFirstChatBubbleInGroup: {
    borderTopLeftRadius: 0
  } as React.CSSProperties,
  lastChatBubbleInGroup: {
    borderTopRightRadius: 0
  } as React.CSSProperties,
  recipientLastChatBubbleInGroup: {
    borderTopLeftRadius: 0
  } as React.CSSProperties,
  centerChatBubbleInGroup: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  } as React.CSSProperties,
  recipientCenterChatBubbleInGroup: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0
  } as React.CSSProperties,
  createdOn: {
    position: 'absolute',
    right: 4,
    bottom: 2,
    fontSize: 9,
    color: 'rgba(255, 255, 255, 0.55)'
  } as React.CSSProperties,
  lastSeenByContainer: {
    position: 'absolute',
    right: -30,
    top: 0,
    width: 20,
    height: '100%',
  } as React.CSSProperties
};
export default styles;
