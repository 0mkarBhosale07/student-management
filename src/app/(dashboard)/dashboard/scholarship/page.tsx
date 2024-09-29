"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bell, Home, Menu } from "lucide-react";
import Link from "next/link";
const Scholarship = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for larger screens */}
      <aside className="hidden w-64 bg-gray-100 p-4 lg:block">
        <SidebarContent />
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Navbar */}
        <header className="flex h-16 items-center justify-between border-b px-4">
          <div className="flex items-center lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle sidebar</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <SidebarContent />
              </SheetContent>
            </Sheet>
          </div>
          {/* <div className="flex items-center gap-2">
            <form className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                className="w-full bg-white pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                placeholder="Search..."
                type="search"
              />
            </form>
          </div> */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Link href="/dashboard/user">
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                <AvatarFallback>PJ</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-y-auto p-5">
          <h1 className="mb-4 text-2xl font-bold">Scholarship</h1>
          <div>
            <h1 className="mt-10 text-xl text-center font-bold">
              Check for available schemes
            </h1>
            <div className="view">
              <div className="scholarship  bg-secondary px-5 mt-10 py-2 rounded-lg">
                <h1 className="text-primary text-xl font-bold">
                  State Government Open Merit Scholarship.
                </h1>
                <p>
                  <ul>
                    <li className="ml-2 my-1">
                      The applicant must be a resident of the Maharashtra State.
                    </li>
                    <li className="ml-2 my-1">
                      Need to get at least 60 percent in 12th standard.
                    </li>
                    <li className="ml-2 my-1">
                      Only applicable for stream Arts, commerce, science and
                      law.
                    </li>
                    <li className="ml-2 my-1">
                      {" "}
                      Maharashtrian Students studying Out of Maharashtra cannot
                      apply for this scheme.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="scholarship  bg-secondary px-5 mt-10 py-2 rounded-lg">
                <h1 className="text-primary text-xl font-bold">
                  Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna.
                </h1>
                <p>
                  <ul>
                    <li className="ml-2 my-1">For all cast</li>
                  </ul>
                </p>
              </div>
              <div className="scholarship  bg-secondary px-5 mt-10 py-2 rounded-lg">
                <h1 className="text-primary text-xl font-bold">
                  National Scholarships Portal
                </h1>
                <p>
                  <ul>
                    <li className="ml-2 my-1">
                      Above 75% in 12th student for all cast it is eligible.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

function SidebarContent() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <h2 className="my-4 mx-2 text-xl font-bold">Dashboard</h2>
        <nav className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-primary font-bold"
            asChild
          >
            <Link href="/dashboard ">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
          {/* <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard/user">
              <Users className="mr-2 h-4 w-4" />
              Users
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="#">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button> */}
        </nav>
      </div>
    </div>
  );
}

export default Scholarship;
