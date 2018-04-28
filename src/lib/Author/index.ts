export interface Author {
    id: number;
    name: string;
    isTyping?: boolean;
    lastSeenMessageId?: number;
    bgImageUrl?: number;
}

export default Author;