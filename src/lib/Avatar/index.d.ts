/// <reference types="react" />
import * as React from 'react';
import { Author } from '../Author';
export interface AvatarProps {
    author: Author;
}
declare const Avatar: React.SFC<AvatarProps>;
export default Avatar;
