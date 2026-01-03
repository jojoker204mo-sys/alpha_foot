import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Brain, TrendingUp, Activity, Zap, Target, MessageSquare } from "lucide-react";
import { PerformanceIcon, AnalyticsIcon, BrainIcon, ChatIcon, PlayerIcon, GoalIcon } from "@/components/icons/AlphaFootIcons";
import { useLocation } from "wouter";

export default function PlayerDashboard() {
  const { user, logout } = useAuth();
  const [, navigate] = useLocation();

  // Mock data for demonstration
  const physicalData = [
    { month: "يناير", vo2Max: 45, speed: 28, agility: 7.5 },
    { month: "فبراير", vo2Max: 47, speed: 29, agility: 7.8 },
    { month: "مارس", vo2Max: 50, speed: 30, agility: 8.2 },
    { month: "أبريل", vo2Max: 52, speed: 31, agility: 8.5 },
  ];

  const technicalData = [
    { metric: "دقة التمرير", value: 85 },
    { metric: "الجري بالكرة", value: 78 },
    { metric: "التسديد", value: 72 },
    { metric: "الدفاع", value: 68 },
    { metric: "المراوغة", value: 82 },
  ];

  const cognitiveData = [
    { aspect: "سرعة القرار", value: 82 },
    { aspect: "الوعي المكاني", value: 88 },
    { aspect: "التوقع", value: 75 },
    { aspect: "التركيز", value: 85 },
    { aspect: "مقاومة الضغط", value: 79 },
  ];

  const performanceMetrics = [
    { label: "المباريات", value: 12, icon: Target, color: "from-blue-500 to-cyan-500" },
    { label: "الأهداف", value: 8, icon: Zap, color: "from-purple-500 to-pink-500" },
    { label: "التمريرات الحاسمة", value: 5, icon: TrendingUp, color: "from-orange-500 to-red-500" },
    { label: "تقييم الأداء", value: "8.5/10", icon: Activity, color: "from-green-500 to-emerald-500" },
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
          <div className="flex items-center gap-4">
            <span className="text-gray-300">مرحباً، {user?.name}</span>
            <Button
              onClick={logout}
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
            >
              تسجيل الخروج
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">لوحة تحكم التوأم الرقمي المعرفي</h1>
          <p className="text-gray-400">تابع تطورك الأكاديمي والمهني مع تحليلات متقدمة</p>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {performanceMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <Card key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 hover:border-cyan-500/50 transition">
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} p-2 mb-2`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-sm text-gray-300">{metric.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{metric.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Physical Development Chart */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                التطور البدني
              </CardTitle>
              <CardDescription>تطور المؤشرات البدنية عبر الأشهر</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={physicalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", border: "1px solid rgba(0,255,255,0.5)" }} />
                  <Legend />
                  <Line type="monotone" dataKey="vo2Max" stroke="#00FFFF" strokeWidth={2} name="الحد الأقصى لاستهلاك الأكسجين" />
                  <Line type="monotone" dataKey="speed" stroke="#3B82F6" strokeWidth={2} name="السرعة القصوى" />
                  <Line type="monotone" dataKey="agility" stroke="#8B5CF6" strokeWidth={2} name="الرشاقة" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Cognitive Radar Chart */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyan-400" />
                الأداء المعرفي
              </CardTitle>
              <CardDescription>تقييم الجوانب المعرفية والنفسية</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={cognitiveData}>
                  <PolarGrid stroke="rgba(0,255,255,0.2)" />
                  <PolarAngleAxis dataKey="aspect" stroke="rgba(255,255,255,0.5)" />
                  <PolarRadiusAxis stroke="rgba(255,255,255,0.5)" />
                  <Radar name="التقييم" dataKey="value" stroke="#00FFFF" fill="#00FFFF" fillOpacity={0.3} />
                  <Tooltip contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", border: "1px solid rgba(0,255,255,0.5)" }} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Technical Skills Chart */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              المهارات التقنية
            </CardTitle>
            <CardDescription>تقييم المهارات التقنية الأساسية</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={technicalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,255,255,0.1)" />
                <XAxis dataKey="metric" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", border: "1px solid rgba(0,255,255,0.5)" }} />
                <Bar dataKey="value" fill="#00FFFF" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 hover:border-cyan-500/50 transition cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                استشر المساعد الذكي
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">احصل على نصائح تدريبية مخصصة بناءً على أدائك</p>
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600">فتح المحادثة</Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 hover:border-cyan-500/50 transition cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                جلسات التدريب
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">عرض الجلسات التدريبية المجدولة والمكتملة</p>
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600">عرض الجلسات</Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 hover:border-cyan-500/50 transition cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                المحتوى التعليمي
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">استكشف فيديوهات ودروس تفاعلية متخصصة</p>
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600">تصفح المحتوى</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
