export interface ChatBubbleConfig {
    formatTime?: (date: Date) => string;
}
declare const config: ChatBubbleConfig;
export { config as defaultChatBubbleConfig };
