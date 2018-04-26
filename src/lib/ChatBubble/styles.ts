export interface ChatBubbleComponentStyles {
  chatBubbleWrapper: React.CSSProperties;
  chatBubble: React.CSSProperties;
  chatBubbleOrientationNormal: React.CSSProperties;
  recipientChatBubble: React.CSSProperties;
  recipientChatBubbleOrientationNormal: React.CSSProperties;
  p: React.CSSProperties;
}

export default {
  chatBubbleWrapper: {
    overflow: 'auto',
  },
  chatBubble: {
    backgroundColor: '#0084FF',
    borderRadius: 20,
    marginTop: 1,
    marginRight: 'auto',
    marginBottom: 1,
    marginLeft: 'auto',
    maxWidth: 425,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 14,
    paddingRight: 14,
    width: '-webkit-fit-content',
  },
  chatBubbleOrientationNormal: {
    float: 'right',
  },
  recipientChatBubble: {
    backgroundColor: '#ccc',
  },
  recipientChatBubbleOrientationNormal: {
    float: 'left',
  },
  p: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 300,
    margin: 0,
  },
} as ChatBubbleComponentStyles;
