import { Schema, model } from 'mongoose';

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
});

export default model('Todo', todoSchema);