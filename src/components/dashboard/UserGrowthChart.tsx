import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { userGrowthData } from "@/lib/mock-data";

const UserGrowthChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Card className="border-border/50">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">User Growth</CardTitle>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Total
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-accent" />
                Active
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={userGrowthData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 50%)" tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 50%)" tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(220, 15%, 90%)",
                  borderRadius: "0.75rem",
                  boxShadow: "0 4px 16px hsl(225 25% 12% / 0.08)",
                  fontSize: 13,
                }}
              />
              <Bar dataKey="users" fill="hsl(250, 65%, 55%)" radius={[6, 6, 0, 0]} barSize={20} />
              <Bar dataKey="active" fill="hsl(165, 60%, 45%)" radius={[6, 6, 0, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default UserGrowthChart;
