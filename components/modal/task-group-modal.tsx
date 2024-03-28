import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EllipsisVertical, FolderCheck, FolderPlus } from "lucide-react";
import { Input } from "../ui/input";

const TaskGroupModal = () => {
  return (
    <Dialog open>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisVertical className="w-5 h-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <DialogTrigger className="flex items-center">
              <FolderPlus className="h-5 w-5 me-2" />
              Add Task Group
            </DialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Task Group</DialogTitle>
          <div>
            <form>
              <Input type="text" placeholder="Task Group Name" />
              <Input type="text" placeholder="Task Group Name" />
              <Input type="text" placeholder="Task Group Name" />
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TaskGroupModal;
