import NewChat from "./NewChat";
import React from "react";

export default function Sidebar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />
          <div>{/* ModelSelection */}</div>
          {/* Map through the ChatRows */}
        </div>
      </div>
    </div>
  );
}
