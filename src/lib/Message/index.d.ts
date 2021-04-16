/**
 * A standardized message object for use
 * in rendering messages in the chat feed.
 */
export interface Message<T> {
    id?: number;
    authorId?: number;
    message: T;
    createdOn?: Date;
    isSend?: boolean;
}
export default Message;
