export interface ChatBubbleConfig {
  formatTime?: (date: Date) => string;
}

const config: ChatBubbleConfig = {
  formatTime: (date) =>
    date?.toLocaleTimeString([], {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }),
};

export { config as defaultChatBubbleConfig };
