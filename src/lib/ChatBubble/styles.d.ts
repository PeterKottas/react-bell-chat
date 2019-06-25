/// <reference types="react" />
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
declare const styles: ChatBubbleStyles;
export default styles;
