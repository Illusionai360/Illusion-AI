import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    history: [
        {
            title: String,
            messages: [
                {
                    content: String
                }
            ]
        }
    ],
    createdby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSchema);

export default Chat;