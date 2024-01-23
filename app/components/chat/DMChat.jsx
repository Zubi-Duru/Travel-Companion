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
      <div className="m-2 flex">
        <input
          className="py-1 mx-1 rounded-2xl pl-2 border-2 outline-tert"
          placeholder="Search for a friend"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="font-medium text-tert border-[1px] border-tert py-1 px-4 md:py-2 md:px-4 rounded-3xl hover:bg-tert hover:text-white "
          onClick={() => createDirectChat(creds)}
        >
          Search
        </button>
      </div>
    );
  }

  function renderChatFeed(chatEngineProps) {
    return (
      <div>
        <NewChatForm />
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
