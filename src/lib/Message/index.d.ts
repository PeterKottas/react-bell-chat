/**
 * A standardized message object for use
 * in rendering messages in the chat feed.
 */

export interface Message {
  id?: number;
  authorId: number;
  message: string;
}

export default Message;