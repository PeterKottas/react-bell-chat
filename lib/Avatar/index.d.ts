import { Author } from '../Author';
import { AvatarStyles } from './styles';
import { AvatarClasses } from './classes';
export * from './classes';
export * from './styles';
export interface AvatarProps<T = string> {
    author: Author<T>;
    styles?: AvatarStyles;
    classes?: AvatarClasses;
}
declare function Avatar<T = string>(props: AvatarProps<T>): JSX.Element;
declare const Memoized: typeof Avatar;
export { Memoized as Avatar };
