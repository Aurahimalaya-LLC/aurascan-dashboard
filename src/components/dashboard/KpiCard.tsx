import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface KpiCardProps {
  label: string;
  value: number;
  change: number;
  prefix?: string;
  suffix?: string;
  icon: React.ReactNode;
  index: number;
}

const KpiCard = ({ label, value, change, prefix = "", suffix = "", icon, index }: KpiCardProps) => {
  const isPositive = change >= 0;

  const formatValue = (val: number) => {
    if (val >= 1000) return `${prefix}${(val / 1000).toFixed(val >= 10000 ? 0 : 1)}k${suffix}`;
    return `${prefix}${val.toLocaleString()}${suffix}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
    >
      <Card className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">{label}</p>
              <p className="text-3xl font-bold tracking-tight font-['Space_Grotesk']">
                {formatValue(value)}
              </p>
              <div className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                isPositive
                  ? "bg-accent/10 text-accent"
                  : "bg-destructive/10 text-destructive"
              }`}>
                {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {isPositive ? "+" : ""}{change}%
              </div>
            </div>
            <div className="rounded-xl bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              {icon}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default KpiCard;
