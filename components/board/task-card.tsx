"use client";

import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TaskCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseHover = (hoverState: boolean) => {
    setIsHovered(hoverState);
  };

  return (
    <div
      className="flex flex-col gap-6 w-full bg-white rounded-xl p-2 cursor-grab"
      onMouseEnter={() => handleMouseHover(true)}
      onMouseLeave={() => handleMouseHover(false)}
    >
      {/* Task Title and Dropdown Menu */}
      <div className="flex items-start justify-between gap-3">
        <h1 className="leading-6">
          Create and finalize the design of the admin panel and mobile app.
        </h1>
        <div className={isHovered ? "visible" : "invisible"}>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-500 hover:text-black border-0">
              <BsThreeDots />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Avatar and Date */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Avatar className="w-7 h-7">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-gray-400 text-sm">12 Feb</p>
        </div>

        {/* Task Category */}
        <div className="px-3 py-1 bg-slate-200/50 rounded-2xl">
          <p className="text-xs">Programming</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
