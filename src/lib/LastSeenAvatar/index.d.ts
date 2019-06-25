/// <reference types="react" />
import * as React from 'react';
import { Author } from '../Author';
export interface LastSeenAvatarProps {
    author: Author;
    styles: LastSeenAvatarStyles;
}
export interface LastSeenAvatarStyles {
    container?: React.CSSProperties;
    text?: React.CSSProperties;
}
declare const LastSeenAvatar: React.SFC<LastSeenAvatarProps>;
export default LastSeenAvatar;
