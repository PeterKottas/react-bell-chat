import { Author } from '../Author';
import { LastSeenAvatarClasses } from './classes';
import { LastSeenAvatarStyles } from './styles';
export * from './classes';
export * from './styles';
export interface LastSeenAvatarProps<T = string> {
    author: Author<T>;
    index?: number;
    mouseOver?: boolean;
    styles?: LastSeenAvatarStyles;
    classes?: LastSeenAvatarClasses;
}
declare function LastSeenAvatar<T = string>(props: LastSeenAvatarProps<T>): JSX.Element;
declare const Memoized: typeof LastSeenAvatar;
export { Memoized as LastSeenAvatar };
