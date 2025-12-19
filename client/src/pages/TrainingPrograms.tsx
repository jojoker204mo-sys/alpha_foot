import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dumbbell,
  Apple,
  Heart,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Calendar,
  Users,
  Clock,
  Target,
  CheckCircle,
} from "lucide-react";
import { useLocation } from "wouter";

export default function TrainingPrograms() {
  const [, navigate] = useLocation();
  const [programs, setPrograms] = useState([
    {
      id: 1,
      name: "برنامج التطوير الشامل",
      type: "comprehensive",
      duration: "12 أسبوع",
      level: "متقدم",
      participants: 45,
      progress: 65,
      status: "نشط",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 2,
      name: "برنامج التدريب المكثف",
      type: "intensive",
      duration: "8 أسابيع",
      level: "متوسط",
      participants: 32,
      progress: 40,
      status: "نشط",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      name: "برنامج الناشئين",
      type: "youth",
      duration: "16 أسبوع",
      level: "مبتدئ",
      participants: 60,
      progress: 25,
      status: "نشط",
      color: "from-green-500 to-emerald-600",
    },
  ]);

  const [selectedTab, setSelectedTab] = useState("overview");

  const programComponents = [
    {
      title: "برامج التدريب",
      icon: Dumbbell,
      description: "جلسات تدريبية منظمة ومخطط لها",
      items: ["تمارين تقنية", "تمارين بدنية", "تمارين تكتيكية", "تمارين معرفية"],
    },
    {
      title: "برامج التغذية",
      icon: Apple,
      description: "خطط غذائية مخصصة ومتوازنة",
      items: ["وجبات يومية", "مكملات غذائية", "استشارات تغذوية", "متابعة الوزن"],
    },
    {
      title: "برامج التأهيل",
      icon: Heart,
      description: "تمارين استشفائية وتأهيلية",
      items: ["تمارين استشفاء", "تمارين تأهيل", "علاج الإصابات", "الوقاية"],
    },
    {
      title: "برامج التطوير",
      icon: TrendingUp,
      description: "خطط تطوير فردية ومتقدمة",
      items: ["تطوير المهارات", "تطوير البدنية", "تطوير المعرفية", "تطوير النفسية"],
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
              <Dumbbell className="w-10 h-10 text-cyan-400" />
              منصة البرامج التدريبية المتكاملة
            </h1>
            <p className="text-gray-400 text-lg">إدارة شاملة للبرامج التدريبية والتغذية والتأهيل</p>
          </div>
          <Button className="bg-cyan-500 hover:bg-cyan-600 flex items-center gap-2">
            <Plus className="w-4 h-4" />
            برنامج جديد
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {[
            { id: "overview", label: "نظرة عامة" },
            { id: "training", label: "التدريب" },
            { id: "nutrition", label: "التغذية" },
            { id: "rehabilitation", label: "التأهيل" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
                selectedTab === tab.id
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-800/50 text-gray-400 hover:bg-slate-700/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {selectedTab === "overview" && (
          <div className="space-y-6">
            {/* Active Programs */}
            <div>
              <h2 className="text-2xl font-bold mb-4">البرامج النشطة</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {programs.map((program) => (
                  <Card
                    key={program.id}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 hover:border-cyan-500/50 transition"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>{program.name}</CardTitle>
                          <CardDescription>{program.duration}</CardDescription>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/30 text-green-400">
                          {program.status}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-400">المستوى</p>
                          <p className="font-semibold text-cyan-400">{program.level}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">المشاركون</p>
                          <p className="font-semibold text-cyan-400">{program.participants}</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <p className="text-sm text-gray-400">التقدم</p>
                          <p className="text-sm text-cyan-400">{program.progress}%</p>
                        </div>
                        <div className="w-full bg-slate-700/50 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                            style={{ width: `${program.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-cyan-500 hover:bg-cyan-600">
                          <Edit className="w-4 h-4 mr-1" />
                          تعديل
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-500/50 text-red-400">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Program Components */}
            <div>
              <h2 className="text-2xl font-bold mb-4">مكونات البرنامج</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {programComponents.map((component, idx) => {
                  const Icon = component.icon;
                  return (
                    <Card
                      key={idx}
                      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20"
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-cyan-400" />
                          {component.title}
                        </CardTitle>
                        <CardDescription>{component.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {component.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-center gap-2 text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Statistics */}
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: "إجمالي البرامج", value: "12", icon: Target },
                { label: "المشاركون النشطون", value: "137", icon: Users },
                { label: "معدل الإكمال", value: "85%", icon: CheckCircle },
                { label: "الجلسات الأسبوعية", value: "48", icon: Calendar },
              ].map((stat, idx) => {
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
                        </div>
                        <Icon className="w-8 h-8 text-cyan-500 opacity-50" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Training Tab */}
        {selectedTab === "training" && (
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-cyan-400" />
                برامج التدريب
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "التمارين التقنية",
                    description: "تطوير المهارات الأساسية",
                    sessions: "3 جلسات أسبوعية",
                    duration: "90 دقيقة",
                  },
                  {
                    name: "التمارين البدنية",
                    description: "تطوير اللياقة البدنية",
                    sessions: "4 جلسات أسبوعية",
                    duration: "120 دقيقة",
                  },
                  {
                    name: "التمارين التكتيكية",
                    description: "تطوير الفهم التكتيكي",
                    sessions: "2 جلسة أسبوعية",
                    duration: "60 دقيقة",
                  },
                  {
                    name: "التمارين المعرفية",
                    description: "تطوير الذكاء الرياضي",
                    sessions: "2 جلسة أسبوعية",
                    duration: "45 دقيقة",
                  },
                ].map((training, idx) => (
                  <div key={idx} className="p-4 bg-slate-800/30 rounded-lg border border-cyan-500/10">
                    <h3 className="font-semibold text-cyan-400 mb-2">{training.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{training.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {training.sessions}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {training.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Nutrition Tab */}
        {selectedTab === "nutrition" && (
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Apple className="w-5 h-5 text-cyan-400" />
                برامج التغذية
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "خطة التغذية الأساسية",
                    calories: "2500-3000",
                    protein: "150g",
                    carbs: "400g",
                    fats: "80g",
                  },
                  {
                    name: "خطة التغذية المتقدمة",
                    calories: "3000-3500",
                    protein: "180g",
                    carbs: "500g",
                    fats: "100g",
                  },
                  {
                    name: "خطة التغذية للناشئين",
                    calories: "2000-2500",
                    protein: "120g",
                    carbs: "300g",
                    fats: "60g",
                  },
                  {
                    name: "خطة التغذية الخاصة",
                    calories: "مخصصة",
                    protein: "مخصص",
                    carbs: "مخصص",
                    fats: "مخصص",
                  },
                ].map((nutrition, idx) => (
                  <div key={idx} className="p-4 bg-slate-800/30 rounded-lg border border-cyan-500/10">
                    <h3 className="font-semibold text-cyan-400 mb-3">{nutrition.name}</h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p>السعرات: <span className="text-cyan-400">{nutrition.calories}</span></p>
                      <p>البروتين: <span className="text-cyan-400">{nutrition.protein}</span></p>
                      <p>الكربوهيدرات: <span className="text-cyan-400">{nutrition.carbs}</span></p>
                      <p>الدهون: <span className="text-cyan-400">{nutrition.fats}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Rehabilitation Tab */}
        {selectedTab === "rehabilitation" && (
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-cyan-400" />
                برامج التأهيل والاستشفاء
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "تمارين الاستشفاء",
                    description: "تمارين استرخاء واستشفاء",
                    frequency: "يومية",
                    duration: "30 دقيقة",
                  },
                  {
                    name: "تمارين التأهيل",
                    description: "تمارين تأهيلية متخصصة",
                    frequency: "3 مرات أسبوعية",
                    duration: "45 دقيقة",
                  },
                  {
                    name: "العلاج الطبيعي",
                    description: "جلسات علاج طبيعي",
                    frequency: "حسب الحاجة",
                    duration: "60 دقيقة",
                  },
                  {
                    name: "برنامج الوقاية",
                    description: "برنامج وقاية من الإصابات",
                    frequency: "أسبوعية",
                    duration: "45 دقيقة",
                  },
                ].map((rehab, idx) => (
                  <div key={idx} className="p-4 bg-slate-800/30 rounded-lg border border-cyan-500/10">
                    <h3 className="font-semibold text-cyan-400 mb-2">{rehab.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{rehab.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {rehab.frequency}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {rehab.duration}
                      </span>
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
