import { Input } from "@/components/ui/input";
import { Filter, ListFilter, Search } from "lucide-react";

const Task = () => {
  return (
    <section>
      <div className="border-b-2 px-12">
        <div className="flex items-center justify-between">
          <div className="border-r-2 w-3/4 flex items-center">
            <Search className="w-4 h-4 me-2 text-gray-500" />
            <Input
              placeholder="Search..."
              className="border-0 focus:ring-0 focus:border-0 focus:outline-none focus-visible:ring-offset-0 focus-visible:ring-0"
            />
          </div>
          <div className="w-1/4 pl-2">
            <ul className="flex space-x-3">
              <li className="flex items-center space-x-3 text-sm">
                <Filter className="w-4 h-4 me-2" />
                Filter
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <ListFilter className="w-4 h-4 me-2" />
                Sort by
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Task;
