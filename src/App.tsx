import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import TranscriptDetail from "./pages/TranscriptDetail";
import Transcripts from "./pages/Transcripts";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Settings from "./pages/Settings";
import ConfirmEmail from "./pages/ConfirmEmail";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/dashboard"
              element={
                <Layout
                  header={{
                    title: "Dashboard",
                    description:
                      "Welcome back! Here's what's happening with your meetings.",
                  }}
                >
                  <Dashboard />
                </Layout>
              }
            />
            <Route
              path="/transcripts"
              element={
                <Layout
                  header={{
                    title: "Transcripts",
                    description:
                      "Manage and view all your meeting transcripts.",
                  }}
                >
                  <Transcripts />
                </Layout>
              }
            />
            <Route path="/transcript/:id" element={<TranscriptDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/settings"
              element={
                <Layout
                  header={{
                    title: "Settings",
                    description: "Manage your account settings.",
                  }}
                >
                  <Settings />
                </Layout>
              }
            />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
