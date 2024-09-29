"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bell, Home, Menu } from "lucide-react";
import Link from "next/link";
import { allSubjects } from "./Subjects";

export default function Attendence() {
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
        <main className="flex-1 overflow-y-auto p-4">
          <h1 className="mb-4 text-2xl font-bold">Check Attendence</h1>
          <h1 className="text-primary text-center font-bold text-xl mb-5">
            Subjects of current semester
          </h1>
          <div className="grid gap-4">
            {allSubjects.map((item) => (
              <div key={item.id}>
                <Card className="bg-secondary">
                  <CardHeader>
                    <CardTitle className="text-primary">{item.name}</CardTitle>
                    {/* <CardDescription>Currently active projects</CardDescription> */}
                  </CardHeader>
                  <CardContent>
                    <p>Subject Code: {item.code}</p>
                    <p>Attendence : {item.attendence}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarContent() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <h2 className="my-4 mx-2 text-xl font-bold">Campus Connect</h2>
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
