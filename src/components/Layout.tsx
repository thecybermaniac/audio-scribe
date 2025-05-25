import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Upload,
  Search,
  FileAudio,
  Calendar,
  Clock,
  User,
  LogOut,
  Plus,
  Menu,
} from "lucide-react";
import { Link } from "react-router-dom";
import DragDropUpload from "@/components/DragDropUpload";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const Layout = ({
  children,
  header,
}: {
  children: React.ReactNode;
  header: { title: string; description: string };
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex w-full">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </SheetContent>
      </Sheet>

      <div
        className={cn(
          "flex-1 flex flex-col min-w-0 sm:mb-8 mb-0",
          collapsed ? "lg:ml-20" : "lg:ml-64"
        )}
      >
        {/* Top Navigation */}
        <header className={cn("fixed right-0 left-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 lg:px-6 py-4 transition-all duration-300", collapsed ? "lg:left-20" : "lg:left-64")}>
          {/* Header Content */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Mobile Menu Button */}
              <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
              </Sheet>

              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {header.title}
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium lg:text-base hidden sm:block">
                  {header.description}  
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-3">
              <ThemeToggle />
            </div>
          </div>
        </header>
        <div className="pt-24">
        {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
