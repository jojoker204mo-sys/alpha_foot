import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Clock, Globe, Award, Users, Zap } from "lucide-react";
import { useLocation } from "wouter";

export default function CustomerService() {
  const [, navigate] = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState<"ar" | "en">("ar");

  const content = {
    ar: {
      title: "خدمة العملاء 24/7",
      subtitle: "نحن هنا لمساعدتك في أي وقت",
      founder: "مهاب عماد إبراهيم حسن",
      founderTitle: "المؤسس والمطور",
      whatsapp: "01061525548",
      description: "منصة Alpha Foot تقدم خدمة عملاء متميزة على مدار الساعة طوال أيام الأسبوع",
      contactMethods: [
        {
          icon: MessageCircle,
          title: "واتس آب",
          description: "تواصل معنا فوراً عبر واتس آب",
          value: "01061525548",
          color: "from-green-500 to-emerald-500",
        },
        {
          icon: Phone,
          title: "الهاتف",
          description: "اتصل بنا مباشرة",
          value: "+20 106 152 5548",
          color: "from-blue-500 to-cyan-500",
        },
        {
          icon: Mail,
          title: "البريد الإلكتروني",
          description: "أرسل لنا رسالة",
          value: "support@alphafoot.eg",
          color: "from-purple-500 to-pink-500",
        },
        {
          icon: Clock,
          title: "الساعات",
          description: "متاح 24/7",
          value: "طوال الوقت",
          color: "from-orange-500 to-red-500",
        },
      ],
      services: [
        "الدعم الفني الفوري",
        "الاستشارات التدريبية",
        "حل المشاكل والأخطاء",
        "تدريب على استخدام المنصة",
        "تقديم الاقتراحات والملاحظات",
        "معالجة الشكاوى",
      ],
      documentation: "التوثيق العالمي",
      guinness: "معايير جينيس العالمية",
      aiAdvanced: "نظام ذكاء اصطناعي متقدم",
      aiDescription: "تقنية سابقة للوعي البشري والذكاء الاصطناعي",
    },
    en: {
      title: "24/7 Customer Service",
      subtitle: "We are here to help you anytime",
      founder: "Mohab Emad Ibrahim Hassan",
      founderTitle: "Founder & Developer",
      whatsapp: "01061525548",
      description: "Alpha Foot platform provides excellent customer service around the clock",
      contactMethods: [
        {
          icon: MessageCircle,
          title: "WhatsApp",
          description: "Contact us immediately via WhatsApp",
          value: "01061525548",
          color: "from-green-500 to-emerald-500",
        },
        {
          icon: Phone,
          title: "Phone",
          description: "Call us directly",
          value: "+20 106 152 5548",
          color: "from-blue-500 to-cyan-500",
        },
        {
          icon: Mail,
          title: "Email",
          description: "Send us a message",
          value: "support@alphafoot.eg",
          color: "from-purple-500 to-pink-500",
        },
        {
          icon: Clock,
          title: "Hours",
          description: "Available 24/7",
          value: "All the time",
          color: "from-orange-500 to-red-500",
        },
      ],
      services: [
        "Immediate Technical Support",
        "Training Consultations",
        "Problem Solving",
        "Platform Training",
        "Feedback & Suggestions",
        "Complaint Handling",
      ],
      documentation: "International Documentation",
      guinness: "Guinness World Records Standards",
      aiAdvanced: "Advanced AI System",
      aiDescription: "Technology beyond human consciousness and artificial intelligence",
    },
  };

  const t = content[selectedLanguage];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white ${selectedLanguage === "ar" ? "rtl" : "ltr"}`}>
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
            <div className="flex gap-2">
              <Button
                onClick={() => setSelectedLanguage("ar")}
                variant={selectedLanguage === "ar" ? "default" : "outline"}
                className={selectedLanguage === "ar" ? "bg-cyan-500 hover:bg-cyan-600" : "border-cyan-500/50 text-cyan-400"}
              >
                العربية
              </Button>
              <Button
                onClick={() => setSelectedLanguage("en")}
                variant={selectedLanguage === "en" ? "default" : "outline"}
                className={selectedLanguage === "en" ? "bg-cyan-500 hover:bg-cyan-600" : "border-cyan-500/50 text-cyan-400"}
              >
                English
              </Button>
            </div>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
            >
              {selectedLanguage === "ar" ? "العودة" : "Back"}
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
          <p className="text-gray-400 text-lg">{t.subtitle}</p>
        </div>

        {/* Founder Information */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              {selectedLanguage === "ar" ? "المؤسس والمطور" : "Founder & Developer"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-cyan-400 mb-2">{t.founder}</h2>
                <p className="text-gray-400 mb-4">{t.founderTitle}</p>
                <p className="text-gray-300 mb-4">
                  {selectedLanguage === "ar"
                    ? "مبتكر ومطور منصة Alpha Foot - أول منصة عالمية متقدمة في مجال تطوير كرة القدم الأكاديمي والمهني"
                    : "Innovator and developer of Alpha Foot platform - the first advanced global platform in the field of academic and professional football development"}
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg p-6 border border-cyan-500/30">
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">{selectedLanguage === "ar" ? "واتس آب" : "WhatsApp"}</p>
                    <p className="text-2xl font-bold text-cyan-400">{t.whatsapp}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{selectedLanguage === "ar" ? "البريد الإلكتروني" : "Email"}</p>
                    <p className="text-lg font-semibold">support@alphafoot.eg</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {t.contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <Card key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 hover:border-cyan-500/50 transition">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} p-2 mb-2`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-cyan-400 font-semibold">{method.value}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Services */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-400" />
              {selectedLanguage === "ar" ? "خدماتنا" : "Our Services"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.services.map((service, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <div className="text-cyan-400 text-xl">✓</div>
                  <p className="text-gray-300">{service}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Advanced Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                {t.documentation}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                {selectedLanguage === "ar"
                  ? "توثيق عالمي شامل للمشروع والمؤسس وفقاً لمعايير جينيس العالمية"
                  : "Comprehensive international documentation for the project and founder according to Guinness World Records standards"}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                {t.guinness}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                {selectedLanguage === "ar"
                  ? "المنصة تتوافق مع أعلى معايير جينيس العالمية للتوثيق والابتكار"
                  : "The platform complies with the highest Guinness World Records standards for documentation and innovation"}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                {t.aiAdvanced}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                {selectedLanguage === "ar"
                  ? t.aiDescription
                  : t.aiDescription}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
