import BreadCrumb from "@/components/breadcrumb";
import { UserButton } from "@clerk/nextjs";
import { Bell, Menu } from "lucide-react";

const TopDashboard = async () => {
  return (
    <div className="p-4 flex justify-between items-center space-x-3  px-12 border-b-2">
      <div className="flex items-center space-x-3">
        <button>
          <Menu className="text-gray-500" />
        </button>
        <BreadCrumb />
      </div>
      <div className="flex items-center space-x-3">
        <Bell className="text-gray-500 w-6 h-6" />
        <UserButton />
      </div>
    </div>
  );
};

export default TopDashboard;
