import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
import {
  GitCompare,
  Download,
  TrendingUp,
  Users,
  Target,
  Award,
  Zap,
  Filter,
} from "lucide-react";
import { useLocation } from "wouter";

export default function ComparisonAnalytics() {
  const [, navigate] = useLocation();
  const [comparisonType, setComparisonType] = useState("players");
  const [selectedPlayers, setSelectedPlayers] = useState(["أحمد محمود", "محمد علي"]);

  // Player Comparison Data
  const playerComparison = [
    {
      metric: "السرعة",
      أحمد: 92,
      محمد: 85,
      فاطمة: 80,
      سارة: 88,
      average: 86,
    },
    {
      metric: "الدقة",
      أحمد: 88,
      محمد: 90,
      فاطمة: 92,
      سارة: 85,
      average: 89,
    },
    {
      metric: "التحمل",
      أحمد: 95,
      محمد: 88,
      فاطمة: 85,
      سارة: 92,
      average: 90,
    },
    {
      metric: "القوة",
      أحمد: 90,
      محمد: 92,
      فاطمة: 82,
      سارة: 88,
      average: 88,
    },
    {
      metric: "الذكاء",
      أحمد: 85,
      محمد: 87,
      فاطمة: 90,
      سارة: 86,
      average: 87,
    },
  ];

  // Position Comparison
  const positionComparison = [
    { position: "مهاجم", count: 15, avgScore: 87, improvement: 12 },
    { position: "وسط", count: 18, avgScore: 85, improvement: 10 },
    { position: "مدافع", count: 12, avgScore: 83, improvement: 8 },
    { position: "حارس", count: 4, avgScore: 88, improvement: 6 },
  ];

  // Age Group Comparison
  const ageGroupComparison = [
    { ageGroup: "18-20", count: 8, avgScore: 75, potential: 92 },
    { ageGroup: "21-23", count: 18, avgScore: 85, potential: 90 },
    { ageGroup: "24-26", count: 15, avgScore: 88, potential: 87 },
    { ageGroup: "27+", count: 8, avgScore: 86, potential: 82 },
  ];

  // Academy Comparison
  const academyComparison = [
    { academy: "أكاديمية الأهلي", players: 12, avgScore: 87, retention: 92 },
    { academy: "أكاديمية الزمالك", players: 10, avgScore: 85, retention: 88 },
    { academy: "أكاديمية الإسماعيلي", players: 8, avgScore: 83, retention: 85 },
    { academy: "أكاديمية الجونة", players: 6, avgScore: 82, retention: 80 },
  ];

  // Performance Distribution
  const performanceDistribution = [
    { score: "90-100", count: 8, percentage: 12 },
    { score: "80-89", count: 32, percentage: 48 },
    { score: "70-79", count: 20, percentage: 30 },
    { score: "60-69", count: 6, percentage: 9 },
    { score: "50-59", count: 1, percentage: 1 },
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
              <GitCompare className="w-10 h-10 text-cyan-400" />
              تقارير المقارنة والتحليل
            </h1>
            <p className="text-gray-400 text-lg">مقارنة شاملة بين اللاعبين والمجموعات</p>
          </div>
          <Button className="bg-cyan-500 hover:bg-cyan-600 flex items-center gap-2">
            <Download className="w-4 h-4" />
            تحميل
          </Button>
        </div>

        {/* Comparison Type Selector */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {[
            { id: "players", label: "مقارنة اللاعبين" },
            { id: "position", label: "مقارنة الموضع" },
            { id: "ageGroup", label: "مقارنة العمر" },
            { id: "academy", label: "مقارنة الأكاديمية" },
            { id: "distribution", label: "التوزيع" },
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setComparisonType(type.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
                comparisonType === type.id
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-800/50 text-gray-400 hover:bg-slate-700/50"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Player Comparison */}
        {comparisonType === "players" && (
          <div className="space-y-6">
            {/* Player Selection */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-cyan-400" />
                  اختر اللاعبين للمقارنة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {["أحمد محمود", "محمد علي", "فاطمة أحمد", "سارة محمد"].map((player) => (
                    <label key={player} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedPlayers.includes(player)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedPlayers([...selectedPlayers, player]);
                          } else {
                            setSelectedPlayers(selectedPlayers.filter((p) => p !== player));
                          }
                        }}
                        className="w-4 h-4 rounded border-cyan-500/50 bg-slate-800"
                      />
                      <span>{player}</span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Comparison Chart */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>مقارنة المهارات</CardTitle>
                <CardDescription>مقارنة شاملة لمهارات اللاعبين المختارين</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={playerComparison}>
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
                    {selectedPlayers.includes("أحمد محمود") && (
                      <Bar dataKey="أحمد" fill="#06B6D4" />
                    )}
                    {selectedPlayers.includes("محمد علي") && (
                      <Bar dataKey="محمد" fill="#0EA5E9" />
                    )}
                    {selectedPlayers.includes("فاطمة أحمد") && (
                      <Bar dataKey="فاطمة" fill="#3B82F6" />
                    )}
                    {selectedPlayers.includes("سارة محمد") && (
                      <Bar dataKey="سارة" fill="#8B5CF6" />
                    )}
                    <Bar dataKey="average" fill="#64748B" name="المتوسط" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Position Comparison */}
        {comparisonType === "position" && (
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>توزيع اللاعبين حسب الموضع</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={positionComparison}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="position" stroke="#94A3B8" />
                    <YAxis stroke="#94A3B8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1E293B",
                        border: "1px solid #06B6D4",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="count" fill="#06B6D4" name="عدد اللاعبين" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>متوسط الأداء والتحسن</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={positionComparison}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="position" stroke="#94A3B8" />
                    <YAxis stroke="#94A3B8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1E293B",
                        border: "1px solid #06B6D4",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="avgScore" fill="#06B6D4" name="متوسط الأداء" />
                    <Line
                      type="monotone"
                      dataKey="improvement"
                      stroke="#10B981"
                      name="التحسن %"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Age Group Comparison */}
        {comparisonType === "ageGroup" && (
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle>مقارنة مجموعات العمر</CardTitle>
              <CardDescription>متوسط الأداء والإمكانية حسب مجموعة العمر</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={ageGroupComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="ageGroup" stroke="#94A3B8" />
                  <YAxis stroke="#94A3B8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1E293B",
                      border: "1px solid #06B6D4",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="avgScore" fill="#06B6D4" name="متوسط الأداء الحالي" />
                  <Line
                    type="monotone"
                    dataKey="potential"
                    stroke="#10B981"
                    name="الإمكانية المستقبلية"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {/* Academy Comparison */}
        {comparisonType === "academy" && (
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>مقارنة الأكاديميات</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={academyComparison}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="academy" stroke="#94A3B8" angle={-45} textAnchor="end" height={100} />
                    <YAxis stroke="#94A3B8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1E293B",
                        border: "1px solid #06B6D4",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="players" fill="#06B6D4" name="عدد اللاعبين" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>جودة الأداء والاحتفاظ</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={academyComparison}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="academy" stroke="#94A3B8" angle={-45} textAnchor="end" height={100} />
                    <YAxis stroke="#94A3B8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1E293B",
                        border: "1px solid #06B6D4",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="avgScore" fill="#06B6D4" name="متوسط الأداء" />
                    <Line
                      type="monotone"
                      dataKey="retention"
                      stroke="#10B981"
                      name="معدل الاحتفاظ %"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Performance Distribution */}
        {comparisonType === "distribution" && (
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle>توزيع الأداء</CardTitle>
              <CardDescription>توزيع اللاعبين حسب مستويات الأداء</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {performanceDistribution.map((dist, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-20">
                      <p className="font-semibold text-cyan-400">{dist.score}</p>
                    </div>
                    <div className="flex-1">
                      <div className="w-full bg-slate-700/50 rounded-full h-8 flex items-center">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 h-8 rounded-full flex items-center justify-end pr-2"
                          style={{ width: `${dist.percentage * 3}%` }}
                        >
                          {dist.percentage > 10 && (
                            <span className="text-white text-xs font-semibold">{dist.percentage}%</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="w-20 text-right">
                      <p className="text-gray-400">{dist.count} لاعب</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
