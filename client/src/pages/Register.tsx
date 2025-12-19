import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Shield, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export default function Register() {
  const [, navigate] = useLocation();
  const [selectedRole, setSelectedRole] = useState<"player" | "coach" | "admin" | null>(null);

  const roles = [
    {
      id: "player",
      title: "لاعب كرة قدم",
      description: "تطوير مهاراتك الأكاديمية والمهنية مع نظام التوأم الرقمي المعرفي",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "coach",
      title: "مدرب",
      description: "إدارة برامج التدريب والجلسات مع تحليلات متقدمة للاعبيك",
      icon: Award,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "admin",
      title: "إدارة / مالك أكاديمية",
      description: "إدارة شاملة للأكاديمية والمستخدمين والبرامج التدريبية",
      icon: Shield,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-xl">AF</span>
            </div>
            <span className="text-3xl font-bold">Alpha Foot</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">اختر نوع حسابك</h1>
          <p className="text-gray-400 text-lg">اختر الدور الذي يناسبك للبدء في رحلتك مع منصة Alpha Foot</p>
        </div>

        {/* Role Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {roles.map((role) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;
            return (
              <Card
                key={role.id}
                className={`cursor-pointer transition-all duration-300 border-2 ${
                  isSelected
                    ? "border-cyan-500 bg-cyan-500/10"
                    : "border-cyan-500/20 hover:border-cyan-500/50 bg-slate-800/50"
                } backdrop-blur`}
                onClick={() => setSelectedRole(role.id as "player" | "coach" | "admin")}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${role.color} p-3 mb-4`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base">
                    {role.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Selected Role Details */}
        {selectedRole && (
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur border border-cyan-500/50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">ماذا ستحصل عليه؟</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {selectedRole === "player" && (
                <>
                  <div className="flex gap-3">
                    <div className="text-cyan-400 text-2xl">✓</div>
                    <div>
                      <h3 className="font-semibold mb-1">لوحة تحكم التوأم الرقمي</h3>
                      <p className="text-gray-300 text-sm">عرض بيانات الأداء البدنية والتقنية والمعرفية</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-cyan-400 text-2xl">✓</div>
                    <div>
                      <h3 className="font-semibold mb-1">تقارير تفاعلية</h3>
                      <p className="text-gray-300 text-sm">تحليلات مفصلة لتطورك الأكاديمي والمهني</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-cyan-400 text-2xl">✓</div>
                    <div>
                      <h3 className="font-semibold mb-1">مساعد ذكي</h3>
                      <p className="text-gray-300 text-sm">نصائح تدريبية مخصصة 24/7</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-cyan-400 text-2xl">✓</div>
                    <div>
                      <h3 className="font-semibold mb-1">محتوى تعليمي</h3>
                      <p className="text-gray-300 text-sm">فيديوهات ودروس تفاعلية متخصصة</p>
                    </div>
                  </div>
                </>
              )}
              {selectedRole === "coach" && (
                <>
                  <div className="flex gap-3">
                    <div className="text-cyan-400 text-2xl">✓</div>
                    <div>
                      <h3 className="font-semibold mb-1">إدارة البرامج التدريبية</h3>
                      <p className="text-gray-300 text-sm">إنشاء وجدولة البرامج والجلسات</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-cyan-400 text-2xl">✓</div>
                    <div>
                      <h3 className="font-semibold mb-1">تحليل الأداء</h3>
                      <p className="text-gray-300 text-sm">بيانات مفصلة عن أداء لاعبيك</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-cyan-400 text-2xl">✓</div>
                    <div>
                      <h3 className="font-semibold mb-1">تحليل الفيديو الذكي</h3>
                      <p className="text-gray-300 text-sm">استخراج إحصائيات الأداء تلقائياً</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-cyan-400 text-2xl">✓</div>
                    <div>
                      <h3 className="font-semibold mb-1">إدارة الفريق</h3>
                      <p className="text-gray-300 text-sm">تتبع حضور اللاعبين والتقييمات</p>
                    </div>
                  </div>
                </>
              )}
              {selectedRole === "admin" && (
                <>
                  <div className="flex gap-3">
                    <div className="text-cyan-400 text-2xl">✓</div>
                    <div>
                      <h3 className="font-semibold mb-1">إدارة المستخدمين</h3>
                      <p className="text-gray-300 text-sm">إضافة وإدارة اللاعبين والمدربين</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-cyan-400 text-2xl">✓</div>
                    <div>
                      <h3 className="font-semibold mb-1">إدارة الأكاديمية</h3>
                      <p className="text-gray-300 text-sm">معلومات شاملة عن الأكاديمية</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-cyan-400 text-2xl">✓</div>
                    <div>
                      <h3 className="font-semibold mb-1">التقارير الإدارية</h3>
                      <p className="text-gray-300 text-sm">تقارير شاملة عن الأداء والإحصائيات</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-cyan-400 text-2xl">✓</div>
                    <div>
                      <h3 className="font-semibold mb-1">إدارة البرامج</h3>
                      <p className="text-gray-300 text-sm">إنشاء وإدارة جميع البرامج التدريبية</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg"
          >
            العودة للخلف
          </Button>
          <Button
            disabled={!selectedRole}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            المتابعة <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
