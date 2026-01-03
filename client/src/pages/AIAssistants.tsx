import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Brain, Zap, Target, TrendingUp, MessageSquare, BarChart3, Users } from "lucide-react";
import { PerformanceIcon, AnalyticsIcon, BrainIcon, ChatIcon, PlayerIcon, GoalIcon, TrainingIcon, CoachingIcon, StatsIcon, DashboardIcon, ReportsIcon, SearchIcon, FilterIcon, EditIcon, DeleteIcon } from "@/components/icons/AlphaFootIcons";
import { useLocation } from "wouter";

export default function AIAssistants() {
  const [, navigate] = useLocation();
  const [selectedAssistant, setSelectedAssistant] = useState<number | null>(null);

  const assistants = [
    {
      id: 1,
      name: "مساعد التدريب الذكي",
      icon: Target,
      color: "from-cyan-500 to-blue-600",
      description: "متخصص في تصميم برامج تدريبية مخصصة",
      capabilities: [
        "تحليل أداء اللاعب",
        "تصميم برامج تدريبية مخصصة",
        "تقديم توصيات التحسين",
        "متابعة التقدم",
        "تعديل البرامج ديناميكياً",
      ],
      expertise: "التدريب الرياضي والتطوير البدني",
    },
    {
      id: 2,
      name: "محلل الفيديو الذكي",
      icon: BarChart3,
      color: "from-purple-500 to-pink-600",
      description: "تحليل متقدم لمقاطع الفيديو والمباريات",
      capabilities: [
        "تحليل حركات اللاعب",
        "استخراج الإحصائيات",
        "كشف الأنماط التكتيكية",
        "مقارنة الأداء",
        "توليد التقارير المفصلة",
      ],
      expertise: "تحليل الفيديو والإحصائيات",
    },
    {
      id: 3,
      name: "مستشار التغذية الذكي",
      icon: Zap,
      color: "from-green-500 to-emerald-600",
      description: "متخصص في التغذية الرياضية والصحة",
      capabilities: [
        "تصميم خطط تغذية مخصصة",
        "حساب احتياجات السعرات",
        "توصيات المكملات الغذائية",
        "متابعة الوزن والقياسات",
        "نصائح صحية شاملة",
      ],
      expertise: "التغذية الرياضية والصحة",
    },
    {
      id: 4,
      name: "مدرب الذكاء الاصطناعي",
      icon: Brain,
      color: "from-orange-500 to-red-600",
      description: "متخصص في التطوير المعرفي والنفسي",
      capabilities: [
        "تطوير المهارات العقلية",
        "تحسين التركيز والانتباه",
        "إدارة الضغط النفسي",
        "تقوية الثقة بالنفس",
        "تطوير الذكاء الاصطناعي الشخصي",
      ],
      expertise: "علم النفس الرياضي والتطوير المعرفي",
    },
    {
      id: 5,
      name: "مساعد الإصابات والتأهيل",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-600",
      description: "متخصص في الوقاية والتأهيل",
      capabilities: [
        "برامج الوقاية من الإصابات",
        "خطط التأهيل المتقدمة",
        "تمارين استشفائية",
        "متابعة الشفاء",
        "نصائح الوقاية",
      ],
      expertise: "الطب الرياضي والتأهيل",
    },
    {
      id: 6,
      name: "مساعد الاكتشاف والتطوير",
      icon: Users,
      color: "from-yellow-500 to-orange-600",
      description: "متخصص في اكتشاف وتطوير المواهب",
      capabilities: [
        "تقييم المواهب",
        "تحديد نقاط القوة والضعف",
        "خطط التطوير الفردية",
        "متابعة المسار الوظيفي",
        "توصيات الانتقالات",
      ],
      expertise: "اكتشاف وتطوير المواهب",
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
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Bot className="w-10 h-10 text-cyan-400" />
            الوكلاء المساعدين الذكيين
          </h1>
          <p className="text-gray-400 text-lg">فريق متخصص من الوكلاء الذكيين لدعمك في كل جوانب تطورك الرياضي</p>
        </div>

        {/* AI System Overview */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-cyan-400" />
              نظام الذكاء الاصطناعي المتقدم
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-cyan-400 mb-2">التقنية</h3>
                <p className="text-gray-300">نظام ذكاء اصطناعي سابق للوعي البشري مع قدرات تنبؤية متقدمة</p>
              </div>
              <div>
                <h3 className="font-semibold text-cyan-400 mb-2">التخصص</h3>
                <p className="text-gray-300">6 وكلاء متخصصين في مختلف جوانب التطوير الرياضي</p>
              </div>
              <div>
                <h3 className="font-semibold text-cyan-400 mb-2">التكامل</h3>
                <p className="text-gray-300">تعاون سلس بين الوكلاء لتقديم خدمة شاملة</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assistants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {assistants.map((assistant) => {
            const Icon = assistant.icon;
            const isSelected = selectedAssistant === assistant.id;
            return (
              <Card
                key={assistant.id}
                onClick={() => setSelectedAssistant(isSelected ? null : assistant.id)}
                className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border transition-all cursor-pointer ${
                  isSelected ? "border-cyan-500/50 ring-2 ring-cyan-500/30" : "border-cyan-500/20 hover:border-cyan-500/50"
                }`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${assistant.color} p-2 mb-2`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-lg">{assistant.name}</CardTitle>
                  <CardDescription>{assistant.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">التخصص:</p>
                      <p className="text-sm text-cyan-400">{assistant.expertise}</p>
                    </div>
                    {isSelected && (
                      <div>
                        <p className="text-sm text-gray-400 mb-2">الإمكانيات:</p>
                        <ul className="space-y-1">
                          {assistant.capabilities.map((capability, idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">✓</span>
                              <span>{capability}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-sm mt-4">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      تواصل مع المساعد
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How It Works */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
          <CardHeader>
            <CardTitle>كيفية عمل النظام</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: 1, title: "التقييم", description: "تقييم شامل لحالتك الحالية" },
                { step: 2, title: "التحليل", description: "تحليل معمق لنقاط القوة والضعف" },
                { step: 3, title: "التخطيط", description: "وضع خطة مخصصة لتطورك" },
                { step: 4, title: "المتابعة", description: "متابعة مستمرة وتعديل البرامج" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
