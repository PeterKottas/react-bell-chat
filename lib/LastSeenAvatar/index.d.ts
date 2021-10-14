import { Author } from '../Author';
import { LastSeenAvatarClasses } from './classes';
import { LastSeenAvatarStyles } from './styles';
export * from './classes';
export * from './styles';
export interface LastSeenAvatarProps<TMessageData = string, TAuthor extends Author<TMessageData> = Author<TMessageData>> {
    author: TAuthor;
    index?: number;
    mouseOver?: boolean;
    styles?: LastSeenAvatarStyles;
    classes?: LastSeenAvatarClasses;
}
declare function LastSeenAvatar<TMessageData = string, TAuthor extends Author<TMessageData> = Author<TMessageData>>(props: LastSeenAvatarProps<TMessageData, TAuthor>): JSX.Element;
declare const Memoized: typeof LastSeenAvatar;
export { Memoized as LastSeenAvatar };
