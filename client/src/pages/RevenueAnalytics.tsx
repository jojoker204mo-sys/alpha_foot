import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  TrendingUp,
  Users,
  BarChart3,
  PieChart,
  LineChart,
  ArrowUp,
  ArrowDown,
  Download,
  Filter,
} from "lucide-react";
import { PerformanceIcon, AnalyticsIcon, BrainIcon, ChatIcon, PlayerIcon, GoalIcon, TrainingIcon, CoachingIcon, StatsIcon, DashboardIcon, ReportsIcon, SearchIcon, FilterIcon, EditIcon, DeleteIcon } from "@/components/icons/AlphaFootIcons";
import { useLocation } from "wouter";
import {
  LineChart as RechartsLineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function RevenueAnalytics() {
  const [, navigate] = useLocation();
  const [timeRange, setTimeRange] = useState("month");

  // Sample data
  const revenueData = [
    { month: "يناير", subscriptions: 45000, partnerships: 32000, ads: 18000 },
    { month: "فبراير", subscriptions: 52000, partnerships: 38000, ads: 22000 },
    { month: "مارس", subscriptions: 61000, partnerships: 45000, ads: 28000 },
    { month: "أبريل", subscriptions: 73000, partnerships: 52000, ads: 35000 },
    { month: "مايو", subscriptions: 85000, partnerships: 61000, ads: 42000 },
    { month: "يونيو", subscriptions: 98000, partnerships: 72000, ads: 51000 },
  ];

  const revenueBySource = [
    { name: "الاشتراكات", value: 45, color: "#06b6d4" },
    { name: "الشراكات", value: 35, color: "#0ea5e9" },
    { name: "الإعلانات", value: 15, color: "#3b82f6" },
    { name: "أخرى", value: 5, color: "#1e40af" },
  ];

  const metrics = [
    {
      title: "إجمالي الإيرادات",
      value: "2,847,000 ج.م",
      change: "+23%",
      positive: true,
      icon: DollarSign,
    },
    {
      title: "المشتركين النشطين",
      value: "12,450",
      change: "+18%",
      positive: true,
      icon: Users,
    },
    {
      title: "متوسط قيمة الاشتراك",
      value: "285 ج.م",
      change: "+8%",
      positive: true,
      icon: TrendingUp,
    },
    {
      title: "معدل الاحتفاظ",
      value: "87%",
      change: "-2%",
      positive: false,
      icon: BarChart3,
    },
  ];

  const topPartners = [
    { name: "نادي الأهلي", revenue: 450000, status: "نشط" },
    { name: "نادي الزمالك", revenue: 380000, status: "نشط" },
    { name: "أكاديمية النجم", revenue: 320000, status: "نشط" },
    { name: "شركة Nike", revenue: 280000, status: "نشط" },
    { name: "قناة ON Sport", revenue: 250000, status: "نشط" },
  ];

  const subscriptionBreakdown = [
    { plan: "أساسي", users: 3200, revenue: 316800, churn: "5%" },
    { plan: "احترافي", users: 6800, revenue: 1626400, churn: "3%" },
    { plan: "نخبة", users: 2450, revenue: 1470300, churn: "1%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/30 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="font-bold text-white">AF</span>
            </div>
            <span className="text-xl font-bold">Alpha Foot</span>
          </div>
          <Button
            onClick={() => navigate("/admin")}
            variant="outline"
            className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
          >
            العودة
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <DollarSign className="w-10 h-10 text-cyan-400" />
              تحليلات الإيرادات
            </h1>
            <p className="text-gray-400">لوحة تحكم شاملة لإيراداتك</p>
          </div>
          <div className="flex gap-2">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:border-cyan-500/50"
            >
              <option value="week">أسبوع</option>
              <option value="month">شهر</option>
              <option value="quarter">ربع سنة</option>
              <option value="year">سنة</option>
            </select>
            <Button className="bg-cyan-500 hover:bg-cyan-600 flex items-center gap-2">
              <Download className="w-4 h-4" />
              تحميل التقرير
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <Card
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <Icon className="w-8 h-8 text-cyan-400" />
                    <div
                      className={`flex items-center gap-1 text-sm font-semibold ${
                        metric.positive ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {metric.positive ? (
                        <ArrowUp className="w-4 h-4" />
                      ) : (
                        <ArrowDown className="w-4 h-4" />
                      )}
                      {metric.change}
                    </div>
                  </div>
                  <h3 className="text-gray-400 text-sm mb-2">{metric.title}</h3>
                  <p className="text-2xl font-bold">{metric.value}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Revenue Trend */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="w-5 h-5 text-cyan-400" />
                اتجاه الإيرادات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsLineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "1px solid #06b6d4",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="subscriptions"
                    stroke="#06b6d4"
                    name="الاشتراكات"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="partnerships"
                    stroke="#0ea5e9"
                    name="الشراكات"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="ads"
                    stroke="#3b82f6"
                    name="الإعلانات"
                    strokeWidth={2}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Revenue by Source */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-cyan-400" />
                توزيع الإيرادات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={revenueBySource}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {revenueBySource.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {revenueBySource.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span>{item.name}</span>
                    </div>
                    <span className="font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Partners */}
        <Card className="mb-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
          <CardHeader>
            <CardTitle>أفضل الشركاء</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPartners.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg border border-cyan-500/10"
                >
                  <div>
                    <h3 className="font-semibold">{partner.name}</h3>
                    <p className="text-sm text-gray-400">{partner.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-cyan-400">{partner.revenue.toLocaleString()} ج.م</p>
                    <p className="text-sm text-gray-400">هذا الشهر</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subscription Breakdown */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
          <CardHeader>
            <CardTitle>تفصيل الاشتراكات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-cyan-500/20">
                    <th className="text-left py-3 px-4 font-semibold">الخطة</th>
                    <th className="text-center py-3 px-4 font-semibold">المستخدمون</th>
                    <th className="text-center py-3 px-4 font-semibold">الإيرادات</th>
                    <th className="text-center py-3 px-4 font-semibold">معدل الانقطاع</th>
                  </tr>
                </thead>
                <tbody>
                  {subscriptionBreakdown.map((sub, idx) => (
                    <tr key={idx} className="border-b border-cyan-500/10">
                      <td className="py-3 px-4 font-semibold">{sub.plan}</td>
                      <td className="text-center py-3 px-4">{sub.users.toLocaleString()}</td>
                      <td className="text-center py-3 px-4 text-cyan-400 font-semibold">
                        {sub.revenue.toLocaleString()} ج.م
                      </td>
                      <td className="text-center py-3 px-4">
                        <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                          {sub.churn}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
