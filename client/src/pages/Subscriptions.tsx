import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Check,
  X,
  Zap,
  Crown,
  Gem,
  Star,
  TrendingUp,
  Users,
  BarChart3,
  Video,
  MessageSquare,
  Download,
  Shield,
  Award,
} from "lucide-react";
import { PerformanceIcon, AnalyticsIcon, BrainIcon, ChatIcon, PlayerIcon, GoalIcon, TrainingIcon, CoachingIcon, StatsIcon, DashboardIcon, ReportsIcon, SearchIcon, FilterIcon, EditIcon, DeleteIcon } from "@/components/icons/AlphaFootIcons";
import { useLocation } from "wouter";

export default function Subscriptions() {
  const [, navigate] = useLocation();
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [userType, setUserType] = useState("player");

  const playerPlans = [
    {
      name: "أساسي",
      price: 99,
      icon: Star,
      description: "للاعبين الناشئين",
      features: [
        "لوحة تحكم شخصية",
        "تقارير أداء أساسية",
        "مساعد ذكي محدود",
        "مكتبة محتوى (100 فيديو)",
        "دعم البريد الإلكتروني",
      ],
      notIncluded: [
        "تحليل فيديو متقدم",
        "استشارات مع الخبراء",
        "برامج تدريبية مخصصة",
        "شهادات دولية",
      ],
      popular: false,
    },
    {
      name: "احترافي",
      price: 299,
      icon: Crown,
      description: "للاعبين المحترفين",
      features: [
        "كل ميزات الأساسي",
        "تحليل فيديو متقدم",
        "برامج تدريبية مخصصة",
        "مكتبة محتوى كاملة (1000 فيديو)",
        "استشارات شهرية مع الخبراء",
        "دعم الأولوية",
        "شهادات دولية",
      ],
      notIncluded: [
        "إدارة فريق",
        "تحليل متقدم للفريق",
        "نظام الإحالات المتقدم",
      ],
      popular: true,
    },
    {
      name: "نخبة",
      price: 599,
      icon: Gem,
      description: "للاعبين النخبة",
      features: [
        "كل ميزات الاحترافي",
        "إدارة فريق كاملة",
        "تحليل متقدم للفريق",
        "استشارات أسبوعية مع الخبراء",
        "برامج تدريبية متقدمة",
        "شهادات دولية متقدمة",
        "دعم 24/7",
        "نظام الإحالات المتقدم",
      ],
      notIncluded: [],
      popular: false,
    },
  ];

  const coachPlans = [
    {
      name: "مدرب مبتدئ",
      price: 199,
      icon: Star,
      description: "للمدربين الجدد",
      features: [
        "لوحة تحكم المدرب",
        "إدارة فريق (حتى 10 لاعبين)",
        "تقارير أداء الفريق",
        "مكتبة محتوى تدريبي",
        "دعم البريد الإلكتروني",
      ],
      notIncluded: [
        "تحليل فيديو متقدم",
        "إدارة متقدمة للفريق",
        "برامج تدريبية متقدمة",
      ],
      popular: false,
    },
    {
      name: "مدرب محترف",
      price: 499,
      icon: Crown,
      description: "للمدربين المحترفين",
      features: [
        "كل ميزات المبتدئ",
        "إدارة فريق (حتى 50 لاعب)",
        "تحليل فيديو متقدم",
        "برامج تدريبية متقدمة",
        "استشارات مع الخبراء",
        "شهادات دولية",
        "دعم الأولوية",
      ],
      notIncluded: [
        "إدارة أكاديمية",
        "نظام الشراكات المتقدم",
      ],
      popular: true,
    },
    {
      name: "أكاديمية",
      price: 1499,
      icon: Gem,
      description: "للأكاديميات والأندية",
      features: [
        "كل ميزات المحترف",
        "إدارة أكاديمية كاملة",
        "إدارة فريق (عدد غير محدود)",
        "تحليل متقدم للأكاديمية",
        "برامج تدريبية متقدمة",
        "نظام الشراكات المتقدم",
        "استشارات أسبوعية",
        "دعم 24/7",
        "شهادات دولية متقدمة",
      ],
      notIncluded: [],
      popular: false,
    },
  ];

  const plans = userType === "player" ? playerPlans : coachPlans;

  const addOns = [
    {
      name: "تحليل فيديو متقدم",
      price: 99,
      description: "تحليل فيديو شامل مع إحصائيات متقدمة",
      icon: Video,
    },
    {
      name: "استشارة مع خبير",
      price: 199,
      description: "استشارة فردية مع خبير متخصص",
      icon: MessageSquare,
    },
    {
      name: "برنامج تدريبي مخصص",
      price: 299,
      description: "برنامج تدريبي مصمم خصيصاً لك",
      icon: TrendingUp,
    },
    {
      name: "شهادة دولية",
      price: 149,
      description: "شهادة معترف بها دولياً",
      icon: Award,
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
            onClick={() => navigate("/")}
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">خطط الاشتراك</h1>
          <p className="text-gray-400 text-lg mb-8">اختر الخطة المناسبة لك وابدأ رحلة التطور</p>

          {/* User Type Selection */}
          <div className="flex justify-center gap-4 mb-8">
            {[
              { id: "player", label: "لاعب" },
              { id: "coach", label: "مدرب" },
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setUserType(type.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  userType === type.id
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-800/50 text-gray-400 hover:bg-slate-700/50"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          {/* Billing Cycle */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { id: "monthly", label: "شهري" },
              { id: "yearly", label: "سنوي (توفير 20%)" },
            ].map((cycle) => (
              <button
                key={cycle.id}
                onClick={() => setBillingCycle(cycle.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  billingCycle === cycle.id
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-800/50 text-gray-400 hover:bg-slate-700/50"
                }`}
              >
                {cycle.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            const finalPrice =
              billingCycle === "yearly" ? Math.floor(plan.price * 12 * 0.8) : plan.price;
            const billingLabel = billingCycle === "yearly" ? "/سنة" : "/شهر";

            return (
              <Card
                key={idx}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border transition-all ${
                  plan.popular
                    ? "border-cyan-500/50 ring-2 ring-cyan-500/30 md:scale-105"
                    : "border-cyan-500/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      الأكثر شهرة
                    </span>
                  </div>
                )}

                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-12 h-12 text-cyan-400" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-cyan-400">
                      {finalPrice}
                    </span>
                    <span className="text-gray-400 ml-2">{billingLabel}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-cyan-500 hover:bg-cyan-600"
                        : "bg-slate-700 hover:bg-slate-600"
                    }`}
                  >
                    اختر هذه الخطة
                  </Button>

                  <div className="space-y-3">
                    <p className="font-semibold text-sm text-gray-300">المميزات المتضمنة:</p>
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.notIncluded.length > 0 && (
                    <div className="space-y-3 pt-6 border-t border-cyan-500/10">
                      <p className="font-semibold text-sm text-gray-400">غير متضمن:</p>
                      {plan.notIncluded.map((feature, nidx) => (
                        <div key={nidx} className="flex items-start gap-3">
                          <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Add-ons */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">إضافات مميزة</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, idx) => {
              const Icon = addon.icon;
              return (
                <Card
                  key={idx}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
                >
                  <CardContent className="pt-6 text-center">
                    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">{addon.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">{addon.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{addon.price}</span>
                      <span className="text-gray-400">/مرة</span>
                    </div>
                    <Button variant="outline" className="w-full border-cyan-500/50 text-cyan-400">
                      إضافة
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">مقارنة الخطط</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-cyan-500/20">
                  <th className="text-left py-4 px-4 font-semibold">الميزة</th>
                  {plans.map((plan, idx) => (
                    <th key={idx} className="text-center py-4 px-4 font-semibold">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "لوحة تحكم شخصية", values: [true, true, true] },
                  { feature: "تقارير الأداء", values: [true, true, true] },
                  { feature: "مساعد ذكي", values: [true, true, true] },
                  { feature: "تحليل فيديو", values: [false, true, true] },
                  { feature: "استشارات", values: [false, true, true] },
                  { feature: "برامج مخصصة", values: [false, true, true] },
                  { feature: "شهادات دولية", values: [false, true, true] },
                  { feature: "دعم 24/7", values: [false, false, true] },
                ].map((row, ridx) => (
                  <tr key={ridx} className="border-b border-cyan-500/10">
                    <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                    {row.values.map((value, vidx) => (
                      <td key={vidx} className="text-center py-4 px-4">
                        {value ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">الأسئلة الشائعة</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "هل يمكنني تغيير الخطة لاحقاً؟",
                a: "نعم، يمكنك تغيير الخطة في أي وقت. سيتم حساب الفرق في الفاتورة التالية.",
              },
              {
                q: "هل هناك فترة تجريبية مجانية؟",
                a: "نعم، نوفر فترة تجريبية مجانية لمدة 7 أيام لجميع الخطط.",
              },
              {
                q: "هل يمكنني الحصول على استرجاع المال؟",
                a: "نعم، نوفر ضمان استرجاع المال خلال 30 يوم إذا لم تكن راضياً.",
              },
              {
                q: "هل هناك خصومات للدفع السنوي؟",
                a: "نعم، توفر الخطط السنوية توفيراً بنسبة 20% مقارنة بالخطط الشهرية.",
              },
            ].map((faq, idx) => (
              <Card
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20"
              >
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3 text-cyan-400">{faq.q}</h3>
                  <p className="text-gray-400 text-sm">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
