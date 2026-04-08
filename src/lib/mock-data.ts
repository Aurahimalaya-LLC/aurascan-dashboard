export const revenueData = [
  { month: "Jan", revenue: 18500, target: 20000 },
  { month: "Feb", revenue: 22300, target: 21000 },
  { month: "Mar", revenue: 19800, target: 22000 },
  { month: "Apr", revenue: 27400, target: 23000 },
  { month: "May", revenue: 31200, target: 25000 },
  { month: "Jun", revenue: 28900, target: 26000 },
  { month: "Jul", revenue: 34100, target: 28000 },
  { month: "Aug", revenue: 32500, target: 29000 },
  { month: "Sep", revenue: 38200, target: 30000 },
  { month: "Oct", revenue: 35800, target: 31000 },
  { month: "Nov", revenue: 41200, target: 32000 },
  { month: "Dec", revenue: 45600, target: 34000 },
];

export const userGrowthData = [
  { month: "Jan", users: 1240, active: 890 },
  { month: "Feb", users: 1580, active: 1120 },
  { month: "Mar", users: 1890, active: 1340 },
  { month: "Apr", users: 2340, active: 1780 },
  { month: "May", users: 2890, active: 2100 },
  { month: "Jun", users: 3200, active: 2450 },
  { month: "Jul", users: 3780, active: 2890 },
  { month: "Aug", users: 4100, active: 3200 },
  { month: "Sep", users: 4650, active: 3580 },
  { month: "Oct", users: 5100, active: 3900 },
  { month: "Nov", users: 5680, active: 4320 },
  { month: "Dec", users: 6240, active: 4780 },
];

export const salesByCategory = [
  { name: "Electronics", value: 35, fill: "hsl(250, 65%, 55%)" },
  { name: "Clothing", value: 25, fill: "hsl(165, 60%, 45%)" },
  { name: "Home & Garden", value: 20, fill: "hsl(35, 90%, 55%)" },
  { name: "Sports", value: 12, fill: "hsl(340, 70%, 55%)" },
  { name: "Other", value: 8, fill: "hsl(200, 75%, 50%)" },
];

export const recentTransactions = [
  { id: "TXN-001", customer: "Sarah Chen", amount: 2450, status: "completed", date: "2026-04-08" },
  { id: "TXN-002", customer: "Marcus Rivera", amount: 1890, status: "pending", date: "2026-04-08" },
  { id: "TXN-003", customer: "Aiko Tanaka", amount: 3200, status: "completed", date: "2026-04-07" },
  { id: "TXN-004", customer: "James Wilson", amount: 780, status: "failed", date: "2026-04-07" },
  { id: "TXN-005", customer: "Priya Sharma", amount: 5100, status: "completed", date: "2026-04-06" },
  { id: "TXN-006", customer: "Elena Volkov", amount: 1340, status: "pending", date: "2026-04-06" },
];

export const kpiMetrics = {
  totalRevenue: { value: 375500, change: 12.5, label: "Total Revenue" },
  totalUsers: { value: 6240, change: 8.3, label: "Total Users" },
  avgOrderValue: { value: 284, change: -2.1, label: "Avg. Order Value" },
  conversionRate: { value: 3.8, change: 0.5, label: "Conversion Rate" },
};
