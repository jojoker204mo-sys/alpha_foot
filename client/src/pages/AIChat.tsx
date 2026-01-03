import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Send,
  Paperclip,
  Loader2,
  Zap,
  MessageCircle,
  Video,
  Brain,
  TrendingUp,
  Settings,
  Download,
  Copy,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import { PerformanceIcon, AnalyticsIcon, BrainIcon, ChatIcon, PlayerIcon, GoalIcon, TrainingIcon, CoachingIcon, StatsIcon, DashboardIcon, ReportsIcon, SearchIcon, FilterIcon, EditIcon, DeleteIcon } from "@/components/icons/AlphaFootIcons";
import { useLocation } from "wouter";

export default function AIChat() {
  const [, navigate] = useLocation();
  const [messages, setMessages] = useState<Array<{ id: number; type: string; content: string; suggestions?: string[] }>>([
    {
      id: 1,
      type: "assistant",
      content: "مرحباً! أنا مساعدك الذكي في Alpha Foot. يمكنني مساعدتك في:",
      suggestions: [
        "تحليل أداء اللاعب",
        "توصيات تدريبية",
        "تحليل الفيديو",
        "نصائح التغذية",
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMode, setSelectedMode] = useState("general");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text = input) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: text,
      suggestions: [],
    };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        general: {
          content: `تحليل شامل: ${text}\n\nبناءً على البيانات المتاحة:\n• معدل الأداء الحالي: 88%\n• نقاط القوة: السرعة والدقة\n• نقاط التطوير: التحمل والذكاء التكتيكي\n\nالتوصيات:\n1. زيادة جلسات التحمل الهوائي\n2. تحسين الوعي التكتيكي من خلال مشاهدة الفيديوهات\n3. تحسين التغذية لزيادة الطاقة`,
          suggestions: [
            "برنامج تدريبي مخصص",
            "نصائح غذائية",
            "فيديوهات تعليمية",
          ],
        },
        video: {
          content: `تحليل الفيديو:\n\n📊 الإحصائيات:\n• عدد التمريرات: 45\n• دقة التمرير: 92%\n• عدد الركضات: 38\n• المسافة المقطوعة: 9.2 كم\n\n🎯 الملاحظات:\n• أداء ممتازة في الدفاع\n• تحسن في الحركة الهجومية\n• بعض الأخطاء في التمرير الطويل\n\n💡 التوصيات:\n• العمل على التمرير الطويل\n• تحسين الحركة بدون الكرة`,
          suggestions: [
            "تحليل مقارن",
            "نقاط الضعف",
            "برنامج تحسين",
          ],
        },
        nutrition: {
          content: `نصائح التغذية المخصصة:\n\n🥗 البرنامج الغذائي الموصى به:\n\nالإفطار:\n• بيض (3) + خبز أسمر\n• عصير برتقال طازج\n\nالغداء:\n• دجاج مشوي (200g)\n• أرز بني (150g)\n• خضروات متنوعة\n\nالعشاء:\n• سمك (150g)\n• بطاطا حلوة\n• سلطة خضراء\n\n📊 السعرات الحرارية: 2500-2800 سعرة يومياً\n⏰ التوقيت: 5 وجبات موزعة على اليوم`,
          suggestions: [
            "خطة تغذية أسبوعية",
            "مكملات غذائية",
            "وصفات صحية",
          ],
        },
        training: {
          content: `برنامج تدريبي مخصص:\n\n📅 الأسبوع الحالي:\n\nالاثنين:\n• إحماء (10 دقائق)\n• تدريب تقني (30 دقيقة)\n• تدريب بدني (20 دقيقة)\n• تبريد (5 دقائق)\n\nالأربعاء:\n• تدريب تكتيكي (40 دقيقة)\n• تدريب القوة (20 دقيقة)\n\nالجمعة:\n• مباراة ودية\n• تحليل الأداء\n\n💪 معدل الشدة: 75-85%\n⏱️ المدة الكلية: 3 ساعات يومياً`,
          suggestions: [
            "تعديل البرنامج",
            "زيادة الشدة",
            "فترات استرجاع",
          ],
        },
      };

      const response = responses[selectedMode as keyof typeof responses] || responses.general;
      const assistantMessage = {
        id: messages.length + 2,
        type: "assistant",
        content: response.content,
        suggestions: response.suggestions,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const modes: Array<{ id: string; label: string; icon: any }> = [
    { id: "general", label: "عام", icon: MessageCircle },
    { id: "video", label: "تحليل فيديو", icon: Video },
    { id: "nutrition", label: "التغذية", icon: null },
    { id: "training", label: "التدريب", icon: TrendingUp },
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-80px)] flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Brain className="w-8 h-8 text-cyan-400" />
            مساعد ذكي متقدم
          </h1>
          <p className="text-gray-400">تحليل شامل وتوصيات مخصصة لتطويرك</p>
        </div>

        {/* Mode Selection */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {modes.map((mode) => {
            const Icon = typeof mode.icon === "string" ? null : mode.icon;
            return (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                  selectedMode === mode.id
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-800/50 text-gray-400 hover:bg-slate-700/50"
                }`}
              >
                {Icon ? <Icon className="w-4 h-4" /> : <span>{mode.id === "nutrition" ? "🥗" : ""}</span>}
                {mode.label}
              </button>
            );
          })}
        </div>

        {/* Chat Container */}
        <div className="flex-1 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-lg p-6 overflow-y-auto mb-6 flex flex-col">
          <div className="space-y-4 flex-1">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-md lg:max-w-2xl ${
                    message.type === "user"
                      ? "bg-cyan-500/30 border border-cyan-500/50"
                      : "bg-slate-700/50 border border-cyan-500/20"
                  } rounded-lg p-4`}
                >
                  <p className="text-white whitespace-pre-wrap text-sm lg:text-base">
                    {message.content}
                  </p>
                  {message.suggestions && message.suggestions.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {message.suggestions.map((suggestion: string, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(suggestion)}
                          className="w-full text-left px-3 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded text-xs text-cyan-400 transition-all"
                        >
                          → {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                  {message.type === "assistant" && (
                    <div className="mt-3 flex gap-2">
                      <button className="p-1 hover:bg-slate-600/50 rounded transition-all">
                        <Copy className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-slate-600/50 rounded transition-all">
                        <Download className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-slate-600/50 rounded transition-all">
                        <ThumbsUp className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-slate-600/50 rounded transition-all">
                        <ThumbsDown className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700/50 border border-cyan-500/20 rounded-lg p-4 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                  <span className="text-sm text-gray-400">جاري التحليل...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="space-y-3">
          {uploadedFile && (
            <div className="p-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-400">{uploadedFile?.name}</span>
              </div>
              <button
                onClick={() => setUploadedFile(null)}
                className="text-xs text-gray-400 hover:text-white"
              >
                إزالة
              </button>
            </div>
          )}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="اكتب سؤالك أو طلبك..."
              className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-all"
            />
            <label className="p-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg hover:bg-slate-700/50 cursor-pointer transition-all">
              <Paperclip className="w-5 h-5 text-cyan-400" />
              <input
                type="file"
                accept="video/*,image/*"
                onChange={(e) => setUploadedFile(e.target.files?.[0] ?? null)}
                className="hidden"
              />
            </label>
            <Button
              onClick={() => handleSendMessage()}
              disabled={isLoading || !input.trim()}
              className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
