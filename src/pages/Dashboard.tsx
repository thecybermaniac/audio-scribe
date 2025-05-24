
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Upload, Search, FileAudio, Calendar, Clock, User, Settings, LogOut, Plus, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import DragDropUpload from "@/components/DragDropUpload";
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const recentMeetings = [
    {
      id: "1",
      title: "Weekly Team Standup",
      date: "2024-01-20",
      duration: "45 min",
      status: "completed",
      participants: 5
    },
    {
      id: "2",
      title: "Product Planning Session",
      date: "2024-01-19",
      duration: "90 min",
      status: "completed",
      participants: 8
    },
    {
      id: "3",
      title: "Client Presentation",
      date: "2024-01-18",
      duration: "60 min",
      status: "processing",
      participants: 3
    },
    {
      id: "4",
      title: "Design Review",
      date: "2024-01-17",
      duration: "30 min",
      status: "completed",
      participants: 4
    }
  ];

  const filteredMeetings = recentMeetings.filter(meeting =>
    meeting.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 flex w-full">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar />
        </SheetContent>
      </Sheet>
      
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation */}
        <header className="bg-white border-b border-slate-200 px-4 lg:px-6 py-4">
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
                <h1 className="text-xl lg:text-2xl font-bold text-slate-900">Dashboard</h1>
                <p className="text-slate-600 text-sm lg:text-base hidden sm:block">Welcome back! Here's what's happening with your meetings.</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-3">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Settings className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Settings</span>
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <User className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Profile</span>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
            {/* Upload Section */}
            <section>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 lg:mb-6 space-y-3 sm:space-y-0">
                <h2 className="text-lg lg:text-xl font-semibold text-slate-900">Upload Meeting Audio</h2>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  New Upload
                </Button>
              </div>
              <DragDropUpload />
            </section>

            {/* Recent Meetings Section */}
            <section>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 lg:mb-6 space-y-3 lg:space-y-0">
                <h2 className="text-lg lg:text-xl font-semibold text-slate-900">Recent Meetings</h2>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      placeholder="Search meetings..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-full sm:w-64"
                    />
                  </div>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Calendar className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>

              {/* Desktop Table View */}
              <div className="hidden lg:block">
                <div className="grid gap-4">
                  {filteredMeetings.map((meeting) => (
                    <Card key={meeting.id} className="hover:shadow-md transition-shadow cursor-pointer">
                      <Link to={`/transcript/${meeting.id}`}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                                <FileAudio className="h-5 w-5 text-blue-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-slate-900">{meeting.title}</h3>
                                <div className="flex items-center space-x-4 mt-1 text-sm text-slate-500">
                                  <span className="flex items-center">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    {meeting.date}
                                  </span>
                                  <span className="flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {meeting.duration}
                                  </span>
                                  <span className="flex items-center">
                                    <User className="h-3 w-3 mr-1" />
                                    {meeting.participants} participants
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Badge 
                                variant={meeting.status === "completed" ? "default" : "secondary"}
                                className={meeting.status === "completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                              >
                                {meeting.status}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Mobile Card View */}
              <div className="lg:hidden">
                <div className="space-y-4">
                  {filteredMeetings.map((meeting) => (
                    <Card key={meeting.id} className="hover:shadow-md transition-shadow">
                      <Link to={`/transcript/${meeting.id}`}>
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center space-x-3 flex-1 min-w-0">
                                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg flex-shrink-0">
                                  <FileAudio className="h-4 w-4 text-blue-600" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <h3 className="font-semibold text-slate-900 text-sm truncate">{meeting.title}</h3>
                                </div>
                              </div>
                              <Badge 
                                variant={meeting.status === "completed" ? "default" : "secondary"}
                                className={`text-xs ${meeting.status === "completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                              >
                                {meeting.status}
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 text-xs text-slate-500">
                              <div className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>{meeting.date}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>{meeting.duration}</span>
                              </div>
                              <div className="flex items-center col-span-2">
                                <User className="h-3 w-3 mr-1" />
                                <span>{meeting.participants} participants</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Empty State */}
              {filteredMeetings.length === 0 && (
                <Card>
                  <CardContent className="p-8 lg:p-12 text-center">
                    <FileAudio className="h-8 lg:h-12 w-8 lg:w-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-base lg:text-lg font-medium text-slate-900 mb-2">No meetings found</h3>
                    <p className="text-slate-600 mb-4 text-sm lg:text-base">
                      {searchTerm ? "Try adjusting your search terms" : "Upload your first meeting audio to get started"}
                    </p>
                    {!searchTerm && (
                      <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                        <FileAudio className="h-4 w-4 mr-2" />
                        Upload Audio
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
