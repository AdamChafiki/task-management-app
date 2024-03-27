"use client";
import { navlinks } from "@/lib/route";
import { cn } from "@/lib/utils";

import { LayoutDashboard, LayoutList, Slack } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Separator } from "@/components/ui/separator";

const SideMenu = () => {
  const path = usePathname();

  return (
    <div className="hidden md:block w-[300px] border-r-2 border-teal-500 bg-zinc-900 text-white">
      <div className="menu">
        <div className="p-4 text-center ">
          <Slack className="w-8 h-8 ms-auto" />
        </div>
        <Separator className="w-44 mx-auto" />
        <ul className="flex flex-col space-y-4 py-4">
          {navlinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={cn(
                "flex items-center gap-2 p-2 hover:bg-zinc-800",
                path === link.path && "bg-zinc-800 border-r-4 border-teal-600"
              )}
            >
              {/* wlah 7ta tamjnanite hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh */}
              {link.icon === "LayoutDashboard" && (
                <LayoutDashboard className="h-4 w-4 text-teal-600 " />
              )}
              {/* Render LayoutDashboard icon */}
              {link.icon === "LayoutList" && (
                <LayoutList className="h-4 w-4 text-teal-600" />
              )}
              {/* Render LayoutList icon */}
              <span>{link.name}</span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
