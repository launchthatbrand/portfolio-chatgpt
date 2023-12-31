/* eslint-disable @next/next/no-img-element */
"use client";

import { collection, orderBy, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";

import ChatRow from "./ChatRow";
import NewChat from "./NewChat";
import React from "react";
import { db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

export default function Sidebar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  console.log(chats);
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />
          <div>{/* ModelSelection */}</div>
          {/* Map through the ChatRows */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {/* Profile Image */}
      {session && (
        <img
          onClick={() => signOut()}
          src={session?.user?.image as string}
          alt=""
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}
