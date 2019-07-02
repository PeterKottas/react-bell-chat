/// <reference types="react" />
import * as React from 'react';
import { Author } from '../Author';
export interface AvatarStyles {
    container?: React.CSSProperties;
    text?: React.CSSProperties;
}
export interface AvatarClasses {
    container?: string;
    text?: string;
}
export interface AvatarProps {
    author: Author;
    className?: string;
    styles?: AvatarStyles;
    classes?: AvatarClasses;
    style?: React.CSSProperties;
}
declare const Avatar: React.SFC<AvatarProps>;
export default Avatar;
