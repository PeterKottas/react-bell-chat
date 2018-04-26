import * as React from 'react';
import { Author } from '../Author';

export interface AvatarProps {
  author: Author;
}

const styles: {[key:string]: React.CSSProperties} = {
  container: {
    margin: 0,
    fontSize: '14px',
    fontWeight: 400,
    color: 'rgb(153, 153, 153)'
  }
}

const Avatar: React.SFC<AvatarProps> = props => props.author && (
  <div style={styles.container}>{props.author.name}</div>
);

export default Avatar;
