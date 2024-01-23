"use client";
import React, { useState } from "react";
import { useGetData } from "@/app/components/hooks/useFetchData";
import {
  ChatEngine,
  getOrCreateChat,
  NewChatForm,
  ChatFeed,
} from "react-chat-engine";
import { useAuthContext } from "@/app/components/hooks/useAuthContext";

const projectID = process.env.NEXT_PUBLIC_CHAT_PROJECT_ID;

const DMChat = () => {
  const { user, token, dispatch } = useAuthContext();
  const [username, setUsername] = useState("");
  const {
    data: friends,
    error,
    isLoading,
  } = useGetData(`/connect-friends`, { token: token });

  function createDirectChat(creds) {
    if (friends && friends.length) {
      const friendList = friends.map(({ username }) => username);
      if (friends && friends.length && friendList.includes(username)) {
        getOrCreateChat(
          creds,
          { is_direct_chat: true, usernames: [username] },
          () => setUsername("")
        );
      }
    }
  }

  function renderChatForm(creds) {
    return (
      <div className="m-2 w-4/4 flex justify-between">
        <input
          className="w-5/6 py-1 mx-1 rounded-2xl pl-2 border-2 outline-tert "
          placeholder="Search for a friend"
          value={username}
          onChange={(e) => {
            console.log("okk", username);
            setUsername(e.target.value);
          }}
        />
        <button className="float-right" onClick={() => createDirectChat(creds)}>
          🔍
        </button>
      </div>
    );
  }

  function renderChatFeed(chatEngineProps) {
    const { creds } = chatEngineProps;
    return (
      
      <div>
        {renderChatForm(creds)}
        <ChatFeed {...chatEngineProps} />
      </div>
    );
  }

  return (
    <div>
      <ChatEngine
        height="100vh"
        userName={user?.username}
        userSecret={user?._id}
        projectID={projectID}
        renderNewChatForm={(creds) => renderChatForm(creds)}
        renderChatFeed={(chatEngineProps) => renderChatFeed(chatEngineProps)}
      />
    </div>
  );
};

export default DMChat;
