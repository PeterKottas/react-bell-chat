import * as React from 'react';
import { Author } from '../Author';
import { AvatarStyles } from './styles';
import { AvatarClasses } from './classes';
export * from './classes';
export * from './styles';
export interface AvatarProps {
    author: Author;
    styles?: AvatarStyles;
    classes?: AvatarClasses;
}
declare const Memoized: React.NamedExoticComponent<AvatarProps>;
export { Memoized as Avatar };
