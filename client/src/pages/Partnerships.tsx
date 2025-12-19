import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Handshake,
  Zap,
  TrendingUp,
  Users,
  Globe,
  Award,
  DollarSign,
  BarChart3,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useLocation } from "wouter";

export default function Partnerships() {
  const [, navigate] = useLocation();
  const [selectedPartner, setSelectedPartner] = useState("club");

  const partnerTypes = [
    { id: "club", label: "أندية" },
    { id: "academy", label: "أكاديميات" },
    { id: "brand", label: "علامات تجارية" },
    { id: "media", label: "وسائل إعلام" },
  ];

  const clubPartnership = {
    title: "شراكة الأندية",
    description: "تطوير لاعبيك من خلال منصتنا المتقدمة",
    benefits: [
      {
        icon: BarChart3,
        title: "تحليل متقدم",
        description: "تحليل شامل لأداء جميع لاعبيك",
      },
      {
        icon: Users,
        title: "إدارة فريق",
        description: "إدارة كاملة لفريقك وبرامجك التدريبية",
      },
      {
        icon: Award,
        title: "شهادات دولية",
        description: "شهادات معترف بها دولياً للاعبيك",
      },
      {
        icon: TrendingUp,
        title: "تطوير اللاعبين",
        description: "برامج تدريبية متقدمة وموجهة",
      },
      {
        icon: Globe,
        title: "عرض عالمي",
        description: "عرض لاعبيك على المنصة العالمية",
      },
      {
        icon: DollarSign,
        title: "عائدات إضافية",
        description: "عائدات من خلال برنامج الإحالات",
      },
    ],
    packages: [
      {
        name: "ذهبي",
        price: "2,999",
        description: "للأندية الصغيرة",
        features: [
          "إدارة فريق (حتى 30 لاعب)",
          "تحليل فيديو أساسي",
          "برامج تدريبية",
          "تقارير شهرية",
          "دعم البريد الإلكتروني",
        ],
      },
      {
        name: "بلاتيني",
        price: "5,999",
        description: "للأندية المتوسطة",
        features: [
          "إدارة فريق (حتى 100 لاعب)",
          "تحليل فيديو متقدم",
          "برامج تدريبية متقدمة",
          "تقارير أسبوعية",
          "استشارات مع الخبراء",
          "دعم الأولوية",
        ],
        popular: true,
      },
      {
        name: "ماسي",
        price: "9,999",
        description: "للأندية الكبرى",
        features: [
          "إدارة فريق (عدد غير محدود)",
          "تحليل فيديو متقدم جداً",
          "برامج تدريبية مخصصة",
          "تقارير يومية",
          "استشارات أسبوعية",
          "دعم 24/7",
          "نظام الشراكات المتقدم",
        ],
      },
    ],
  };

  const academyPartnership = {
    title: "شراكة الأكاديميات",
    description: "منصة شاملة لتطوير الناشئين",
    benefits: [
      {
        icon: BarChart3,
        title: "إدارة أكاديمية",
        description: "إدارة كاملة للأكاديمية والفرق",
      },
      {
        icon: Users,
        title: "تطوير الناشئين",
        description: "برامج متخصصة لتطوير الناشئين",
      },
      {
        icon: Award,
        title: "شهادات دولية",
        description: "شهادات معترف بها للناشئين",
      },
      {
        icon: TrendingUp,
        title: "متابعة الأداء",
        description: "متابعة شاملة لأداء جميع الناشئين",
      },
      {
        icon: Globe,
        title: "عرض عالمي",
        description: "عرض ناشئيك على المنصة العالمية",
      },
      {
        icon: DollarSign,
        title: "عائدات من الاكتشاف",
        description: "عائدات عند اكتشاف مواهب جديدة",
      },
    ],
    packages: [
      {
        name: "ناشئ",
        price: "1,999",
        description: "للأكاديميات الناشئة",
        features: [
          "إدارة أكاديمية أساسية",
          "إدارة فريق (حتى 50 ناشئ)",
          "برامج تدريبية",
          "تقارير شهرية",
          "دعم البريد الإلكتروني",
        ],
      },
      {
        name: "متقدم",
        price: "4,999",
        description: "للأكاديميات المتقدمة",
        features: [
          "إدارة أكاديمية متقدمة",
          "إدارة فريق (حتى 200 ناشئ)",
          "تحليل فيديو",
          "برامج تدريبية متقدمة",
          "تقارير أسبوعية",
          "استشارات مع الخبراء",
        ],
        popular: true,
      },
      {
        name: "نخبة",
        price: "8,999",
        description: "للأكاديميات النخبة",
        features: [
          "إدارة أكاديمية كاملة",
          "إدارة فريق (عدد غير محدود)",
          "تحليل فيديو متقدم",
          "برامج تدريبية مخصصة",
          "تقارير يومية",
          "استشارات أسبوعية",
          "دعم 24/7",
        ],
      },
    ],
  };

  const brandPartnership = {
    title: "شراكة العلامات التجارية",
    description: "الوصول إلى ملايين اللاعبين والمدربين",
    benefits: [
      {
        icon: BarChart3,
        title: "إعلانات موجهة",
        description: "إعلانات موجهة للفئة المستهدفة",
      },
      {
        icon: Users,
        title: "وصول ضخم",
        description: "وصول إلى ملايين المستخدمين النشطين",
      },
      {
        icon: Award,
        title: "رعاية حصرية",
        description: "رعاية حصرية لبطولات وأحداث",
      },
      {
        icon: TrendingUp,
        title: "ROI عالي",
        description: "عائد استثمار مضمون وعالي",
      },
      {
        icon: Globe,
        title: "وصول عالمي",
        description: "وصول إلى أسواق عالمية",
      },
      {
        icon: DollarSign,
        title: "عائدات مشتركة",
        description: "نموذج عائدات مشترك وعادل",
      },
    ],
    packages: [
      {
        name: "برونزي",
        price: "5,000",
        description: "للعلامات الناشئة",
        features: [
          "إعلانات موجهة",
          "عرض في التطبيق",
          "تقارير شهرية",
          "دعم البريد الإلكتروني",
        ],
      },
      {
        name: "فضي",
        price: "15,000",
        description: "للعلامات المتوسطة",
        features: [
          "إعلانات موجهة متقدمة",
          "عرض في التطبيق والموقع",
          "رعاية حدث",
          "تقارير أسبوعية",
          "دعم مخصص",
        ],
        popular: true,
      },
      {
        name: "ذهبي",
        price: "30,000",
        description: "للعلامات الكبرى",
        features: [
          "إعلانات موجهة متقدمة جداً",
          "عرض شامل",
          "رعاية حصرية",
          "تقارير يومية",
          "فريق دعم مخصص",
          "نموذج عائدات مشترك",
        ],
      },
    ],
  };

  const mediaPartnership = {
    title: "شراكة وسائل الإعلام",
    description: "محتوى حصري وتغطية شاملة",
    benefits: [
      {
        icon: BarChart3,
        title: "محتوى حصري",
        description: "محتوى حصري وتحليلات متقدمة",
      },
      {
        icon: Users,
        title: "جمهور ضخم",
        description: "وصول إلى جمهور ضخم ومتفاعل",
      },
      {
        icon: Award,
        title: "تغطية شاملة",
        description: "تغطية شاملة للأحداث والبطولات",
      },
      {
        icon: TrendingUp,
        title: "زيادة المشاهدات",
        description: "زيادة المشاهدات والمتابعين",
      },
      {
        icon: Globe,
        title: "توزيع عالمي",
        description: "توزيع المحتوى عالمياً",
      },
      {
        icon: DollarSign,
        title: "عائدات من الإعلانات",
        description: "عائدات من الإعلانات والرعاية",
      },
    ],
    packages: [
      {
        name: "محلي",
        price: "3,000",
        description: "للوسائل المحلية",
        features: [
          "محتوى حصري محلي",
          "تغطية الأحداث المحلية",
          "تقارير شهرية",
          "دعم البريد الإلكتروني",
        ],
      },
      {
        name: "إقليمي",
        price: "10,000",
        description: "للوسائل الإقليمية",
        features: [
          "محتوى حصري إقليمي",
          "تغطية الأحداث الإقليمية",
          "تقارير أسبوعية",
          "دعم مخصص",
        ],
        popular: true,
      },
      {
        name: "عالمي",
        price: "25,000",
        description: "للوسائل العالمية",
        features: [
          "محتوى حصري عالمي",
          "تغطية شاملة",
          "تقارير يومية",
          "فريق دعم مخصص",
          "عائدات من الإعلانات",
        ],
      },
    ],
  };

  const partnershipData = {
    club: clubPartnership,
    academy: academyPartnership,
    brand: brandPartnership,
    media: mediaPartnership,
  };

  const current = partnershipData[selectedPartner as keyof typeof partnershipData];

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
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Handshake className="w-10 h-10 text-cyan-400" />
            برامج الشراكة
          </h1>
          <p className="text-gray-400 text-lg">انضم إلينا وكن جزءاً من ثورة كرة القدم</p>
        </div>

        {/* Partner Type Selection */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {partnerTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedPartner(type.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedPartner === type.id
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-800/50 text-gray-400 hover:bg-slate-700/50"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Partnership Details */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">{current.title}</h2>
            <p className="text-gray-400 text-lg">{current.description}</p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {current.benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={idx}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
                >
                  <CardContent className="pt-6 text-center">
                    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-400">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Packages */}
          <div className="grid md:grid-cols-3 gap-8">
            {current.packages.map((pkg, idx) => (
              <Card
                key={idx}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border transition-all ${
                  pkg.popular
                    ? "border-cyan-500/50 ring-2 ring-cyan-500/30 md:scale-105"
                    : "border-cyan-500/20"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      الأكثر شهرة
                    </span>
                  </div>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {pkg.description}
                  </CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-cyan-400">
                      {pkg.price}
                    </span>
                    <span className="text-gray-400 ml-2">/شهر</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? "bg-cyan-500 hover:bg-cyan-600"
                        : "bg-slate-700 hover:bg-slate-600"
                    }`}
                  >
                    ابدأ الآن
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <div className="space-y-3">
                    {pkg.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/50">
          <CardContent className="pt-12 pb-12 text-center">
            <h3 className="text-2xl font-bold mb-4">هل أنت مهتم بالشراكة؟</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              تواصل معنا الآن واحصل على عرض مخصص يناسب احتياجاتك
            </p>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-lg px-8 py-6">
              اتصل بنا الآن
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
