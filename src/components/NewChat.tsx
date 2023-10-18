import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { PlusCircleIcon } from "@heroicons/react/20/solid";
import React from "react";
import { db } from "../../firebase";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type Props ={
  id: string
}

export default function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        messages: [],
        userId: session?.user?.email,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="border-grey-700 border chatRow">
      <PlusCircleIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}
