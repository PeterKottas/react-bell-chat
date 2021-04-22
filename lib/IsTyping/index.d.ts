import { Author } from '../Author';
import { IsTypingClasses } from './classes';
import { IsTypingStyles } from './styles';
export * from './classes';
export * from './styles';
export interface IsTypingProps<T = string> {
    typingAuthors: Author<T>[];
    styles?: IsTypingStyles;
    classes?: IsTypingClasses;
}
declare function IsTyping<T = string>(props: IsTypingProps<T>): JSX.Element;
declare const Memoized: typeof IsTyping;
export { Memoized as IsTyping };
