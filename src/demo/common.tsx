import React from 'react';
import {
  AvatarStyles,
  ChatBubbleClasses,
  ChatBubbleProps,
  ChatBubbleStyles,
  LastSeenAvatarStyles,
  Message,
} from '../lib';

export const styles: { [key: string]: React.CSSProperties } = {
  button: {
    backgroundColor: '#fff',
    borderColor: '#1D2129',
    borderStyle: 'solid',
    borderRadius: 20,
    borderWidth: 2,
    color: '#1D2129',
    fontSize: 18,
    fontWeight: 300,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  selected: {
    color: '#fff',
    backgroundColor: '#0084FF',
    borderColor: '#0084FF',
  },
};

export const customBubble: React.FC<ChatBubbleProps<string>> = (props) => (
  <div className="mb-2">
    <span>
      {props.author &&
        props.author.name +
          ' ' +
          (props.message.authorId !== props.yourAuthorId ? 'says' : 'said') +
          ': '}
    </span>
    <span className={props.classes?.text}>{props.message.message}</span>
  </div>
);

export const loadingChatBubbleClasses: ChatBubbleClasses = {
  text: 'loading--placeholder',
};

export const messages: Message<string>[] = [
  { message: '██ ██ ██████ ██ █ ████ █', authorId: 0 },
  { message: '████ ████ ██ ████', authorId: 1 },
  { message: '██ ███ ██ ███ ██ ███', authorId: 2 },
];

export const chatBubbleStyles: ChatBubbleStyles = {
  chatBubble: {
    boxShadow: 'rgb(187 187 187) 0px 0px 2px 0',
  },
  recipientChatBubble: {
    backgroundColor: 'white',
  },
  userChatBubble: {
    color: 'white',
    backgroundColor: 'rgb(0, 132, 255)',
  },
};

export const lastSeenAvatarStyles: LastSeenAvatarStyles = {
  container: {
    boxShadow: '#cacaca 0px 0px 10px 0px, rgb(187 187 187) 0px 0px 2px 0',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
};

export const avatarStyles: AvatarStyles = {
  container: {
    boxShadow: '#cacaca 0px 0px 20px 0px, rgb(187 187 187) 0px 0px 2px 0',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
};

export const style: React.CSSProperties = {
  backgroundColor: '#f2f2f2',
};
