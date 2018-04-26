## Message

The `Message` plain object is the standard object for handling message data in `react-chat-ui`.

#### Constructor

* **id**: The `id` of a message is a message id
* **authorId**: The `authorId` of a message is a number used to identify which user created the message. It's used for grouping messages together and determining the bubble colour. _(This may be renamed in the future)_
* **message**: This is the actual text that will be displayed in the bubble

```javascript
const myMessage = { id:1, authorId:1, message:'Hello World!' };
```
