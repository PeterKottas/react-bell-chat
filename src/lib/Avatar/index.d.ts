/// <reference types="react" />
import * as React from 'react';
import { Author } from '../Author';
export interface AvatarStyles {
    container?: React.CSSProperties;
    text?: React.CSSProperties;
}
export interface AvatarProps {
    author: Author;
    styles?: AvatarStyles;
}
declare const Avatar: React.SFC<AvatarProps>;
export default Avatar;
