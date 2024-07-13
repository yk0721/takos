//友達の情報のオブジェクトを配列で返す
//GET /api/v2/client/friends/list
// -> { status: boolean, message: string, friends: [{userName, nickName,latestMessage,latestMessageTime}] }
import users from "../../../../../models/users.ts";
import rooms from "../../../../../models/rooms.ts";
import messages from "../../../../../models/messages.ts";
import { load } from "$std/dotenv/mod.ts";
import takos from "../../../../../util/takos.ts";
import remoteFriends from "../../../../../models/remoteFriends.ts";
const env = await load();
export const handler = {
  async GET(req: any, ctx: any) {
    if (!ctx.state.data.loggedIn) {
      return ctx.json({ status: false, message: "You are not logged in" });
    }
    const userid = ctx.state.data.userid;
    const roomsData = await rooms.find({ "users.userid": userid });
    const localFriendRooms = roomsData.filter((room: any) => room.types === "friend");
    const remoteFriendRooms = roomsData.filter((room: any) => room.types === "remotefriend");
    const groupRooms = roomsData.filter((room: any) => room.types === "group");
    const communities = roomsData.filter((room: any) => room.types === "community");
    //友達の情報を取得
    const localFriendData = Promise.all(localFriendRooms.map(async (room: any) => {
      const friend = room.users.find((user: any) => user.userid !== userid);
      const friendData = await users.findOne({ uuid: friend.userid });
      const latestMessage = await messages.findOne({ roomID: room.roomID }, { sort: { createdAt: -1 } });
      return {
        userName: friendData?.userName,
        nickName: friendData?.nickName,
        latestMessage: latestMessage?.message,
        latestMessageTime: latestMessage?.timestamp,
      };
    }));
    //リモート友達の情報を取得
    const remoteFriendData = Promise.all(remoteFriendRooms.map(async (room: any) => {
      const friend = room.users.find((user: any) => user.userid !== userid);
      const friendData = await remoteFriends.findOne({ uuid: friend.userid });
      const latestMessage = await messages.findOne({ roomID: room.roomID }, { sort: { createdAt: -1 } });
      return {
        userName: friendData?.userName,
        nickName: friendData?.nickName,
        latestMessage: latestMessage?.message,
        latestMessageTime: latestMessage?.timestamp,
      };
    }));
  },
};
async function updateRemoteFriendsData(userid: string, remoteFriendRooms: any) {
}
