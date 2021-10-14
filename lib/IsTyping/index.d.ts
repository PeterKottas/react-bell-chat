import { Author } from '../Author';
import { IsTypingClasses } from './classes';
import { IsTypingStyles } from './styles';
export * from './classes';
export * from './styles';
export interface IsTypingProps<TMessage = string, TAuthor extends Author<TMessage> = Author<TMessage>> {
    typingAuthors: TAuthor[];
    styles?: IsTypingStyles;
    classes?: IsTypingClasses;
}
declare function IsTyping<TMessage = string, TAuthor extends Author<TMessage> = Author<TMessage>>(props: IsTypingProps<TMessage, TAuthor>): JSX.Element;
declare const Memoized: typeof IsTyping;
export { Memoized as IsTyping };
