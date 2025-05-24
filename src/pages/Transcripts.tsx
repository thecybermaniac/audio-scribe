
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  User, 
  FileAudio,
  Download,
  Eye,
  Menu
} from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

const Transcripts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const transcripts = [
    {
      id: "1",
      title: "Weekly Team Standup",
      date: "2024-01-20",
      duration: "45 min",
      status: "completed",
      participants: 5,
      fileSize: "15.2 MB"
    },
    {
      id: "2",
      title: "Product Planning Session",
      date: "2024-01-19",
      duration: "90 min",
      status: "completed",
      participants: 8,
      fileSize: "28.7 MB"
    },
    {
      id: "3",
      title: "Client Presentation",
      date: "2024-01-18",
      duration: "60 min",
      status: "processing",
      participants: 3,
      fileSize: "22.1 MB"
    },
    {
      id: "4",
      title: "Design Review",
      date: "2024-01-17",
      duration: "30 min",
      status: "completed",
      participants: 4,
      fileSize: "11.5 MB"
    },
    {
      id: "5",
      title: "Engineering Sync",
      date: "2024-01-16",
      duration: "75 min",
      status: "completed",
      participants: 12,
      fileSize: "35.8 MB"
    },
    {
      id: "6",
      title: "Sales Kickoff",
      date: "2024-01-15",
      duration: "120 min",
      status: "completed",
      participants: 25,
      fileSize: "48.3 MB"
    }
  ];

  const filteredTranscripts = transcripts.filter(transcript => {
    const matchesSearch = transcript.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || transcript.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
                <h1 className="text-xl lg:text-2xl font-bold text-slate-900">Transcripts</h1>
                <p className="text-slate-600 text-sm lg:text-base hidden sm:block">Manage and view all your meeting transcripts</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <FileAudio className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Upload New Audio</span>
              <span className="sm:hidden">Upload</span>
            </Button>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Search and Filter Section */}
            <Card>
              <CardContent className="p-4 lg:p-6">
                <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
                  <div className="flex flex-col sm:flex-row flex-1 items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input
                        placeholder="Search transcripts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Filter className="h-4 w-4 text-slate-500" />
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="border border-slate-200 rounded-md px-3 py-2 text-sm flex-1 sm:flex-none"
                      >
                        <option value="all">All Status</option>
                        <option value="completed">Completed</option>
                        <option value="processing">Processing</option>
                        <option value="failed">Failed</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-sm text-slate-500 text-center lg:text-right">
                    {filteredTranscripts.length} of {transcripts.length} transcripts
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Desktop Table View */}
            <Card className="hidden lg:block">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Meeting Title</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Participants</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>File Size</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTranscripts.map((transcript) => (
                      <TableRow key={transcript.id} className="hover:bg-slate-50">
                        <TableCell className="font-medium">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg">
                              <FileAudio className="h-4 w-4 text-blue-600" />
                            </div>
                            <span>{transcript.title}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-slate-600">
                            <Calendar className="h-3 w-3 mr-1" />
                            {transcript.date}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-slate-600">
                            <Clock className="h-3 w-3 mr-1" />
                            {transcript.duration}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-slate-600">
                            <User className="h-3 w-3 mr-1" />
                            {transcript.participants}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={transcript.status === "completed" ? "default" : "secondary"}
                            className={
                              transcript.status === "completed" 
                                ? "bg-green-100 text-green-800" 
                                : transcript.status === "processing"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }
                          >
                            {transcript.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-slate-600">
                          {transcript.fileSize}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <Button asChild variant="ghost" size="sm">
                              <Link to={`/transcript/${transcript.id}`}>
                                <Eye className="h-4 w-4" />
                              </Link>
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Mobile Scrollable Table */}
            <Card className="lg:hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <div className="min-w-[600px]">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[200px]">Meeting Title</TableHead>
                          <TableHead className="w-[100px]">Date</TableHead>
                          <TableHead className="w-[80px]">Duration</TableHead>
                          <TableHead className="w-[80px]">Status</TableHead>
                          <TableHead className="w-[100px] text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredTranscripts.map((transcript) => (
                          <TableRow key={transcript.id} className="hover:bg-slate-50">
                            <TableCell className="font-medium">
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-lg flex-shrink-0">
                                  <FileAudio className="h-3 w-3 text-blue-600" />
                                </div>
                                <span className="text-sm">{transcript.title}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-sm">{transcript.date}</TableCell>
                            <TableCell className="text-sm">{transcript.duration}</TableCell>
                            <TableCell>
                              <Badge 
                                variant={transcript.status === "completed" ? "default" : "secondary"}
                                className={`text-xs ${
                                  transcript.status === "completed" 
                                    ? "bg-green-100 text-green-800" 
                                    : transcript.status === "processing"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {transcript.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end space-x-1">
                                <Button asChild variant="ghost" size="sm">
                                  <Link to={`/transcript/${transcript.id}`}>
                                    <Eye className="h-3 w-3" />
                                  </Link>
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Download className="h-3 w-3" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Empty State */}
            {filteredTranscripts.length === 0 && (
              <Card>
                <CardContent className="p-8 lg:p-12 text-center">
                  <FileAudio className="h-8 lg:h-12 w-8 lg:w-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-base lg:text-lg font-medium text-slate-900 mb-2">No transcripts found</h3>
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default Transcripts;
