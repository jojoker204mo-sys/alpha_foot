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
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Award,
  Target,
  Download,
  Calendar,
  Zap,
} from "lucide-react";
import { useLocation } from "wouter";

export default function QualityReports() {
  const [, navigate] = useLocation();
  const [selectedStandard, setSelectedStandard] = useState("iso");

  // ISO Standards Compliance
  const isoCompliance = [
    { standard: "ISO 9001", compliance: 95, target: 100, status: "ممتاز" },
    { standard: "ISO 14001", compliance: 88, target: 100, status: "جيد جداً" },
    { standard: "ISO 45001", compliance: 92, target: 100, status: "ممتاز" },
    { standard: "ISO 50001", compliance: 85, target: 100, status: "جيد" },
  ];

  // Training Quality Metrics
  const trainingQuality = [
    { month: "يناير", تخطيط: 85, تنفيذ: 88, تقييم: 82, رضا: 86 },
    { month: "فبراير", تخطيط: 88, تنفيذ: 90, تقييم: 85, رضا: 88 },
    { month: "مارس", تخطيط: 90, تنفيذ: 92, تقييم: 88, رضا: 90 },
    { month: "أبريل", تخطيط: 92, تنفيذ: 94, تقييم: 91, رضا: 93 },
  ];

  // Performance Standards
  const performanceStandards = [
    { metric: "معدل النجاح", value: 92, standard: 85, unit: "%" },
    { metric: "رضا اللاعبين", value: 94, standard: 80, unit: "%" },
    { metric: "تطور المهارات", value: 88, standard: 75, unit: "%" },
    { metric: "معدل الاحتفاظ", value: 91, standard: 80, unit: "%" },
  ];

  // Certification Status
  const certifications = [
    { name: "شهادة FIFA", status: "معتمد", date: "2024-01-15", renewal: "2025-01-15" },
    { name: "شهادة AFC", status: "معتمد", date: "2024-02-20", renewal: "2025-02-20" },
    { name: "شهادة ECA", status: "معتمد", date: "2024-03-10", renewal: "2025-03-10" },
    { name: "شهادة WADA", status: "قيد المراجعة", date: "2024-04-05", renewal: "2025-04-05" },
  ];

  // Quality Incidents
  const qualityIncidents = [
    { type: "انحراف بسيط", count: 3, percentage: 15, status: "تم حله" },
    { type: "انحراف متوسط", count: 2, percentage: 10, status: "قيد المعالجة" },
    { type: "انحراف كبير", count: 0, percentage: 0, status: "لا يوجد" },
    { type: "ملاحظات", count: 15, percentage: 75, status: "تم حلها" },
  ];

  const stats = [
    {
      label: "معدل الامتثال",
      value: "92%",
      target: "100%",
      icon: CheckCircle,
      color: "text-green-400",
    },
    {
      label: "الشهادات النشطة",
      value: "3/4",
      target: "4/4",
      icon: Award,
      color: "text-cyan-400",
    },
    {
      label: "الانحرافات المحلولة",
      value: "20/20",
      target: "100%",
      icon: TrendingUp,
      color: "text-blue-400",
    },
    {
      label: "رضا المستخدمين",
      value: "94%",
      target: "90%",
      icon: Zap,
      color: "text-yellow-400",
    },
  ];

  const COLORS = ["#10B981", "#F59E0B", "#EF4444", "#6B7280"];

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
              <Award className="w-10 h-10 text-cyan-400" />
              تقارير الجودة والمعايير
            </h1>
            <p className="text-gray-400 text-lg">معايير عالمية وشهادات دولية</p>
          </div>
          <Button className="bg-cyan-500 hover:bg-cyan-600 flex items-center gap-2">
            <Download className="w-4 h-4" />
            تحميل التقرير
          </Button>
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
                      <p className="text-xs text-gray-400 mt-1">الهدف: {stat.target}</p>
                    </div>
                    <Icon className="w-8 h-8 text-cyan-500 opacity-50" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Standards Selection */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {[
            { id: "iso", label: "معايير ISO" },
            { id: "training", label: "جودة التدريب" },
            { id: "performance", label: "معايير الأداء" },
            { id: "certification", label: "الشهادات" },
            { id: "incidents", label: "الانحرافات" },
          ].map((standard) => (
            <button
              key={standard.id}
              onClick={() => setSelectedStandard(standard.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
                selectedStandard === standard.id
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-800/50 text-gray-400 hover:bg-slate-700/50"
              }`}
            >
              {standard.label}
            </button>
          ))}
        </div>

        {/* ISO Standards */}
        {selectedStandard === "iso" && (
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>الامتثال لمعايير ISO</CardTitle>
                <CardDescription>مستويات الامتثال لمعايير ISO المختلفة</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {isoCompliance.map((standard, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white">{standard.standard}</p>
                        <p className="text-sm text-gray-400">{standard.status}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-cyan-400">{standard.compliance}%</p>
                        <p className="text-xs text-gray-400">من {standard.target}%</p>
                      </div>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-3 rounded-full"
                        style={{ width: `${standard.compliance}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Training Quality */}
        {selectedStandard === "training" && (
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle>مؤشرات جودة التدريب</CardTitle>
              <CardDescription>تطور مؤشرات الجودة على مدار الأشهر</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={trainingQuality}>
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
                  <Line type="monotone" dataKey="تخطيط" stroke="#06B6D4" strokeWidth={2} />
                  <Line type="monotone" dataKey="تنفيذ" stroke="#0EA5E9" strokeWidth={2} />
                  <Line type="monotone" dataKey="تقييم" stroke="#3B82F6" strokeWidth={2} />
                  <Line type="monotone" dataKey="رضا" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {/* Performance Standards */}
        {selectedStandard === "performance" && (
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle>معايير الأداء</CardTitle>
              <CardDescription>مقارنة الأداء الفعلي مع المعايير المستهدفة</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={performanceStandards}>
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
                  <Bar dataKey="value" fill="#06B6D4" name="الأداء الفعلي" />
                  <Bar dataKey="standard" fill="#64748B" name="المعيار المستهدف" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {/* Certifications */}
        {selectedStandard === "certification" && (
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle>الشهادات والاعتمادات</CardTitle>
              <CardDescription>حالة الشهادات الدولية والاعتمادات</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-800/30 rounded-lg border border-cyan-500/10 flex items-start justify-between"
                  >
                    <div>
                      <p className="font-semibold text-white">{cert.name}</p>
                      <p className="text-sm text-gray-400 mt-1">
                        صادرة: {new Date(cert.date).toLocaleDateString("ar-EG")}
                      </p>
                      <p className="text-sm text-gray-400">
                        تجديد: {new Date(cert.renewal).toLocaleDateString("ar-EG")}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        cert.status === "معتمد"
                          ? "bg-green-500/30 text-green-400"
                          : "bg-yellow-500/30 text-yellow-400"
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quality Incidents */}
        {selectedStandard === "incidents" && (
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>توزيع الانحرافات</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={qualityIncidents}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ type, percentage }) => `${type}: ${percentage}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="percentage"
                    >
                      {qualityIncidents.map((entry, index) => (
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

            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>تفاصيل الانحرافات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {qualityIncidents.map((incident, idx) => (
                    <div key={idx} className="p-3 bg-slate-800/30 rounded-lg border border-cyan-500/10">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-white">{incident.type}</p>
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            incident.status === "تم حله"
                              ? "bg-green-500/30 text-green-400"
                              : "bg-yellow-500/30 text-yellow-400"
                          }`}
                        >
                          {incident.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">
                        العدد: {incident.count} | النسبة: {incident.percentage}%
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Recommendations */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 mt-8">
          <CardHeader>
            <CardTitle>التوصيات للتحسين</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              {
                priority: "عالية",
                title: "تحسين معيار ISO 50001",
                description: "العمل على رفع معدل الامتثال من 85% إلى 95%",
              },
              {
                priority: "متوسطة",
                title: "تجديد شهادة WADA",
                description: "إكمال عملية المراجعة والتجديد قبل نهاية الربع",
              },
              {
                priority: "منخفضة",
                title: "توثيق الممارسات الجيدة",
                description: "توثيق وتوحيد الممارسات الجيدة الحالية",
              },
            ].map((rec, idx) => (
              <div key={idx} className="p-4 bg-slate-800/30 rounded-lg border border-cyan-500/10 flex gap-3">
                <div
                  className={`w-1 rounded-full ${
                    rec.priority === "عالية"
                      ? "bg-red-500"
                      : rec.priority === "متوسطة"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                  }`}
                />
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
  );
}
