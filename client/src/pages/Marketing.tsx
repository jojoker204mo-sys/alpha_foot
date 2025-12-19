import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Zap,
  TrendingUp,
  Users,
  Globe,
  Share2,
  Target,
  Award,
  MessageSquare,
  ArrowRight,
  Play,
  Heart,
  Flame,
} from "lucide-react";
import { useLocation } from "wouter";

export default function Marketing() {
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  const socialStats = [
    { platform: "فيسبوك", followers: "100K+", engagement: "5%", icon: "f" },
    { platform: "تويتر", followers: "50K+", engagement: "3%", icon: "𝕏" },
    { platform: "إنستجرام", followers: "150K+", engagement: "8%", icon: "📷" },
    { platform: "تيك توك", followers: "500K+", engagement: "12%", icon: "🎵" },
    { platform: "يوتيوب", followers: "100K+", engagement: "6%", icon: "▶" },
  ];

  const campaigns = [
    {
      name: "من الحلم إلى الواقع",
      description: "حملة إطلاق المنصة الرئيسية",
      goal: "1 مليون مشاهدة",
      status: "نشط",
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "قصص النجاح",
      description: "قصص حقيقية من اللاعبين والمدربين",
      goal: "50 قصة نجاح",
      status: "نشط",
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "التحديات الفيروسية",
      description: "تحديات أسبوعية فيروسية",
      goal: "100 مليون مشاهدة",
      status: "نشط",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "الشراكات الاستراتيجية",
      description: "التعاون مع الأندية والأكاديميات",
      goal: "50 شراكة",
      status: "قريباً",
      color: "from-orange-500 to-red-600",
    },
  ];

  const contentTypes = [
    {
      type: "فيديوهات قصيرة",
      platforms: "تيك توك، إنستجرام، يوتيوب",
      frequency: "يومية",
      reach: "10M+",
    },
    {
      type: "قصص النجاح",
      platforms: "جميع المنصات",
      frequency: "أسبوعية",
      reach: "5M+",
    },
    {
      type: "نصائح تدريبية",
      platforms: "فيسبوك، إنستجرام",
      frequency: "يومية",
      reach: "2M+",
    },
    {
      type: "تحليلات الأداء",
      platforms: "تويتر، يوتيوب",
      frequency: "أسبوعية",
      reach: "1M+",
    },
    {
      type: "محتوى مضحك",
      platforms: "تيك توك، إنستجرام",
      frequency: "يومية",
      reach: "8M+",
    },
    {
      type: "بث مباشر",
      platforms: "فيسبوك، يوتيوب",
      frequency: "أسبوعية",
      reach: "500K+",
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
            <Flame className="w-10 h-10 text-red-500" />
            استراتيجية التسويق الفيروسية
          </h1>
          <p className="text-gray-400 text-lg">خطة تسويقية شاملة لجعل Alpha Foot الخيار الأول عالمياً</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {[
            { id: "overview", label: "نظرة عامة" },
            { id: "social", label: "وسائل التواصل" },
            { id: "campaigns", label: "الحملات" },
            { id: "content", label: "المحتوى" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-800/50 text-gray-400 hover:bg-slate-700/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: "الزيارات الشهرية", value: "50K+", icon: Globe },
                { label: "المستخدمون الجدد", value: "5K+", icon: Users },
                { label: "معدل التحويل", value: "10%+", icon: TrendingUp },
                { label: "المشاركات", value: "100K+", icon: Share2 },
              ].map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <Card
                    key={idx}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20"
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-gray-400 text-sm">{metric.label}</p>
                          <p className="text-2xl font-bold text-cyan-400 mt-2">{metric.value}</p>
                        </div>
                        <Icon className="w-8 h-8 text-cyan-500 opacity-50" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Marketing Goals */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-cyan-400" />
                  الأهداف التسويقية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-cyan-400 mb-3">الأهداف قصيرة المدى (3 أشهر)</h3>
                    <ul className="space-y-2">
                      {[
                        "1 مليون مشاهدة على جميع المنصات",
                        "100,000 زيارة للموقع",
                        "10,000 تسجيل جديد",
                        "500K متابع على وسائل التواصل",
                      ].map((goal, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-cyan-400 mt-1">✓</span>
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-cyan-400 mb-3">الأهداف طويلة المدى (سنة)</h3>
                    <ul className="space-y-2">
                      {[
                        "100 مليون مشاهدة",
                        "60,000 مستخدم نشط",
                        "2 مليون متابع",
                        "معدل تحويل 15%+",
                      ].map((goal, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-cyan-400 mt-1">✓</span>
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Target Audience */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  الجمهور المستهدف
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      segment: "اللاعبون المتميزون",
                      age: "18-35 سنة",
                      platforms: "تيك توك، إنستجرام، يوتيوب",
                      message: "طورّ نفسك لتصبح نجماً",
                    },
                    {
                      segment: "المدربون المحترفون",
                      age: "30-55 سنة",
                      platforms: "فيسبوك، لينكد إن",
                      message: "أدوات احترافية للتدريب",
                    },
                    {
                      segment: "الأكاديميات والأندية",
                      age: "جميع الأعمار",
                      platforms: "فيسبوك، الموقع الرسمي",
                      message: "منصة متكاملة للإدارة",
                    },
                    {
                      segment: "المستثمرون والرعاة",
                      age: "40-70 سنة",
                      platforms: "لينكد إن، الموقع",
                      message: "فرصة استثمارية فريدة",
                    },
                  ].map((segment, idx) => (
                    <div key={idx} className="p-4 bg-slate-800/30 rounded-lg border border-cyan-500/10">
                      <h4 className="font-semibold text-cyan-400 mb-2">{segment.segment}</h4>
                      <p className="text-sm text-gray-400 mb-1">
                        <span className="text-gray-500">العمر:</span> {segment.age}
                      </p>
                      <p className="text-sm text-gray-400 mb-2">
                        <span className="text-gray-500">المنصات:</span> {segment.platforms}
                      </p>
                      <p className="text-sm text-cyan-400">{segment.message}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Social Media Tab */}
        {activeTab === "social" && (
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>إحصائيات وسائل التواصل الاجتماعي</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-cyan-500/20">
                        <th className="text-left py-3 px-4 text-cyan-400">المنصة</th>
                        <th className="text-left py-3 px-4 text-cyan-400">المتابعون</th>
                        <th className="text-left py-3 px-4 text-cyan-400">معدل التفاعل</th>
                        <th className="text-left py-3 px-4 text-cyan-400">الإجراء</th>
                      </tr>
                    </thead>
                    <tbody>
                      {socialStats.map((stat, idx) => (
                        <tr key={idx} className="border-b border-cyan-500/10 hover:bg-slate-800/30 transition">
                          <td className="py-3 px-4 font-semibold">{stat.platform}</td>
                          <td className="py-3 px-4 text-cyan-400">{stat.followers}</td>
                          <td className="py-3 px-4 text-green-400">{stat.engagement}</td>
                          <td className="py-3 px-4">
                            <Button
                              size="sm"
                              className="bg-cyan-500 hover:bg-cyan-600"
                              onClick={() =>
                                window.open(
                                  `https://${stat.platform === "فيسبوك" ? "facebook.com" : "twitter.com"}/alphafoot`,
                                  "_blank"
                                )
                              }
                            >
                              <Share2 className="w-4 h-4 mr-2" />
                              متابعة
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Social Strategy */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  platform: "فيسبوك",
                  focus: "المدربين والأكاديميات",
                  content: "قصص نجاح، نصائح، عروض",
                  frequency: "3 منشورات يومياً",
                },
                {
                  platform: "تويتر",
                  focus: "المتخصصين والإعلاميين",
                  content: "أخبار، تحليلات، نقاشات",
                  frequency: "10 تغريدات يومياً",
                },
                {
                  platform: "إنستجرام",
                  focus: "الشباب والمتابعين",
                  content: "صور، Reels، Stories",
                  frequency: "2-3 منشورات يومياً",
                },
                {
                  platform: "تيك توك",
                  focus: "المراهقين والشباب",
                  content: "تحديات، نصائح، محتوى مضحك",
                  frequency: "20 فيديو أسبوعياً",
                },
              ].map((strategy, idx) => (
                <Card
                  key={idx}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{strategy.platform}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-400">التركيز:</p>
                      <p className="text-cyan-400">{strategy.focus}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">نوع المحتوى:</p>
                      <p className="text-cyan-400">{strategy.content}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">التكرار:</p>
                      <p className="text-cyan-400">{strategy.frequency}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === "campaigns" && (
          <div className="grid md:grid-cols-2 gap-6">
            {campaigns.map((campaign, idx) => (
              <Card
                key={idx}
                className={`bg-gradient-to-br ${campaign.color} opacity-20 backdrop-blur border border-cyan-500/20 hover:opacity-30 transition`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{campaign.name}</CardTitle>
                      <CardDescription>{campaign.description}</CardDescription>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        campaign.status === "نشط"
                          ? "bg-green-500/30 text-green-400"
                          : "bg-yellow-500/30 text-yellow-400"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">الهدف</p>
                      <p className="text-lg font-semibold text-white">{campaign.goal}</p>
                    </div>
                    <Zap className="w-8 h-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Content Tab */}
        {activeTab === "content" && (
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5 text-cyan-400" />
                استراتيجية المحتوى
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-cyan-500/20">
                      <th className="text-left py-3 px-4 text-cyan-400">نوع المحتوى</th>
                      <th className="text-left py-3 px-4 text-cyan-400">المنصات</th>
                      <th className="text-left py-3 px-4 text-cyan-400">التكرار</th>
                      <th className="text-left py-3 px-4 text-cyan-400">الوصول المتوقع</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contentTypes.map((content, idx) => (
                      <tr key={idx} className="border-b border-cyan-500/10 hover:bg-slate-800/30 transition">
                        <td className="py-3 px-4 font-semibold">{content.type}</td>
                        <td className="py-3 px-4 text-sm text-gray-400">{content.platforms}</td>
                        <td className="py-3 px-4 text-cyan-400">{content.frequency}</td>
                        <td className="py-3 px-4 text-green-400 font-semibold">{content.reach}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">انضم إلى الثورة التسويقية</h2>
          <p className="text-gray-400 mb-6">كن جزءاً من أكبر حملة تسويقية فيروسية في كرة القدم</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-cyan-500 hover:bg-cyan-600 flex items-center gap-2">
              <Heart className="w-4 h-4" />
              شارك المحتوى
            </Button>
            <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
              <MessageSquare className="w-4 h-4 mr-2" />
              تواصل معنا
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
