import { IoAddOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import TaskCard from "./task-card";

const SectionContainer = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="flex w-full justify-between items-center px-2 py-1">
        <h2 className="font-bold">To Do</h2>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-gray-500 p-0 hover:bg-transparent"
          >
            <IoAddOutline size={20} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-500 hover:text-black">
              <BsThreeDots />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Remove section</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Task Cards Container */}
      <div className="flex flex-col gap-3 min-h-[700px] w-[310px] bg-[#F9F9F9] rounded-3xl p-3">
        <TaskCard />
      </div>
    </div>
  );
};

export default SectionContainer;
