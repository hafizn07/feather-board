import { IoAddOutline } from "react-icons/io5";

import { Button } from "../ui/button";
import SectionContainer from "./section-container";

const MainBoard = () => {
  return (
    <div className="mt-6 px-2">
      <div className="flex gap-5">
        <SectionContainer />
        <SectionContainer />
        <SectionContainer />
        <div className="px-2 py-1">
          <Button variant="outline" className="text-gray-400">
            <IoAddOutline size={20} />
            <span className="ml-3 font-bold">Add section</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;
