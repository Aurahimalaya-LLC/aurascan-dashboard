import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { salesByCategory } from "@/lib/mock-data";

const SalesPieChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <Card className="border-border/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">Sales by Category</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={salesByCategory}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={95}
                paddingAngle={3}
                dataKey="value"
                strokeWidth={0}
              >
                {salesByCategory.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(220, 15%, 90%)",
                  borderRadius: "0.75rem",
                  boxShadow: "0 4px 16px hsl(225 25% 12% / 0.08)",
                  fontSize: 13,
                }}
                formatter={(value: number) => [`${value}%`, ""]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {salesByCategory.map((item) => (
              <div key={item.name} className="flex items-center gap-2 text-sm">
                <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.fill }} />
                <span className="text-muted-foreground">{item.name}</span>
                <span className="ml-auto font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SalesPieChart;
