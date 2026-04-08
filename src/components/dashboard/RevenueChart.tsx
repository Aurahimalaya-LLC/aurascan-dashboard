import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { revenueData } from "@/lib/mock-data";

const RevenueChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <Card className="border-border/50">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Revenue Overview</CardTitle>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Revenue
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-primary/30" />
                Target
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(250, 65%, 55%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(250, 65%, 55%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(250, 65%, 55%)" stopOpacity={0.08} />
                  <stop offset="100%" stopColor="hsl(250, 65%, 55%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 50%)" tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 50%)" tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(220, 15%, 90%)",
                  borderRadius: "0.75rem",
                  boxShadow: "0 4px 16px hsl(225 25% 12% / 0.08)",
                  fontSize: 13,
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
              />
              <Area type="monotone" dataKey="target" stroke="hsl(250, 65%, 55%)" strokeWidth={1.5} strokeDasharray="4 4" fill="url(#targetGradient)" strokeOpacity={0.4} />
              <Area type="monotone" dataKey="revenue" stroke="hsl(250, 65%, 55%)" strokeWidth={2.5} fill="url(#revenueGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RevenueChart;
