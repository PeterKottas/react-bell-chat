export interface Author<T = string> {
    id: number;
    name: string;
    avatarName?: string;
    lastSeenAvatarName?: string;
    lastSeenMessageId?: number;
    bgImageUrl?: string;
    isTyping?: boolean;
    isTypingMessage?: T;
}
