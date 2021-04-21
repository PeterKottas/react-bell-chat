import * as React from 'react';
import { Author } from '../Author';
import { IsTypingClasses } from './classes';
import { IsTypingStyles } from './styles';
export * from './classes';
export * from './styles';
export interface IsTypingProps {
    typingAuthors: Author[];
    styles?: IsTypingStyles;
    classes?: IsTypingClasses;
}
declare const _default: React.NamedExoticComponent<IsTypingProps>;
export default _default;
