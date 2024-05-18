import mongoose from "mongoose"

export const friendsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.UUID,
    required: true,
  },
  friends: [
    {
      userid: {
        type: String,
        required: true,
        unique: true,
      },
      room: {
        type: String,
        required: true,
      },
      lastMessage: {
        type: String,
      },
    },
  ],
  timestamp: { type: Date, default: Date.now },
})
const friends = mongoose.model("friends", friendsSchema)
export default friends
