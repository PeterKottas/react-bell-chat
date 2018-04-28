/// <reference types="react" />
import { Author } from '../Author';
export interface IsTypingProps {
    typingAuthors: Author[];
}
declare const IsTyping: (props: IsTypingProps) => JSX.Element;
export default IsTyping;
