import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, BarChart3, Users, Video, MessageSquare, Shield } from "lucide-react";
import { getLoginUrl } from "@/const";
import { useLocation } from "wouter";

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      window.location.href = getLoginUrl();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="font-bold text-white">AF</span>
            </div>
            <span className="text-xl font-bold">Alpha Foot</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="hover:text-cyan-400 transition">الميزات</a>
            <a href="#about" className="hover:text-cyan-400 transition">عن المشروع</a>
            <a href="#contact" className="hover:text-cyan-400 transition">التواصل</a>
            {isAuthenticated ? (
              <Button onClick={() => navigate("/dashboard")} className="bg-cyan-500 hover:bg-cyan-600">
                لوحة التحكم
              </Button>
            ) : (
              <Button onClick={handleGetStarted} className="bg-cyan-500 hover:bg-cyan-600">
                ابدأ الآن
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-semibold">
                🚀 تقنية المستقبل
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                التطوير الأكاديمي والمهني
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> لكرة القدم المصرية</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                منصة متقدمة تجمع بين التدريب التقليدي والعصبي مع الذكاء الاصطناعي لتطوير الموهبة الكروية المصرية نحو عام 2030
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg">
                ابدأ الآن <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg">
                اعرف المزيد
              </Button>
            </div>
          </div>
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/30 rounded-3xl p-8 h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <Brain className="w-24 h-24 mx-auto text-cyan-400 animate-pulse" />
                <p className="text-gray-300">نظام التوأم الرقمي المعرفي</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">الميزات الرئيسية</h2>
            <p className="text-gray-400 text-lg">تقنيات مبتكرة تسبق الوعي البشري والذكاء الاصطناعي</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: "التوأم الرقمي المعرفي", desc: "نموذج افتراضي متقدم لكل لاعب" },
              { icon: Zap, title: "التدريب العصبي الغامر", desc: "تقنيات VR و AR للتدريب المتقدم" },
              { icon: BarChart3, title: "التحليلات الذكية", desc: "تقارير وتحليلات تفاعلية فورية" },
              { icon: Video, title: "تحليل الفيديو الذكي", desc: "استخراج إحصائيات الأداء تلقائياً" },
              { icon: Users, title: "سوق المواهب اللامركزي", desc: "نظام عرض وتقييم اللاعبين" },
              { icon: MessageSquare, title: "مساعد ذكي", desc: "نصائح تدريبية مخصصة 24/7" },
              { icon: Shield, title: "إدارة آمنة", desc: "حماية بيانات اللاعبين والمدربين" },
              { icon: Zap, title: "إشعارات فورية", desc: "تنبيهات ذكية للجلسات والإنجازات" },
            ].map((feature, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "جدول بيانات متقدم" },
              { number: "8", label: "ميزات أساسية" },
              { number: "3", label: "أنواع مستخدمين" },
              { number: "2030", label: "رؤيتنا المستقبلية" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl font-bold text-cyan-400">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur border border-cyan-500/50 rounded-3xl p-12 text-center space-y-6">
          <h2 className="text-4xl font-bold">هل أنت مستعد للانضمام؟</h2>
          <p className="text-xl text-gray-300">ابدأ رحلتك نحو التطوير الأكاديمي والمهني مع أفضل المنصات التقنية</p>
          <Button onClick={handleGetStarted} size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-6 text-lg">
            ابدأ الآن مجاناً <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-12 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Alpha Foot. جميع الحقوق محفوظة. | تطوير المواهب الكروية المصرية نحو 2030</p>
        </div>
      </footer>
    </div>
  );
}
