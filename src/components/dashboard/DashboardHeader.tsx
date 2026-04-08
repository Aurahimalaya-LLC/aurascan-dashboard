import { motion } from "framer-motion";
import { Bell, Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const DashboardHeader = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-between border-b border-border/50 bg-card/80 backdrop-blur-md px-6 py-4 sticky top-0 z-50"
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm font-['Space_Grotesk']">A</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight font-['Space_Grotesk']">AuraScan</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-64 pl-9 bg-secondary/50 border-border/50 focus:bg-card"
          />
        </div>

        <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-muted-foreground">
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>

        <Button variant="ghost" size="icon" className="relative text-muted-foreground">
          <Bell className="h-4 w-4" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive" />
        </Button>

        <Avatar className="h-9 w-9 border-2 border-primary/20">
          <AvatarImage src="" />
          <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">AU</AvatarFallback>
        </Avatar>
      </div>
    </motion.header>
  );
};

export default DashboardHeader;
