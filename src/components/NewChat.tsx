import { PlusCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function NewChat() {
  return (
    <div className="border-grey-700 border chatRow">
      <PlusCircleIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}
