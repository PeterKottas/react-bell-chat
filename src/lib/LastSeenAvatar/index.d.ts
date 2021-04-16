import * as React from 'react';
import { Author } from '../Author';
export interface LastSeenAvatarProps {
    author: Author;
    styles?: LastSeenAvatarStyles;
    classes?: LastSeenAvatarClasses;
    style?: React.CSSProperties;
    className?: string;
}
export interface LastSeenAvatarClasses {
    container?: string;
    text?: string;
}
export interface LastSeenAvatarStyles {
    container?: React.CSSProperties;
    text?: React.CSSProperties;
}
declare const _default: React.NamedExoticComponent<LastSeenAvatarProps>;
export default _default;
