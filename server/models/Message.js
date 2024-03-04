const {model, Schema} = require('mongoose');

const messageSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    body: {
        type: String,
        required: true
    },
    status: Boolean,
    chat: {
        type: Schema.Types.ObjectId,
        ref: 'Chat'
    }
});

const Message = model('Message', messageSchema);

module.exports = Message;