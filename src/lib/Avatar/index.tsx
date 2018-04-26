import * as React from 'react';
import { Author } from '../Author';

export interface AvatarProps {
  author: Author;
}

const Avatar: React.SFC<AvatarProps> = props => props.author && (
  <div>{props.author.name}</div>
);

export default Avatar;
