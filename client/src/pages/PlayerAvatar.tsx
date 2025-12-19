import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, TrendingUp, Star, Award, Camera } from "lucide-react";
import { useLocation } from "wouter";

export default function PlayerAvatar() {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const [beforeImage, setBeforeImage] = useState<string | null>(null);
  const [afterImage, setAfterImage] = useState<string | null>(null);
  const [avatarLevel, setAvatarLevel] = useState(1);
  const [totalXP, setTotalXP] = useState(0);
  const [progressionPercentage, setProgressionPercentage] = useState(0);

  // Mock data for demonstration
  const achievements = [
    { title: "البداية القوية", description: "أكمل ملفك الشخصي", icon: "🎯", earned: true },
    { title: "صورة احترافية", description: "أضف صورة شخصية احترافية", icon: "📸", earned: beforeImage ? true : false },
    { title: "تطور ملحوظ", description: "حقق تقدماً في مستوى الأداء", icon: "📈", earned: afterImage ? true : false },
    { title: "المثابرة", description: "أكمل 10 جلسات تدريبية", icon: "💪", earned: false },
    { title: "النجم الصاعد", description: "حقق تقييماً 8/10 أو أعلى", icon: "⭐", earned: false },
    { title: "الكفاءة", description: "أكمل برنامجاً تدريبياً كاملاً", icon: "🏆", earned: false },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "before" | "after") => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target?.result as string;
        if (type === "before") {
          setBeforeImage(imageData);
        } else {
          setAfterImage(imageData);
          setProgressionPercentage(Math.min(100, progressionPercentage + 25));
        }
      };
      reader.readAsDataURL(file);
    }
  };

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
          <h1 className="text-4xl font-bold mb-2">توأمك الرقمي المعرفي</h1>
          <p className="text-gray-400">تابع تطورك الشخصي والمهني مع نظام التجسيد المتقدم</p>
        </div>

        {/* Avatar Level and XP */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-300">مستوى التوأم الرقمي</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-cyan-400">{avatarLevel}</div>
              <p className="text-gray-400 text-sm mt-2">مستوى متقدم</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-300 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                إجمالي نقاط الخبرة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-blue-400">{totalXP}</div>
              <p className="text-gray-400 text-sm mt-2">نقطة</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-300 flex items-center gap-2">
                <Award className="w-4 h-4" />
                نسبة التطور
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-purple-400">{progressionPercentage}%</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressionPercentage}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Before and After Photos */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Before Photo */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-cyan-400" />
                الصورة الأولية
              </CardTitle>
              <CardDescription>صورتك عند بدء البرنامج</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {beforeImage ? (
                  <div className="relative w-full h-80 rounded-lg overflow-hidden border-2 border-cyan-500/30">
                    <img src={beforeImage} alt="Before" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-full h-80 rounded-lg border-2 border-dashed border-cyan-500/30 flex items-center justify-center bg-slate-800/30">
                    <div className="text-center">
                      <Camera className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-400">لم تضف صورة بعد</p>
                    </div>
                  </div>
                )}
                <label className="block">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, "before")}
                    className="hidden"
                  />
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 cursor-pointer">
                    <Upload className="w-4 h-4 mr-2" />
                    رفع الصورة الأولية
                  </Button>
                </label>
              </div>
            </CardContent>
          </Card>

          {/* After Photo */}
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-cyan-400" />
                صورة التطور
              </CardTitle>
              <CardDescription>صورتك بعد اتباع البرنامج</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {afterImage ? (
                  <div className="relative w-full h-80 rounded-lg overflow-hidden border-2 border-cyan-500/30">
                    <img src={afterImage} alt="After" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-full h-80 rounded-lg border-2 border-dashed border-cyan-500/30 flex items-center justify-center bg-slate-800/30">
                    <div className="text-center">
                      <Camera className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-400">لم تضف صورة بعد</p>
                    </div>
                  </div>
                )}
                <label className="block">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, "after")}
                    className="hidden"
                  />
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 cursor-pointer">
                    <Upload className="w-4 h-4 mr-2" />
                    رفع صورة التطور
                  </Button>
                </label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-cyan-400" />
              الإنجازات والشارات
            </CardTitle>
            <CardDescription>الإنجازات التي حققتها في رحلتك</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    achievement.earned
                      ? "border-cyan-500/50 bg-cyan-500/10"
                      : "border-gray-600/30 bg-gray-800/20 opacity-60"
                  }`}
                >
                  <div className="text-4xl mb-2">{achievement.icon}</div>
                  <h3 className="font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                  {achievement.earned && (
                    <div className="mt-2 text-cyan-400 text-sm font-semibold">✓ تم الحصول عليها</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
