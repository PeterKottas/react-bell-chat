import * as React from 'react';
import { Author } from '../Author';
export interface IsTypingStyles {
  container?: React.CSSProperties;
}
export interface IsTypingClasses {
  container?: string;
}
export interface IsTypingProps {
  typingAuthors: Author[];
  styles?: IsTypingStyles;
  style?: React.CSSProperties;
  className?: string;
  classes?: IsTypingClasses;
}
declare const _default: React.NamedExoticComponent<IsTypingProps>;
export default _default;
