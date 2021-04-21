import * as React from 'react';
import { Author } from '../Author';
import { LastSeenAvatarClasses } from './classes';
import { LastSeenAvatarStyles } from './styles';
export * from './classes';
export * from './styles';
export interface LastSeenAvatarProps {
    author: Author;
    index?: number;
    mouseOver?: boolean;
    styles?: LastSeenAvatarStyles;
    classes?: LastSeenAvatarClasses;
}
declare const _default: React.NamedExoticComponent<LastSeenAvatarProps>;
export default _default;
