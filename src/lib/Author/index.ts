export interface Author {
    id: number;
    name: string;
    avatarName?: string;
    lastSeenAvatarName?: string;
    isTyping?: boolean;
    lastSeenMessageId?: number;
    bgImageUrl?: number;
}

export default Author;