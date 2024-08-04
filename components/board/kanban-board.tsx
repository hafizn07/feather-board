import { FaArrowLeft } from "react-icons/fa";
import { Button } from "../ui/button";

const KanbanBoard = () => {
  return (
    <div>
      <Button variant="outline">
        <FaArrowLeft className="opacity-50" />
      </Button>
    </div>
  );
};

export default KanbanBoard;
