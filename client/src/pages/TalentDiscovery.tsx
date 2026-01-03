import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, TrendingUp, Award, Target, Zap } from "lucide-react";
import { PerformanceIcon, AnalyticsIcon, BrainIcon, ChatIcon, PlayerIcon, GoalIcon, TrainingIcon, CoachingIcon, StatsIcon, DashboardIcon, ReportsIcon, SearchIcon, FilterIcon, EditIcon, DeleteIcon } from "@/components/icons/AlphaFootIcons";
import { useLocation } from "wouter";

export default function TalentDiscovery() {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for talent discovery
  const talents = [
    {
      id: 1,
      name: "أحمد محمود",
      position: "مهاجم",
      age: 18,
      level: "youth",
      talentScore: 9.2,
      height: 185,
      speed: 28,
      verified: true,
      academy: "أكاديمية الأهلي",
      achievements: 5,
    },
    {
      id: 2,
      name: "محمد علي",
      position: "وسط",
      age: 20,
      level: "academy",
      talentScore: 8.8,
      height: 182,
      speed: 26,
      verified: true,
      academy: "أكاديمية الزمالك",
      achievements: 3,
    },
    {
      id: 3,
      name: "خالد عبدالعزيز",
      position: "مدافع",
      age: 22,
      level: "club",
      talentScore: 8.5,
      height: 188,
      speed: 25,
      verified: true,
      academy: "نادي الإسماعيلي",
      achievements: 7,
    },
    {
      id: 4,
      name: "يوسف حسن",
      position: "حارس",
      age: 19,
      level: "youth",
      talentScore: 8.3,
      height: 192,
      speed: 20,
      verified: false,
      academy: "أكاديمية الإسكندرية",
      achievements: 2,
    },
    {
      id: 5,
      name: "عمرو فاروق",
      position: "مهاجم",
      age: 21,
      level: "academy",
      talentScore: 8.9,
      height: 186,
      speed: 29,
      verified: true,
      academy: "أكاديمية بيراميدز",
      achievements: 6,
    },
    {
      id: 6,
      name: "سارة محمد",
      position: "وسط",
      age: 17,
      level: "youth",
      talentScore: 8.7,
      height: 174,
      speed: 24,
      verified: false,
      academy: "أكاديمية النيل",
      achievements: 4,
    },
  ];

  const levelLabels: Record<string, string> = {
    youth: "ناشئين",
    academy: "أكاديمي",
    club: "نادي",
    national_team: "منتخب وطني",
    elite: "نخبة",
  };

  const levelColors: Record<string, string> = {
    youth: "from-blue-500 to-cyan-500",
    academy: "from-purple-500 to-pink-500",
    club: "from-orange-500 to-red-500",
    national_team: "from-green-500 to-emerald-500",
    elite: "from-yellow-500 to-orange-500",
  };

  const filteredTalents = talents.filter((talent) => {
    const matchesSearch = talent.name.includes(searchTerm) || talent.position.includes(searchTerm);
    const matchesLevel = selectedLevel === "all" || talent.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

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
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">اكتشاف المواهب</h1>
          <p className="text-gray-400">نظام شامل لاكتشاف المواهب من الناشئين إلى المنتخب الوطني</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-300">إجمالي المواهب</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{talents.length}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-300">مواهب مُتحقق منها</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-cyan-400">{talents.filter((t) => t.verified).length}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-300">متوسط التقييم</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-400">
                {(talents.reduce((sum, t) => sum + t.talentScore, 0) / talents.length).toFixed(1)}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-300">أعلى تقييم</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-400">
                {Math.max(...talents.map((t) => t.talentScore)).toFixed(1)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-cyan-400" />
              البحث والتصفية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث عن لاعب أو موضع..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => setSelectedLevel("all")}
                  variant={selectedLevel === "all" ? "default" : "outline"}
                  className={selectedLevel === "all" ? "bg-cyan-500 hover:bg-cyan-600" : "border-cyan-500/50 text-cyan-400"}
                >
                  الكل
                </Button>
                {Object.entries(levelLabels).map(([key, label]) => (
                  <Button
                    key={key}
                    onClick={() => setSelectedLevel(key)}
                    variant={selectedLevel === key ? "default" : "outline"}
                    className={selectedLevel === key ? "bg-cyan-500 hover:bg-cyan-600" : "border-cyan-500/50 text-cyan-400"}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Talents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTalents.map((talent) => (
            <Card key={talent.id} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 hover:border-cyan-500/50 transition">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-lg">{talent.name}</CardTitle>
                    <CardDescription className="text-cyan-400">{talent.position}</CardDescription>
                  </div>
                  {talent.verified && (
                    <div className="bg-green-500/20 border border-green-500/50 rounded-full p-2">
                      <Award className="w-4 h-4 text-green-400" />
                    </div>
                  )}
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${levelColors[talent.level]}`}>
                  {levelLabels[talent.level]}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">تقييم الموهبة</span>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold text-cyan-400">{talent.talentScore}</div>
                      <TrendingUp className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-400">العمر</p>
                      <p className="font-semibold">{talent.age} سنة</p>
                    </div>
                    <div>
                      <p className="text-gray-400">الطول</p>
                      <p className="font-semibold">{talent.height} سم</p>
                    </div>
                    <div>
                      <p className="text-gray-400">السرعة</p>
                      <p className="font-semibold">{talent.speed} كم/س</p>
                    </div>
                    <div>
                      <p className="text-gray-400">الإنجازات</p>
                      <p className="font-semibold">{talent.achievements}</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-cyan-500/20">
                    <p className="text-sm text-gray-400">{talent.academy}</p>
                  </div>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-sm">
                    عرض الملف الشخصي
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTalents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">لم يتم العثور على مواهب تطابق معايير البحث</p>
          </div>
        )}
      </div>
    </div>
  );
}
