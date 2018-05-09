/**
 * A standardized message object for use
 * in rendering messages in the chat feed.
 */

export interface Message {
  id?: number;
  authorId?: number;
  message: string;
  createdOn?: Date;
  isSend?: boolean;
}

export default Message;