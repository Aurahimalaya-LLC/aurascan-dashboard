import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { recentTransactions } from "@/lib/mock-data";

const statusStyles: Record<string, string> = {
  completed: "bg-accent/10 text-accent border-accent/20",
  pending: "bg-chart-3/10 text-[hsl(35,90%,45%)] border-[hsl(35,90%,55%)]/20",
  failed: "bg-destructive/10 text-destructive border-destructive/20",
};

const TransactionsTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      <Card className="border-border/50">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>
            <button className="text-sm text-primary hover:underline font-medium">View all</button>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-1">
            {recentTransactions.map((txn, i) => (
              <motion.div
                key={txn.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.05 }}
                className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {txn.customer.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{txn.customer}</p>
                    <p className="text-xs text-muted-foreground">{txn.id} · {txn.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className={statusStyles[txn.status]}>
                    {txn.status}
                  </Badge>
                  <span className="text-sm font-semibold w-20 text-right">${txn.amount.toLocaleString()}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TransactionsTable;
