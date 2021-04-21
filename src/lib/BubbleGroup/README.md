# BubbleGroup

A `BubbleGroup` renders a group of [ChatBubble](../ChatBubble)'s and can show the senders name atop the group.

#### Props

- **messages** _[Message]_: A list of messages you's like to render inside one group. _All messages must have the same id_.
- **yourAuthorId**: _number_ - Your author id.
- **author** _Author_: The author object.
- **showRecipientAvatar** _boolean_: Should the sender's name appear atop the group?
- **CustomChatBubble** _ChatBubble_ (optional): the type of bubble you'd like to render. (Default is [ChatBubble](../ChatBubble)).
- **CustomAvatar** _new_: `React.Component` - A custom avatar component that you can make youryour! (If you're using TypeScript for your project, you can `import` the `AvatarProps` for your components `constructor`)

#### Usage

```javascript
<BubbleGroup
  messages={messageGroup}
  id={message.id}
  showRecipientAvatar={showRecipientAvatar}
  chatBubble={MyChatBubble}
/>
```
