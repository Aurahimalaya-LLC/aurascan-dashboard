import { DollarSign, Users, ShoppingCart, Target } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KpiCard from "@/components/dashboard/KpiCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import UserGrowthChart from "@/components/dashboard/UserGrowthChart";
import SalesPieChart from "@/components/dashboard/SalesPieChart";
import TransactionsTable from "@/components/dashboard/TransactionsTable";
import { kpiMetrics } from "@/lib/mock-data";

const kpiIcons = [
  <DollarSign className="h-5 w-5" />,
  <Users className="h-5 w-5" />,
  <ShoppingCart className="h-5 w-5" />,
  <Target className="h-5 w-5" />,
];

const kpiConfig: Array<{ value: number; change: number; label: string; prefix?: string; suffix?: string }> = [
  { ...kpiMetrics.totalRevenue, prefix: "$" },
  { ...kpiMetrics.totalUsers },
  { ...kpiMetrics.avgOrderValue, prefix: "$" },
  { ...kpiMetrics.conversionRate, suffix: "%" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpiConfig.map((kpi, i) => (
            <KpiCard
              key={kpi.label}
              label={kpi.label}
              value={kpi.value}
              change={kpi.change}
              prefix={kpi.prefix}
              suffix={kpi.suffix}
              icon={kpiIcons[i]}
              index={i}
            />
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueChart />
          <UserGrowthChart />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TransactionsTable />
          </div>
          <SalesPieChart />
        </div>
      </main>
    </div>
  );
};

export default Index;
