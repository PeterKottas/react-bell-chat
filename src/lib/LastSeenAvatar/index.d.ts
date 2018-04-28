/// <reference types="react" />
import * as React from 'react';
import { Author } from '../Author';
export interface LastSeenAvatarProps {
    author: Author;
    containerStyle?: React.CSSProperties;
}
declare const LastSeenAvatar: React.SFC<LastSeenAvatarProps>;
export default LastSeenAvatar;
