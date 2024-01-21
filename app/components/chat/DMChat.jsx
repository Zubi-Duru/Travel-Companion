"use client";
import React, { useState } from "react";
import { useGetData } from "@/app/components/hooks/useFetchData";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import { useAuthContext } from "@/app/components/hooks/useAuthContext";

const DMChat = () => {
  const { user, dispatch } = useAuthContext();
  const [username, setUsername] = useState("");
  const { data: friends, error, isLoading } = useGetData(`/connect-friends`);

  console.log(friends);

  function createDirectChat(creds) {
    const friendList = friends.map(({ username }) => username);
    if (friends && friends.length && friendList.includes(username)) {
      getOrCreateChat(
        creds,
        { is_direct_chat: true, usernames: [username] },
        () => setUsername("")
      );
    }
  }

  function renderChatForm(creds) {
    return (
      <div className="m-2">
        <input
          className="py-1 mx-1 rounded-2xl"
          placeholder="Search for a user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }

  return (
    <ChatEngine
      height="100vh"
      userName={user?.username}
      userSecret={user?._id}
      projectID="db2b2202-e606-42d5-95c8-f794065d1185"
      renderNewChatForm={(creds) => renderChatForm(creds)}
    />
  );
};

export default DMChat;
