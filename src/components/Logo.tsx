import { ShieldCheck } from "lucide-react";
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 rounded-xl bg-primary/10 border border-primary/30">
        <ShieldCheck className="w-6 h-6 text-primary" />
      </div>
      <span className="font-bold text-lg tracking-tight">Auth Application</span>
    </div>
  );
};

export default Logo;
