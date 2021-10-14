import { Author } from '../Author';
import { AvatarStyles } from './styles';
import { AvatarClasses } from './classes';
export * from './classes';
export * from './styles';
export interface AvatarProps<TMessage = string, TAuthor extends Author<TMessage> = Author<TMessage>> {
    author: TAuthor;
    styles?: AvatarStyles;
    classes?: AvatarClasses;
}
declare function Avatar<TMessage = string, TAuthor extends Author<TMessage> = Author<TMessage>>(props: AvatarProps<TMessage, TAuthor>): JSX.Element;
declare const Memoized: typeof Avatar;
export { Memoized as Avatar };
