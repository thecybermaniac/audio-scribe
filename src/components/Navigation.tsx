
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Mic, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          
          {/* <div className="hidden md:flex items-center space-x-8">
            <Link to="/pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
              Pricing
            </Link>
            <Link to="/dashboard" className="text-slate-600 hover:text-slate-900 transition-colors">
              Dashboard
            </Link>
          </div> */}

          {/* Desktop Auth Links */}
          <div className="hidden md:flex items-center space-x-3">
            <Button asChild variant="ghost">
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-white">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex flex-col space-y-4">
                    <Link 
                      to="/pricing" 
                      className="text-slate-600 hover:text-slate-900 transition-colors text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Pricing
                    </Link>
                    <Link 
                      to="/dashboard" 
                      className="text-slate-600 hover:text-slate-900 transition-colors text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                  </div>
                  
                  <div className="border-t border-slate-200 pt-6">
                    <div className="flex flex-col space-y-3">
                      <Button asChild variant="ghost" className="justify-start">
                        <Link to="/login" onClick={() => setIsOpen(false)}>Log in</Link>
                      </Button>
                      <Button asChild className="bg-blue-600 hover:bg-blue-700">
                        <Link to="/signup" onClick={() => setIsOpen(false)}>Sign up</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
