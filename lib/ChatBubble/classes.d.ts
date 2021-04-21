export interface ChatBubbleClasses {
    chatBubbleWrapper?: string;
    chatBubble?: string;
    systemChatBubbleContainer?: string;
    systemChatBubbleText?: string;
    userChatBubbleOrientationNormal?: string;
    recipientChatBubbleOrientationNormal?: string;
    text?: string;
    userText?: string;
    recipientText?: string;
    userChatBubble?: string;
    recipientChatBubble?: string;
    firstChatBubbleInGroup?: string;
    userFirstChatBubbleInGroup?: string;
    recipientFirstChatBubbleInGroup?: string;
    lastChatBubbleInGroup?: string;
    userLastChatBubbleInGroup?: string;
    recipientLastChatBubbleInGroup?: string;
    centerChatBubbleInGroup?: string;
    userCenterChatBubbleInGroup?: string;
    recipientCenterChatBubbleInGroup?: string;
    createdOn?: string;
    recipientCreatedOn?: string;
    userCreatedOn?: string;
    isSend?: string;
    lastSeenByContainer?: string;
}
declare const classes: ChatBubbleClasses;
export { classes as defaultChatBubbleClasses };
