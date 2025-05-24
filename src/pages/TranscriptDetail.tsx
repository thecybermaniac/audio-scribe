
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Copy, 
  Download, 
  Share2, 
  Calendar, 
  Clock, 
  Users,
  CheckCircle2
} from "lucide-react";
import Sidebar from "@/components/Sidebar";

const TranscriptDetail = () => {
  const { id } = useParams();
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  // Mock data - in real app this would come from API
  const meetingData = {
    title: "Weekly Team Standup",
    date: "January 20, 2024",
    duration: "45 minutes",
    participants: ["John Doe", "Sarah Chen", "Mike Johnson", "Lisa Wang", "Alex Turner"]
  };

  const transcript = `
[00:00:05] John Doe: Good morning everyone, thanks for joining today's standup. Let's go around and share our updates.

[00:00:12] Sarah Chen: I'll start. Yesterday I completed the user authentication flow for the mobile app. Today I'm focusing on implementing the password reset functionality. No blockers at the moment.

[00:00:28] Mike Johnson: I finished the API endpoints for the notification system. Currently working on the frontend integration. I might need some help with the WebSocket implementation later this week.

[00:00:45] Lisa Wang: I've been working on the design system documentation. Completed the component library guidelines yesterday. Today I'm reviewing the accessibility standards and will share the findings with the team by end of day.

[00:01:02] Alex Turner: I wrapped up the database optimization tasks. The query performance has improved by 40%. Currently investigating the deployment pipeline issues we discussed last week.

[00:01:18] John Doe: Great updates everyone. Let's quickly review the action items from our last meeting...
  `;

  const summary = `
This weekly standup covered key progress updates from all team members. The team is making strong progress on the mobile app authentication, notification system, and design documentation.

**Key Highlights:**
- Mobile app authentication flow completed by Sarah
- API endpoints for notifications finished by Mike  
- Design system documentation being finalized by Lisa
- Database optimization showing 40% performance improvement

**Current Focus Areas:**
- Password reset functionality implementation
- WebSocket integration for notifications
- Accessibility standards review
- Deployment pipeline improvements

The team is on track with current sprint goals and no major blockers were identified.
  `;

  const actionItems = [
    {
      task: "Implement password reset functionality",
      assignee: "Sarah Chen",
      dueDate: "January 22, 2024",
      priority: "High",
      completed: false
    },
    {
      task: "Complete WebSocket implementation for notifications",
      assignee: "Mike Johnson",
      dueDate: "January 25, 2024",
      priority: "Medium",
      completed: false
    },
    {
      task: "Share accessibility standards findings",
      assignee: "Lisa Wang",
      dueDate: "January 20, 2024",
      priority: "High",
      completed: true
    },
    {
      task: "Resolve deployment pipeline issues",
      assignee: "Alex Turner",
      dueDate: "January 24, 2024",
      priority: "High",
      completed: false
    }
  ];

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">{meetingData.title}</h1>
                <div className="flex items-center space-x-4 mt-1 text-sm text-slate-500">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {meetingData.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {meetingData.duration}
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {meetingData.participants.length} participants
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="transcript" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="transcript">Full Transcript</TabsTrigger>
                <TabsTrigger value="summary">AI Summary</TabsTrigger>
                <TabsTrigger value="actions">Action Items</TabsTrigger>
              </TabsList>

              <TabsContent value="transcript">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Meeting Transcript</CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(transcript, 'transcript')}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        {copiedSection === 'transcript' ? 'Copied!' : 'Copy Transcript'}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700 font-sans">
                        {transcript}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="summary">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>AI-Generated Summary</CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(summary, 'summary')}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        {copiedSection === 'summary' ? 'Copied!' : 'Copy Summary'}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <div className="text-slate-700 leading-relaxed whitespace-pre-line">
                        {summary}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Participants */}
                <Card>
                  <CardHeader>
                    <CardTitle>Meeting Participants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {meetingData.participants.map((participant, index) => (
                        <Badge key={index} variant="secondary">
                          {participant}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="actions">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Action Items</CardTitle>
                      <Badge variant="secondary">
                        {actionItems.filter(item => !item.completed).length} pending
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {actionItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-4 border border-slate-200 rounded-lg"
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            {item.completed ? (
                              <CheckCircle2 className="h-5 w-5 text-green-600" />
                            ) : (
                              <div className="h-5 w-5 border-2 border-slate-300 rounded-full"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className={`font-medium ${item.completed ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                              {item.task}
                            </p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-slate-500">
                              <span>Assigned to: <span className="font-medium">{item.assignee}</span></span>
                              <span>Due: {item.dueDate}</span>
                              <Badge 
                                variant={item.priority === 'High' ? 'destructive' : item.priority === 'Medium' ? 'default' : 'secondary'}
                                className="text-xs"
                              >
                                {item.priority}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TranscriptDetail;
