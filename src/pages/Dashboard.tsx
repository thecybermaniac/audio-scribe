
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Upload, Search, FileAudio, Calendar, Clock, User, Settings, LogOut, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import DragDropUpload from "@/components/DragDropUpload";
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
              <p className="text-slate-600">Welcome back! Here's what's happening with your meetings.</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Upload Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-slate-900">Upload Meeting Audio</h2>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  New Upload
                </Button>
              </div>
              <DragDropUpload />
            </section>

            {/* Recent Meetings Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-slate-900">Recent Meetings</h2>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      placeholder="Search meetings..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>

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
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
