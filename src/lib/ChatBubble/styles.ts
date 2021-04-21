import * as React from 'react';

export interface ChatBubbleStyles {
  chatBubbleWrapper?: React.CSSProperties;
  chatBubble?: React.CSSProperties;
  systemChatBubbleContainer?: React.CSSProperties;
  systemChatBubbleText?: React.CSSProperties;
  userChatBubbleOrientationNormal?: React.CSSProperties;
  recipientChatBubbleOrientationNormal?: React.CSSProperties;
  text?: React.CSSProperties;
  userText?: React.CSSProperties;
  recipientText?: React.CSSProperties;
  userChatBubble?: React.CSSProperties;
  recipientChatBubble?: React.CSSProperties;
  firstChatBubbleInGroup?: React.CSSProperties;
  userFirstChatBubbleInGroup?: React.CSSProperties;
  recipientFirstChatBubbleInGroup?: React.CSSProperties;
  lastChatBubbleInGroup?: React.CSSProperties;
  userLastChatBubbleInGroup?: React.CSSProperties;
  recipientLastChatBubbleInGroup?: React.CSSProperties;
  centerChatBubbleInGroup?: React.CSSProperties;
  userCenterChatBubbleInGroup?: React.CSSProperties;
  recipientCenterChatBubbleInGroup?: React.CSSProperties;
  createdOn?: React.CSSProperties;
  recipientCreatedOn?: React.CSSProperties;
  userCreatedOn?: React.CSSProperties;
  isSend?: React.CSSProperties;

  lastSeenByContainer?: React.CSSProperties;
  loadingSpinnerColor?: string;
  isSendIconColor?: string;
}

const styles: ChatBubbleStyles = {
  chatBubbleWrapper: {
    position: 'relative',
    marginBottom: 2,
    display: 'flex',
  } as React.CSSProperties,
  chatBubble: {
    position: 'relative',
    borderRadius: 7,
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '80%',
    paddingTop: 8,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
  } as React.CSSProperties,
  userChatBubbleOrientationNormal: {
    marginRight: 0,
  } as React.CSSProperties,
  recipientChatBubbleOrientationNormal: {
    marginLeft: 0,
  } as React.CSSProperties,
  recipientChatBubble: {} as React.CSSProperties,
  text: {
    fontSize: 16,
    fontWeight: 300,
    margin: 0,
    marginRight: 30,
  } as React.CSSProperties,
  userFirstChatBubbleInGroup: {
    borderTopRightRadius: 0,
  } as React.CSSProperties,
  recipientFirstChatBubbleInGroup: {
    borderTopLeftRadius: 0,
  } as React.CSSProperties,
  userLastChatBubbleInGroup: {
    borderTopRightRadius: 0,
  } as React.CSSProperties,
  recipientLastChatBubbleInGroup: {
    borderTopLeftRadius: 0,
  } as React.CSSProperties,
  userCenterChatBubbleInGroup: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  } as React.CSSProperties,
  recipientCenterChatBubbleInGroup: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  } as React.CSSProperties,
  createdOn: {
    position: 'absolute',
    right: 14,
    bottom: 2,
    fontSize: 9,
    opacity: 0.5,
  } as React.CSSProperties,
  isSend: {
    position: 'absolute',
    right: 2,
    bottom: 1,
    fontSize: 9,
    opacity: 0.5,
  } as React.CSSProperties,
  lastSeenByContainer: {
    position: 'absolute',
    right: -30,
    top: 0,
    width: 20,
    height: '100%',
  } as React.CSSProperties,
  loadingSpinnerColor: 'currentColor',
  isSendIconColor: 'currentColor',
};

export { styles as defaultChatBubbleStyles };
