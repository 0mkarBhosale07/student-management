"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bell, Home, Menu } from "lucide-react";
import Link from "next/link";

const UserProfile = () => {
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
          <h1 className="mb-4 text-2xl font-bold">Student Profile</h1>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="grid gap-4 md:grid-cols- lg:grid-cols-">
              <div className="details bg-secondary px-4 py-6 rounded-lg">
                <h2 className="text-xl my-2 font-bold text-primary">
                  Personal Information
                </h2>
                <div className="space-y-2 my-4">
                  <Label htmlFor="text" className="font-bold text-base">
                    Name -
                  </Label>
                  <Input
                    id="text"
                    type="text"
                    className=" text-black text-lg"
                    placeholder="Prajakta Jadhav"
                    required
                    value="Prajakta Raosaheb Jadhav"
                    disabled
                  />
                </div>
                <div className="space-y-2 my-4">
                  <Label htmlFor="text" className="font-bold text-base">
                    Mother Name -
                  </Label>
                  <Input
                    id="text"
                    type="text"
                    className=" text-black text-lg"
                    placeholder="Prajakta Jadhav"
                    required
                    value="Jayshree"
                    disabled
                  />
                </div>
                <div className="space-y-2 my-4">
                  <Label htmlFor="text" className="font-bold text-base">
                    Date of birth -
                  </Label>
                  <Input
                    id="text"
                    type="text"
                    className=" text-black text-lg"
                    placeholder="Prajakta Jadhav"
                    required
                    value="02/05/2004"
                    disabled
                  />
                </div>
                <div className="space-y-2 my-4">
                  <Label htmlFor="text" className="font-bold text-base">
                    PRN -
                  </Label>
                  <Input
                    id="text"
                    type="text"
                    className=" text-black text-lg"
                    placeholder="Prajakta Jadhav"
                    required
                    value="203215487"
                    disabled
                  />
                </div>
                <div className="space-y-2 my-4">
                  <Label htmlFor="text" className="font-bold text-base">
                    Gender -
                  </Label>
                  <Input
                    id="text"
                    type="text"
                    className=" text-black text-lg"
                    placeholder="Prajakta Jadhav"
                    required
                    value="Female"
                    disabled
                  />
                </div>
                <div className="space-y-2 my-4">
                  <Label htmlFor="text" className="font-bold text-base">
                    Blood Group -
                  </Label>
                  <Input
                    id="text"
                    type="text"
                    className=" text-black text-lg"
                    placeholder="Prajakta Jadhav"
                    required
                    value="AB+"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="grid mt-5 gap-4 md:grid-cols- lg:grid-cols-">
              <div className="details bg-secondary px-4 py-6 rounded-lg">
                <h2 className="text-xl my-2 font-bold text-primary">
                  Contact Details
                </h2>
                <div className="space-y-2 my-4">
                  <Label htmlFor="text" className="font-bold text-base">
                    Mobile Number-
                  </Label>
                  <Input
                    id="text"
                    type="text"
                    className=" text-black text-lg"
                    placeholder="Prajakta Jadhav"
                    required
                    value="9172833286"
                    disabled
                  />
                </div>
                <div className="space-y-2 my-4">
                  <Label htmlFor="text" className="font-bold text-base">
                    Alternative Mobile Number-
                  </Label>
                  <Input
                    id="text"
                    type="text"
                    className=" text-black text-lg"
                    placeholder="Prajakta Jadhav"
                    required
                    value="-"
                    disabled
                  />
                </div>
                <div className="space-y-2 my-4">
                  <Label htmlFor="text" className="font-bold text-base">
                    Address -
                  </Label>
                  <Input
                    id="text"
                    type="text"
                    className=" text-black text-lg"
                    placeholder="Prajakta Jadhav"
                    required
                    value="A/P: Bohali"
                    disabled
                  />
                </div>
                <div className="space-y-2 my-4">
                  <Label htmlFor="text" className="font-bold text-base">
                    Taluka -
                  </Label>
                  <Input
                    id="text"
                    type="text"
                    className=" text-black text-lg"
                    placeholder="Pandharpur"
                    required
                    value="Pandharpur"
                    disabled
                  />
                </div>
                <div className="space-y-2 my-4">
                  <Label htmlFor="text" className="font-bold text-base">
                    District -
                  </Label>
                  <Input
                    id="text"
                    type="text"
                    className=" text-black text-lg"
                    placeholder="Prajakta Jadhav"
                    required
                    value="Solapur"
                    disabled
                  />
                </div>
                <div className="space-y-2 my-4">
                  <Label htmlFor="text" className="font-bold text-base">
                    Pincode -
                  </Label>
                  <Input
                    id="text"
                    type="text"
                    className=" text-black text-lg"
                    placeholder="Prajakta Jadhav"
                    required
                    value="413317"
                    disabled
                  />
                </div>
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

export default UserProfile;
