import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, Users, Activity, DollarSign, Download, RefreshCw } from 'lucide-react';

export default function AdminStatistics() {
  const [timeRange, setTimeRange] = useState('month');
  const [refreshing, setRefreshing] = useState(false);

  // بيانات المستخدمين
  const userGrowthData = [
    { month: 'يناير', users: 5000, activeUsers: 3500, newUsers: 1200 },
    { month: 'فبراير', users: 8500, activeUsers: 6200, newUsers: 2100 },
    { month: 'مارس', users: 12000, activeUsers: 9500, newUsers: 2800 },
    { month: 'أبريل', users: 18500, activeUsers: 14200, newUsers: 3900 },
    { month: 'مايو', users: 25000, activeUsers: 19500, newUsers: 4800 },
    { month: 'يونيو', users: 35000, activeUsers: 27500, newUsers: 6200 },
  ];

  // بيانات الإيرادات
  const revenueData = [
    { month: 'يناير', subscriptions: 95000, partnerships: 150000, ads: 25000, total: 270000 },
    { month: 'فبراير', subscriptions: 145000, partnerships: 180000, ads: 35000, total: 360000 },
    { month: 'مارس', subscriptions: 198000, partnerships: 220000, ads: 48000, total: 466000 },
    { month: 'أبريل', subscriptions: 285000, partnerships: 310000, ads: 65000, total: 660000 },
    { month: 'مايو', subscriptions: 398000, partnerships: 420000, ads: 85000, total: 903000 },
    { month: 'يونيو', subscriptions: 520000, partnerships: 580000, ads: 110000, total: 1210000 },
  ];

  // توزيع المستخدمين
  const userDistribution = [
    { name: 'لاعبون', value: 45, color: '#06B6D4' },
    { name: 'مدربون', value: 25, color: '#0EA5E9' },
    { name: 'أكاديميات', value: 20, color: '#3B82F6' },
    { name: 'إدارة', value: 10, color: '#1E40AF' },
  ];

  // توزيع الإيرادات
  const revenueDistribution = [
    { name: 'الاشتراكات', value: 45, color: '#06B6D4' },
    { name: 'الشراكات', value: 40, color: '#0EA5E9' },
    { name: 'الإعلانات', value: 15, color: '#3B82F6' },
  ];

  // بيانات الأداء
  const performanceData = [
    { metric: 'معدل التحويل', value: 12.5, target: 10 },
    { metric: 'معدل الاحتفاظ', value: 85.3, target: 80 },
    { metric: 'رضا المستخدم', value: 92.1, target: 90 },
    { metric: 'وقت التحميل', value: 1.2, target: 2 },
  ];

  // إحصائيات رئيسية
  const stats = [
    {
      title: 'إجمالي المستخدمين',
      value: '35,000',
      change: '+200%',
      icon: Users,
      color: 'bg-cyan-500',
    },
    {
      title: 'المستخدمون النشطون',
      value: '27,500',
      change: '+185%',
      icon: Activity,
      color: 'bg-blue-500',
    },
    {
      title: 'إجمالي الإيرادات',
      value: '1,210,000 ج.م',
      change: '+350%',
      icon: DollarSign,
      color: 'bg-green-500',
    },
    {
      title: 'معدل النمو الشهري',
      value: '42%',
      change: '+5%',
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
  ];

  const handleRefresh = async () => {
    setRefreshing(true);
    // محاكاة تحديث البيانات
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRefreshing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* الرأس */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">لوحة تحكم الإحصائيات</h1>
          <p className="text-slate-400">مراقبة شاملة لأداء المنصة والإيرادات والمستخدمين</p>
        </div>

        {/* أزرار التحكم */}
        <div className="flex gap-4 mb-8">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-48 bg-slate-800 border-slate-700 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700 text-white">
              <SelectItem value="week">هذا الأسبوع</SelectItem>
              <SelectItem value="month">هذا الشهر</SelectItem>
              <SelectItem value="quarter">هذا الربع</SelectItem>
              <SelectItem value="year">هذه السنة</SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={handleRefresh}
            disabled={refreshing}
            className="bg-cyan-500 hover:bg-cyan-600 text-white"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
            {refreshing ? 'جاري التحديث...' : 'تحديث البيانات'}
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            <Download className="w-4 h-4 mr-2" />
            تحميل التقرير
          </Button>
        </div>

        {/* الإحصائيات الرئيسية */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-slate-400">
                      {stat.title}
                    </CardTitle>
                    <div className={`${stat.color} p-2 rounded-lg`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <p className="text-sm text-green-400">{stat.change} من الشهر الماضي</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* الرسوم البيانية الرئيسية */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* نمو المستخدمين */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">نمو المستخدمين</CardTitle>
              <CardDescription>عدد المستخدمين والمستخدمين النشطين</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={userGrowthData}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                  <XAxis dataKey="month" stroke="#94A3B8" />
                  <YAxis stroke="#94A3B8" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1E293B', border: '1px solid #475569' }}
                    labelStyle={{ color: '#06B6D4' }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="users" stroke="#06B6D4" fillOpacity={1} fill="url(#colorUsers)" name="إجمالي المستخدمين" />
                  <Area type="monotone" dataKey="activeUsers" stroke="#0EA5E9" fillOpacity={1} fill="url(#colorActive)" name="المستخدمون النشطون" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* الإيرادات */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">الإيرادات الشهرية</CardTitle>
              <CardDescription>توزيع الإيرادات حسب المصدر</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                  <XAxis dataKey="month" stroke="#94A3B8" />
                  <YAxis stroke="#94A3B8" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1E293B', border: '1px solid #475569' }}
                    labelStyle={{ color: '#06B6D4' }}
                  />
                  <Legend />
                  <Bar dataKey="subscriptions" stackId="a" fill="#06B6D4" name="الاشتراكات" />
                  <Bar dataKey="partnerships" stackId="a" fill="#0EA5E9" name="الشراكات" />
                  <Bar dataKey="ads" stackId="a" fill="#3B82F6" name="الإعلانات" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* التوزيعات */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* توزيع المستخدمين */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">توزيع المستخدمين</CardTitle>
              <CardDescription>حسب نوع المستخدم</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={userDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {userDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1E293B', border: '1px solid #475569' }}
                    labelStyle={{ color: '#06B6D4' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* توزيع الإيرادات */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">توزيع الإيرادات</CardTitle>
              <CardDescription>حسب مصدر الإيراد</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={revenueDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {revenueDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1E293B', border: '1px solid #475569' }}
                    labelStyle={{ color: '#06B6D4' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* مؤشرات الأداء */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">مؤشرات الأداء الرئيسية (KPIs)</CardTitle>
            <CardDescription>مقارنة الأداء الفعلي بالأهداف</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {performanceData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-300 mb-2">{item.metric}</p>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                        style={{ width: `${Math.min(item.value, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="text-lg font-bold text-white">{item.value}%</p>
                    <p className="text-xs text-slate-400">الهدف: {item.target}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
