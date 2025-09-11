import mongoose, { Schema, Document } from "mongoose";

interface IMessage {
    role: "user" | "assistant";
    content: string;
    createdAt: Date;
}

interface IChat extends Document {
    title: string;
    messages: IMessage[];
    createdby: mongoose.Schema.Types.ObjectId;
}

const MessageSchena = new Schema<IMessage>(
    {
        role: { type: String, enum: ["user", "assistant"], required: true },
        content: { type: String, required: true },
    },
    {
        timestamps: { createdAt: true, updatedAt: false }
    }
);

const ChatSchema = new Schema<IChat>(
    {
        title: {type: String, required: true},
        messages: [MessageSchena],
        createdby: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
    }, 
    {
        timestamps: true
    }
)

const Chat = mongoose.models.Chat || mongoose.model<IChat>("Chat", ChatSchema);

export default Chat;