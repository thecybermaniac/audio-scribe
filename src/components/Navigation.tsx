
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mic } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
              <Mic className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">AudioScribe</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
              Pricing
            </Link>
            <Link to="/dashboard" className="text-slate-600 hover:text-slate-900 transition-colors">
              Dashboard
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <Button asChild variant="ghost">
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
