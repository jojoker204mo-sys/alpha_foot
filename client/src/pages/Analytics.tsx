import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  Download,
  Calendar,
  Users,
  Target,
  Zap,
  Award,
  Activity,
} from "lucide-react";
import { PerformanceIcon, AnalyticsIcon, BrainIcon, ChatIcon, PlayerIcon, GoalIcon, TrainingIcon, CoachingIcon, StatsIcon, DashboardIcon, ReportsIcon, SearchIcon, FilterIcon, EditIcon, DeleteIcon } from "@/components/icons/AlphaFootIcons";
import { useLocation } from "wouter";

export default function Analytics() {
  const [, navigate] = useLocation();
  const [dateRange, setDateRange] = useState("month");

  // Sample data
  const performanceData = [
    { week: "الأسبوع 1", تقنية: 65, بدنية: 70, معرفية: 60 },
    { week: "الأسبوع 2", تقنية: 72, بدنية: 75, معرفية: 68 },
    { week: "الأسبوع 3", تقنية: 78, بدنية: 82, معرفية: 75 },
    { week: "الأسبوع 4", تقنية: 85, بدنية: 88, معرفية: 82 },
  ];

  const userGrowthData = [
    { month: "يناير", لاعبون: 1000, مدربون: 150, أكاديميات: 20 },
    { month: "فبراير", لاعبون: 1500, مدربون: 220, أكاديميات: 35 },
    { month: "مارس", لاعبون: 2200, مدربون: 310, أكاديميات: 50 },
    { month: "أبريل", لاعبون: 3100, مدربون: 420, أكاديميات: 70 },
  ];

  const skillDistributionData = [
    { name: "تقنية", value: 28 },
    { name: "بدنية", value: 25 },
    { name: "معرفية", value: 22 },
    { name: "نفسية", value: 15 },
    { name: "أخرى", value: 10 },
  ];

  const COLORS = ["#06B6D4", "#0EA5E9", "#3B82F6", "#8B5CF6", "#EC4899"];

  const stats = [
    { label: "إجمالي المستخدمين", value: "3,100+", icon: Users, change: "+45%" },
    { label: "معدل النشاط", value: "87%", icon: Activity, change: "+12%" },
    { label: "الإنجازات المحققة", value: "450+", icon: Award, change: "+28%" },
    { label: "متوسط التحسن", value: "23%", icon: TrendingUp, change: "+8%" },
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
            onClick={() => navigate("/dashboard")}
            variant="outline"
            className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
          >
            العودة
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <BarChart className="w-10 h-10 text-cyan-400" />
              نظام التقارير والتحليلات
            </h1>
            <p className="text-gray-400 text-lg">تحليلات شاملة لأداء المستخدمين والمنصة</p>
          </div>
          <div className="flex gap-2">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:border-cyan-500/50"
            >
              <option value="week">هذا الأسبوع</option>
              <option value="month">هذا الشهر</option>
              <option value="quarter">هذا الربع</option>
              <option value="year">هذه السنة</option>
            </select>
            <Button className="bg-cyan-500 hover:bg-cyan-600 flex items-center gap-2">
              <Download className="w-4 h-4" />
              تحميل
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                      <p className="text-2xl font-bold text-cyan-400 mt-2">{stat.value}</p>
                      <p className="text-xs text-green-400 mt-1">{stat.change}</p>
                    </div>
                    <Icon className="w-8 h-8 text-cyan-500 opacity-50" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Performance Chart */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle>تطور الأداء</CardTitle>
              <CardDescription>تطور الأداء على مدى الشهر</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="week" stroke="#94A3B8" />
                  <YAxis stroke="#94A3B8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1E293B",
                      border: "1px solid #06B6D4",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="تقنية" stroke="#06B6D4" strokeWidth={2} />
                  <Line type="monotone" dataKey="بدنية" stroke="#0EA5E9" strokeWidth={2} />
                  <Line type="monotone" dataKey="معرفية" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* User Growth Chart */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle>نمو المستخدمين</CardTitle>
              <CardDescription>نمو المستخدمين حسب النوع</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94A3B8" />
                  <YAxis stroke="#94A3B8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1E293B",
                      border: "1px solid #06B6D4",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="لاعبون" fill="#06B6D4" />
                  <Bar dataKey="مدربون" fill="#0EA5E9" />
                  <Bar dataKey="أكاديميات" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Skill Distribution */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle>توزيع المهارات</CardTitle>
              <CardDescription>توزيع تركيز التدريب على المهارات</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={skillDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {skillDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1E293B",
                      border: "1px solid #06B6D4",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top Performers */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle>أفضل الأداء</CardTitle>
              <CardDescription>أفضل المستخدمين أداءً</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "أحمد محمود", score: 95, position: "مهاجم" },
                  { name: "فاطمة أحمد", score: 92, position: "وسط" },
                  { name: "محمد علي", score: 88, position: "مدافع" },
                  { name: "سارة محمد", score: 85, position: "حارس" },
                  { name: "خالد سالم", score: 82, position: "مهاجم" },
                ].map((performer, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
                    <div>
                      <p className="font-semibold">{performer.name}</p>
                      <p className="text-sm text-gray-400">{performer.position}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-cyan-400">{performer.score}</p>
                      <div className="w-24 h-2 bg-slate-700/50 rounded-full mt-1">
                        <div
                          className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                          style={{ width: `${performer.score}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
