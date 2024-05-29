// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx"
import * as $_app from "./routes/_app.tsx"
import * as $_middleware from "./routes/_middleware.ts"
import * as $about from "./routes/about.tsx"
import * as $addFriend_roomid_ from "./routes/addFriend/[roomid].tsx"
import * as $addFriend_index from "./routes/addFriend/index.tsx"
import * as $api_v1_chats_friendList from "./routes/api/v1/chats/friendList.js"
import * as $api_v1_chats_friendkey from "./routes/api/v1/chats/friendkey.js"
import * as $api_v1_chats_talk from "./routes/api/v1/chats/talk.js"
import * as $api_v1_chats_talkdata from "./routes/api/v1/chats/talkdata.ts"
import * as $api_v1_csrftoken from "./routes/api/v1/csrftoken.ts"
import * as $api_v1_friends_ID_icon from "./routes/api/v1/friends/[ID]/icon.js"
import * as $api_v1_friends_ID_info from "./routes/api/v1/friends/[ID]/info.ts"
import * as $api_v1_friends_reqLists from "./routes/api/v1/friends/reqLists.ts"
import * as $api_v1_friends_request from "./routes/api/v1/friends/request.ts"
import * as $api_v1_logins_login from "./routes/api/v1/logins/login.ts"
import * as $api_v1_logins_logout from "./routes/api/v1/logins/logout.js"
import * as $api_v1_logins_register from "./routes/api/v1/logins/register.js"
import * as $api_v1_setting_index from "./routes/api/v1/setting/index.ts"
import * as $api_v1_users_icon from "./routes/api/v1/users/icon.ts"
import * as $api_v1_users_info_icon from "./routes/api/v1/users/info/icon.ts"
import * as $api_v1_users_nickname from "./routes/api/v1/users/nickname.ts"
import * as $api_v1_users_username from "./routes/api/v1/users/username.ts"
import * as $greet_name_ from "./routes/greet/[name].tsx"
import * as $home_roomid_ from "./routes/home/[roomid].tsx"
import * as $home_index from "./routes/home/index.tsx"
import * as $index from "./routes/index.tsx"
import * as $privacypolicy from "./routes/privacypolicy.tsx"
import * as $setting_roomid_ from "./routes/setting/[roomid].tsx"
import * as $setting_index from "./routes/setting/index.tsx"
import * as $talk_roomid_ from "./routes/talk/[roomid].tsx"
import * as $talk_index from "./routes/talk/index.tsx"
import * as $Chats_AddFriend from "./islands/Chats/AddFriend.tsx"
import * as $Chats_Chat from "./islands/Chats/Chat.tsx"
import * as $Chats_ChatHeader from "./islands/Chats/ChatHeader.tsx"
import * as $Chats_ChatList from "./islands/Chats/ChatList.jsx"
import * as $Chats_ChatTalk from "./islands/Chats/ChatTalk.tsx"
import * as $Chats_FriendAddList from "./islands/Chats/FriendAddList.jsx"
import * as $Chats_FriendRequest from "./islands/Chats/FriendRequest.tsx"
import * as $Chats_getAddFriendKey from "./islands/Chats/getAddFriendKey.tsx"
import * as $Chats_isnotSelectUser from "./islands/Chats/isnotSelectUser.jsx"
import * as $HeaderMenu from "./islands/HeaderMenu.tsx"
import * as $LoginForm from "./islands/LoginForm.tsx"
import * as $LogoutButton from "./islands/LogoutButton.jsx"
import * as $PleaseLogin from "./islands/PleaseLogin.jsx"
import * as $RegisterForm from "./islands/RegisterForm.tsx"
import * as $SettingList from "./islands/SettingList.tsx"
import * as $Settings_Friends from "./islands/Settings/Friends.tsx"
import * as $Settings_Infomation from "./islands/Settings/Infomation.tsx"
import * as $Settings_Privacy from "./islands/Settings/Privacy.tsx"
import * as $Settings_Profile from "./islands/Settings/Profile.tsx"
import * as $Welcome from "./islands/Welcome.tsx"
import * as $newLoginForm from "./islands/newLoginForm.tsx"
import { type Manifest } from "$fresh/server.ts"

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.ts": $_middleware,
    "./routes/about.tsx": $about,
    "./routes/addFriend/[roomid].tsx": $addFriend_roomid_,
    "./routes/addFriend/index.tsx": $addFriend_index,
    "./routes/api/v1/chats/friendList.js": $api_v1_chats_friendList,
    "./routes/api/v1/chats/friendkey.js": $api_v1_chats_friendkey,
    "./routes/api/v1/chats/talk.js": $api_v1_chats_talk,
    "./routes/api/v1/chats/talkdata.ts": $api_v1_chats_talkdata,
    "./routes/api/v1/csrftoken.ts": $api_v1_csrftoken,
    "./routes/api/v1/friends/[ID]/icon.js": $api_v1_friends_ID_icon,
    "./routes/api/v1/friends/[ID]/info.ts": $api_v1_friends_ID_info,
    "./routes/api/v1/friends/reqLists.ts": $api_v1_friends_reqLists,
    "./routes/api/v1/friends/request.ts": $api_v1_friends_request,
    "./routes/api/v1/logins/login.ts": $api_v1_logins_login,
    "./routes/api/v1/logins/logout.js": $api_v1_logins_logout,
    "./routes/api/v1/logins/register.js": $api_v1_logins_register,
    "./routes/api/v1/setting/index.ts": $api_v1_setting_index,
    "./routes/api/v1/users/icon.ts": $api_v1_users_icon,
    "./routes/api/v1/users/info/icon.ts": $api_v1_users_info_icon,
    "./routes/api/v1/users/nickname.ts": $api_v1_users_nickname,
    "./routes/api/v1/users/username.ts": $api_v1_users_username,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/home/[roomid].tsx": $home_roomid_,
    "./routes/home/index.tsx": $home_index,
    "./routes/index.tsx": $index,
    "./routes/privacypolicy.tsx": $privacypolicy,
    "./routes/setting/[roomid].tsx": $setting_roomid_,
    "./routes/setting/index.tsx": $setting_index,
    "./routes/talk/[roomid].tsx": $talk_roomid_,
    "./routes/talk/index.tsx": $talk_index,
  },
  islands: {
    "./islands/Chats/AddFriend.tsx": $Chats_AddFriend,
    "./islands/Chats/Chat.tsx": $Chats_Chat,
    "./islands/Chats/ChatHeader.tsx": $Chats_ChatHeader,
    "./islands/Chats/ChatList.jsx": $Chats_ChatList,
    "./islands/Chats/ChatTalk.tsx": $Chats_ChatTalk,
    "./islands/Chats/FriendAddList.jsx": $Chats_FriendAddList,
    "./islands/Chats/FriendRequest.tsx": $Chats_FriendRequest,
    "./islands/Chats/getAddFriendKey.tsx": $Chats_getAddFriendKey,
    "./islands/Chats/isnotSelectUser.jsx": $Chats_isnotSelectUser,
    "./islands/HeaderMenu.tsx": $HeaderMenu,
    "./islands/LoginForm.tsx": $LoginForm,
    "./islands/LogoutButton.jsx": $LogoutButton,
    "./islands/PleaseLogin.jsx": $PleaseLogin,
    "./islands/RegisterForm.tsx": $RegisterForm,
    "./islands/SettingList.tsx": $SettingList,
    "./islands/Settings/Friends.tsx": $Settings_Friends,
    "./islands/Settings/Infomation.tsx": $Settings_Infomation,
    "./islands/Settings/Privacy.tsx": $Settings_Privacy,
    "./islands/Settings/Profile.tsx": $Settings_Profile,
    "./islands/Welcome.tsx": $Welcome,
    "./islands/newLoginForm.tsx": $newLoginForm,
  },
  baseUrl: import.meta.url,
} satisfies Manifest

export default manifest
