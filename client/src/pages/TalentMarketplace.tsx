import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  Filter,
  Star,
  MapPin,
  Zap,
  Users,
  Trophy,
  Heart,
  MessageCircle,
  ArrowRight,
  Globe,
} from "lucide-react";
import { useLocation } from "wouter";

export default function TalentMarketplace() {
  const [, navigate] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    position: "all",
    level: "all",
    country: "all",
    age: "all",
  });

  const talents = [
    {
      id: 1,
      name: "أحمد محمود",
      position: "مهاجم",
      level: "نخبة",
      age: 24,
      country: "مصر",
      rating: 4.9,
      reviews: 127,
      image: "🟦",
      achievements: ["كأس مصر", "الدوري الممتاز", "المنتخب الوطني"],
      price: "متاح للتفاوض",
    },
    {
      id: 2,
      name: "محمد علي",
      position: "مدافع",
      level: "متقدم",
      age: 22,
      country: "مصر",
      rating: 4.7,
      reviews: 95,
      image: "🟩",
      achievements: ["دوري أفريقي", "بطولة شباب"],
      price: "متاح للتفاوض",
    },
    {
      id: 3,
      name: "فاطمة أحمد",
      position: "وسط",
      level: "متقدم",
      age: 20,
      country: "مصر",
      rating: 4.6,
      reviews: 78,
      image: "🟪",
      achievements: ["بطولة شباب", "أكاديمية معتمدة"],
      price: "متاح للتفاوض",
    },
    {
      id: 4,
      name: "سارة محمد",
      position: "حارس مرمى",
      level: "متقدم",
      age: 23,
      country: "السعودية",
      rating: 4.8,
      reviews: 112,
      image: "🟨",
      achievements: ["بطولة آسيا", "المنتخب الوطني"],
      price: "متاح للتفاوض",
    },
    {
      id: 5,
      name: "خالد سالم",
      position: "مهاجم",
      level: "متقدم",
      age: 21,
      country: "الإمارات",
      rating: 4.5,
      reviews: 65,
      image: "🟧",
      achievements: ["دوري الإمارات", "كأس الخليج"],
      price: "متاح للتفاوض",
    },
    {
      id: 6,
      name: "ليلى حسن",
      position: "وسط",
      level: "نخبة",
      age: 25,
      country: "مصر",
      rating: 4.9,
      reviews: 140,
      image: "🟦",
      achievements: ["كأس أفريقيا", "المنتخب الوطني", "أفضل لاعبة"],
      price: "متاح للتفاوض",
    },
  ];

  const positions = ["all", "مهاجم", "وسط", "مدافع", "حارس مرمى"];
  const levels = ["all", "نخبة", "متقدم", "متوسط", "مبتدئ"];
  const countries = ["all", "مصر", "السعودية", "الإمارات", "الكويت", "الأردن"];
  const ages = ["all", "18-21", "22-25", "26-30", "30+"];

  const filteredTalents = talents.filter((talent) => {
    const matchesSearch =
      talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.position.includes(searchQuery);
    const matchesPosition = selectedFilters.position === "all" || talent.position === selectedFilters.position;
    const matchesLevel = selectedFilters.level === "all" || talent.level === selectedFilters.level;
    const matchesCountry = selectedFilters.country === "all" || talent.country === selectedFilters.country;
    const matchesAge =
      selectedFilters.age === "all" ||
      (selectedFilters.age === "18-21" && talent.age >= 18 && talent.age <= 21) ||
      (selectedFilters.age === "22-25" && talent.age >= 22 && talent.age <= 25) ||
      (selectedFilters.age === "26-30" && talent.age >= 26 && talent.age <= 30) ||
      (selectedFilters.age === "30+" && talent.age >= 30);

    return matchesSearch && matchesPosition && matchesLevel && matchesCountry && matchesAge;
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
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Globe className="w-10 h-10 text-cyan-400" />
            سوق المواهب اللامركزي
          </h1>
          <p className="text-gray-400 text-lg">اكتشف أفضل المواهب من حول العالم</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="ابحث عن لاعب أو مدرب..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
            />
          </div>

          {/* Filters */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "الموضع", key: "position", options: positions },
              { label: "المستوى", key: "level", options: levels },
              { label: "الدولة", key: "country", options: countries },
              { label: "العمر", key: "age", options: ages },
            ].map((filter) => (
              <select
                key={filter.key}
                value={selectedFilters[filter.key as keyof typeof selectedFilters]}
                onChange={(e) =>
                  setSelectedFilters({
                    ...selectedFilters,
                    [filter.key]: e.target.value,
                  })
                }
                className="px-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:border-cyan-500/50"
              >
                {filter.options.map((option) => (
                  <option key={option} value={option}>
                    {option === "all" ? `كل ${filter.label}` : option}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center gap-2 text-gray-400">
          <Filter className="w-4 h-4" />
          <span>
            تم العثور على <span className="text-cyan-400 font-semibold">{filteredTalents.length}</span> موهبة
          </span>
        </div>

        {/* Talents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTalents.map((talent) => (
            <Card
              key={talent.id}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 hover:border-cyan-500/50 transition overflow-hidden group"
            >
              {/* Header with Image */}
              <div className="h-32 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                {talent.image}
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{talent.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <Zap className="w-4 h-4" />
                      {talent.position}
                    </CardDescription>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-cyan-500/30 text-cyan-400">
                    {talent.level}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Info */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-400">العمر</p>
                    <p className="text-cyan-400 font-semibold">{talent.age} سنة</p>
                  </div>
                  <div>
                    <p className="text-gray-400">الدولة</p>
                    <p className="text-cyan-400 font-semibold flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {talent.country}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(talent.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">
                    {talent.rating} ({talent.reviews} تقييم)
                  </span>
                </div>

                {/* Achievements */}
                <div>
                  <p className="text-sm text-gray-400 mb-2">الإنجازات</p>
                  <div className="flex flex-wrap gap-1">
                    {talent.achievements.map((achievement, idx) => (
                      <span key={idx} className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="p-2 bg-slate-800/50 rounded border border-cyan-500/10">
                  <p className="text-xs text-gray-400">السعر</p>
                  <p className="text-cyan-400 font-semibold">{talent.price}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-sm">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    تواصل
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredTalents.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">لم يتم العثور على مواهب</h3>
            <p className="text-gray-500">حاول تغيير معايير البحث</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">هل أنت موهبة؟</h2>
          <p className="text-gray-400 mb-6">انضم إلى سوق المواهب وعرّف نفسك على الأندية والمدربين</p>
          <Button className="bg-cyan-500 hover:bg-cyan-600 flex items-center gap-2 mx-auto">
            <ArrowRight className="w-4 h-4" />
            أضف ملفك الآن
          </Button>
        </div>
      </div>
    </div>
  );
}
