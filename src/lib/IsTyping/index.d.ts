/// <reference types="react" />
import * as React from 'react';
import { Author } from '../Author';
export interface IsTypingStyles {
    container?: React.CSSProperties;
}
export interface IsTypingProps {
    typingAuthors: Author[];
    styles?: IsTypingStyles;
}
declare const IsTyping: (props: IsTypingProps) => JSX.Element;
export default IsTyping;
