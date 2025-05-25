
import { useState, useEffect } from "react";
import { Coins } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CreditsBalance = () => {
  const [credits, setCredits] = useState(1250); // Mock data - in real app this would come from user state

  return (
    <div className="flex items-center space-x-2">
      <Coins className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      <Badge variant="secondary" className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700">
        {credits.toLocaleString()} credits
      </Badge>
    </div>
  );
};

export default CreditsBalance;
