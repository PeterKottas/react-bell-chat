import * as React from 'react';
export interface ChatInputStyles {
  chatInput?: React.CSSProperties;
  input?: React.CSSProperties;
}
export interface ChatInputClasses {
  chatInput?: string;
  input?: string;
}
export interface ChatInputProps {
  styles?: ChatInputStyles;
  inputPlaceholder?: string;
  className?: string;
  classes?: ChatInputClasses;
  style?: React.CSSProperties;
}
declare const _default: React.NamedExoticComponent<ChatInputProps>;
export default _default;
