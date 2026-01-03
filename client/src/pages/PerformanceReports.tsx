import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts";
import {
  Download,
  TrendingUp,
  TrendingDown,
  Calendar,
  User,
  Target,
  Zap,
  Award,
  AlertCircle,
  CheckCircle,
  Clock,
  Activity,
} from "lucide-react";
import { PerformanceIcon, AnalyticsIcon, BrainIcon, ChatIcon, PlayerIcon, GoalIcon, TrainingIcon, CoachingIcon, StatsIcon, DashboardIcon, ReportsIcon, SearchIcon, FilterIcon, EditIcon, DeleteIcon } from "@/components/icons/AlphaFootIcons";
import { useLocation } from "wouter";

export default function PerformanceReports() {
  const [, navigate] = useLocation();
  const [selectedPlayer, setSelectedPlayer] = useState("أحمد محمود");
  const [reportType, setReportType] = useState("overview");
  const [dateRange, setDateRange] = useState("month");

  // Performance Data
  const performanceTimeline = [
    { date: "1 يناير", تقنية: 65, بدنية: 70, معرفية: 60, نفسية: 68 },
    { date: "8 يناير", تقنية: 70, بدنية: 75, معرفية: 65, نفسية: 72 },
    { date: "15 يناير", تقنية: 75, بدنية: 80, معرفية: 72, نفسية: 78 },
    { date: "22 يناير", تقنية: 82, بدنية: 85, معرفية: 80, نفسية: 84 },
    { date: "29 يناير", تقنية: 88, بدنية: 90, معرفية: 87, نفسية: 89 },
  ];

  const skillsRadar = [
    { skill: "التقنية", value: 88, fullMark: 100 },
    { skill: "البدنية", value: 90, fullMark: 100 },
    { skill: "المعرفية", value: 87, fullMark: 100 },
    { skill: "النفسية", value: 89, fullMark: 100 },
    { skill: "التكتيكية", value: 85, fullMark: 100 },
  ];

  const comparisonData = [
    { metric: "السرعة", player: 85, average: 75 },
    { metric: "الدقة", player: 90, average: 80 },
    { metric: "التحمل", player: 88, average: 78 },
    { metric: "القوة", player: 92, average: 82 },
    { metric: "المرونة", player: 80, average: 75 },
  ];

  const trainingEffectiveness = [
    { week: "الأسبوع 1", attendance: 95, intensity: 70, improvement: 5 },
    { week: "الأسبوع 2", attendance: 100, intensity: 80, improvement: 8 },
    { week: "الأسبوع 3", attendance: 90, intensity: 85, improvement: 12 },
    { week: "الأسبوع 4", attendance: 100, intensity: 90, improvement: 15 },
  ];

  const injuryRiskData = [
    { area: "الكاحل", risk: 15, history: 1 },
    { area: "الركبة", risk: 20, history: 0 },
    { area: "الفخذ", risk: 10, history: 1 },
    { area: "الظهر", risk: 5, history: 0 },
    { area: "الكتف", risk: 8, history: 0 },
  ];

  const stats = [
    {
      label: "متوسط الأداء",
      value: "88%",
      change: "+12%",
      icon: TrendingUp,
      color: "text-green-400",
    },
    {
      label: "معدل التحسن",
      value: "3.5%",
      change: "أسبوعي",
      icon: Activity,
      color: "text-cyan-400",
    },
    {
      label: "الحضور",
      value: "96%",
      change: "+2%",
      icon: CheckCircle,
      color: "text-blue-400",
    },
    {
      label: "مخاطر الإصابة",
      value: "منخفضة",
      change: "-5%",
      icon: AlertCircle,
      color: "text-yellow-400",
    },
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
              <User className="w-10 h-10 text-cyan-400" />
              تقارير الأداء الفردية
            </h1>
            <p className="text-gray-400 text-lg">تحليل شامل لأداء اللاعب والتطور الزمني</p>
          </div>
          <Button className="bg-cyan-500 hover:bg-cyan-600 flex items-center gap-2">
            <Download className="w-4 h-4" />
            تحميل التقرير
          </Button>
        </div>

        {/* Player Selection and Filters */}
        <div className="mb-8 grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-400 mb-2">اختر اللاعب</label>
            <select
              value={selectedPlayer}
              onChange={(e) => setSelectedPlayer(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:border-cyan-500/50"
            >
              <option>أحمد محمود</option>
              <option>محمد علي</option>
              <option>فاطمة أحمد</option>
              <option>سارة محمد</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-400 mb-2">نوع التقرير</label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:border-cyan-500/50"
            >
              <option value="overview">نظرة عامة</option>
              <option value="skills">المهارات</option>
              <option value="training">التدريب</option>
              <option value="injury">الإصابات</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-400 mb-2">الفترة الزمنية</label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:border-cyan-500/50"
            >
              <option value="week">هذا الأسبوع</option>
              <option value="month">هذا الشهر</option>
              <option value="quarter">هذا الربع</option>
              <option value="year">هذه السنة</option>
            </select>
          </div>
        </div>

        {/* Key Stats */}
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
                      <p className={`text-2xl font-bold mt-2 ${stat.color}`}>{stat.value}</p>
                      <p className="text-xs text-gray-400 mt-1">{stat.change}</p>
                    </div>
                    <Icon className="w-8 h-8 text-cyan-500 opacity-50" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts */}
        <div className="space-y-8">
          {/* Performance Timeline */}
          {(reportType === "overview" || reportType === "skills") && (
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>تطور الأداء الزمني</CardTitle>
                <CardDescription>تطور جميع جوانب الأداء على مدار الشهر</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={performanceTimeline}>
                    <defs>
                      <linearGradient id="colorTechnique" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorPhysical" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="date" stroke="#94A3B8" />
                    <YAxis stroke="#94A3B8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1E293B",
                        border: "1px solid #06B6D4",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="تقنية"
                      stroke="#06B6D4"
                      fillOpacity={1}
                      fill="url(#colorTechnique)"
                    />
                    <Area
                      type="monotone"
                      dataKey="بدنية"
                      stroke="#0EA5E9"
                      fillOpacity={1}
                      fill="url(#colorPhysical)"
                    />
                    <Area type="monotone" dataKey="معرفية" stroke="#3B82F6" />
                    <Area type="monotone" dataKey="نفسية" stroke="#8B5CF6" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}

          {/* Skills Radar */}
          {(reportType === "overview" || reportType === "skills") && (
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
                <CardHeader>
                  <CardTitle>تقييم المهارات</CardTitle>
                  <CardDescription>تقييم شامل لجميع المهارات</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={skillsRadar}>
                      <PolarGrid stroke="#334155" />
                      <PolarAngleAxis dataKey="skill" stroke="#94A3B8" />
                      <PolarRadiusAxis stroke="#94A3B8" />
                      <Radar
                        name="التقييم"
                        dataKey="value"
                        stroke="#06B6D4"
                        fill="#06B6D4"
                        fillOpacity={0.6}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1E293B",
                          border: "1px solid #06B6D4",
                          borderRadius: "8px",
                        }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Comparison with Average */}
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
                <CardHeader>
                  <CardTitle>المقارنة مع المتوسط</CardTitle>
                  <CardDescription>مقارنة أداء اللاعب مع متوسط الفريق</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="metric" stroke="#94A3B8" />
                      <YAxis stroke="#94A3B8" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1E293B",
                          border: "1px solid #06B6D4",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                      <Bar dataKey="player" fill="#06B6D4" name="اللاعب" />
                      <Bar dataKey="average" fill="#64748B" name="المتوسط" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Training Effectiveness */}
          {(reportType === "overview" || reportType === "training") && (
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>فعالية التدريب</CardTitle>
                <CardDescription>متابعة الحضور والشدة والتحسن</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trainingEffectiveness}>
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
                    <Line type="monotone" dataKey="attendance" stroke="#06B6D4" strokeWidth={2} name="الحضور %" />
                    <Line type="monotone" dataKey="intensity" stroke="#0EA5E9" strokeWidth={2} name="الشدة %" />
                    <Line type="monotone" dataKey="improvement" stroke="#10B981" strokeWidth={2} name="التحسن %" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}

          {/* Injury Risk Assessment */}
          {(reportType === "overview" || reportType === "injury") && (
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>تقييم مخاطر الإصابة</CardTitle>
                <CardDescription>تحليل مناطق الجسم المعرضة للإصابة</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="area" stroke="#94A3B8" />
                    <YAxis stroke="#94A3B8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1E293B",
                        border: "1px solid #06B6D4",
                        borderRadius: "8px",
                      }}
                    />
                    <Scatter name="مخاطر الإصابة" data={injuryRiskData} fill="#EF4444" />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}

          {/* Recommendations */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle>التوصيات والملاحظات</CardTitle>
              <CardDescription>توصيات مخصصة بناءً على البيانات</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  type: "success",
                  title: "تحسن ملحوظ",
                  description: "تحسن كبير في الأداء البدنية بنسبة 15% خلال الشهر الماضي",
                },
                {
                  type: "warning",
                  title: "تنبيه",
                  description: "يجب زيادة التركيز على المهارات المعرفية والتكتيكية",
                },
                {
                  type: "info",
                  title: "ملاحظة",
                  description: "معدل الحضور ممتاز (96%)، استمر في الالتزام",
                },
              ].map((rec, idx) => (
                <div key={idx} className="p-4 bg-slate-800/30 rounded-lg border border-cyan-500/10 flex gap-3">
                  <div className={`w-1 rounded-full ${rec.type === "success" ? "bg-green-500" : rec.type === "warning" ? "bg-yellow-500" : "bg-cyan-500"}`} />
                  <div>
                    <p className="font-semibold text-white">{rec.title}</p>
                    <p className="text-sm text-gray-400">{rec.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
