import Conversation from "../db/models/coversationModel.js";
import Message from "../db/models/messageModel.js";
import { getRecieverSocketId } from "../sockets/socket.js";

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body        
        const {id: receiverId} = req.params
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
            
        }
        
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {

            conversation.messages.push(newMessage._id)
            
            //Slow way to save
            // await conversation.save()
            // await newMessage.save()

            //Fast way to save
            await Promise.all([conversation.save(), newMessage.save()])

            //Soket.io functionality would be coded here
            const recieverSocketId = getRecieverSocketId()
            if (recieverSocketId) {
                io.to(recieverSocketId).emit("newMessage", newMessage)

        }
    }

        return res.status(200).json(newMessage)
    } catch (error) {
        console.error("Error while sending message", error.message);
        
        return res.status(500).json({ error:"Internal Server Error" })
    }
}

const getMessages = async (req, res) => {
    try {
        const {id: userToChatId} = req.params
        const senderId = req.user._id
        
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("messages")

        if (!conversation) {
            return res.status(200).json([])
        }

        return res.status(200).json(conversation.messages)

    } catch (error) {
        console.error("Error while getting messages", error.message);
        return res.status(500).json({ error:"Internal Server Error" })
    }
}
        

export { sendMessage, getMessages }