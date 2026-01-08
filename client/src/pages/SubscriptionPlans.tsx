import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, Zap, Crown, Building2 } from 'lucide-react';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface SubscriptionPlan {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  priceAr: string;
  billingPeriod: string;
  billingPeriodAr: string;
  icon: React.ReactNode;
  features: PlanFeature[];
  popular?: boolean;
  color: string;
  cta: string;
  ctaAr: string;
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'free',
    name: 'Free',
    nameAr: 'مجاني',
    description: 'Perfect for getting started',
    descriptionAr: 'مثالي للبدء والتعرف على المنصة',
    price: 0,
    priceAr: 'مجاني',
    billingPeriod: 'Forever',
    billingPeriodAr: 'مدى الحياة',
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    color: 'from-yellow-500/10 to-yellow-600/10',
    cta: 'Get Started',
    ctaAr: 'ابدأ الآن',
    features: [
      { name: 'Basic Dashboard Access', included: true },
      { name: 'Limited Video Analysis (3 per month)', included: true },
      { name: 'Community Access', included: true },
      { name: 'Basic Performance Reports', included: true },
      { name: 'Email Support', included: true },
      { name: 'Advanced Analytics', included: false },
      { name: 'AI Coach (24/7)', included: false },
      { name: 'Priority Support', included: false },
      { name: 'Custom Programs', included: false },
      { name: 'Team Collaboration', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    nameAr: 'Pro',
    description: 'For serious athletes and coaches',
    descriptionAr: 'للاعبين والمدربين الجادين',
    price: 9.99,
    priceAr: '$9.99',
    billingPeriod: 'Monthly',
    billingPeriodAr: 'شهري',
    icon: <Zap className="w-8 h-8 text-cyan-400" />,
    color: 'from-cyan-500/10 to-blue-600/10',
    cta: 'Subscribe Now',
    ctaAr: 'اشترك الآن',
    features: [
      { name: 'Full Dashboard Access', included: true },
      { name: 'Unlimited Video Analysis', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: 'Detailed Performance Reports', included: true },
      { name: 'AI Coach (Limited)', included: true },
      { name: 'Priority Email Support', included: true },
      { name: 'Monthly Webinars', included: true },
      { name: 'Training Programs', included: true },
      { name: 'Custom Programs', included: false },
      { name: 'Team Collaboration', included: false },
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    nameAr: 'Elite',
    description: 'For professional development',
    descriptionAr: 'للتطوير الاحترافي المتقدم',
    price: 29.99,
    priceAr: '$29.99',
    billingPeriod: 'Monthly',
    billingPeriodAr: 'شهري',
    icon: <Crown className="w-8 h-8 text-gold-400" />,
    color: 'from-yellow-500/10 to-orange-600/10',
    cta: 'Subscribe Now',
    ctaAr: 'اشترك الآن',
    popular: true,
    features: [
      { name: 'Everything in Pro', included: true },
      { name: 'AI Coach (24/7)', included: true },
      { name: 'Personal Training Programs', included: true },
      { name: 'One-on-One Video Sessions', included: true },
      { name: 'Advanced Nutrition Plans', included: true },
      { name: 'Priority Phone Support', included: true },
      { name: 'Weekly Coaching Sessions', included: true },
      { name: 'Custom Performance Plans', included: true },
      { name: 'Team Collaboration (Up to 5)', included: true },
      { name: 'Exclusive Content', included: true },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    nameAr: 'Enterprise',
    description: 'For academies and clubs',
    descriptionAr: 'للأكاديميات والأندية',
    price: 99.99,
    priceAr: '$99.99+',
    billingPeriod: 'Monthly',
    billingPeriodAr: 'شهري',
    icon: <Building2 className="w-8 h-8 text-purple-400" />,
    color: 'from-purple-500/10 to-pink-600/10',
    cta: 'Contact Sales',
    ctaAr: 'تواصل معنا',
    features: [
      { name: 'Everything in Elite', included: true },
      { name: 'Unlimited Team Members', included: true },
      { name: 'Custom API Access', included: true },
      { name: 'Dedicated Account Manager', included: true },
      { name: 'Advanced Analytics Dashboard', included: true },
      { name: 'Custom Integrations', included: true },
      { name: 'White Label Options', included: true },
      { name: 'Priority Support (24/7)', included: true },
      { name: 'Training & Onboarding', included: true },
      { name: 'Custom SLA', included: true },
    ],
  },
];

export default function SubscriptionPlans() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const getAnnualPrice = (monthlyPrice: number) => {
    return Math.floor(monthlyPrice * 12 * 0.8); // 20% discount for annual
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">خطط الاشتراك</h1>
          <p className="text-gray-400 text-lg mb-8">اختر الخطة المناسبة لك وابدأ رحلتك نحو الاحترافية</p>

          {/* Billing Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                billingCycle === 'monthly'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
              }`}
            >
              شهري
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                billingCycle === 'annual'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
              }`}
            >
              سنوي (توفير 20%)
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    الأكثر شهرة
                  </span>
                </div>
              )}

              <Card
                className={`h-full bg-gradient-to-br ${plan.color} backdrop-blur border border-cyan-500/20 hover:border-cyan-500/50 transition ${
                  plan.popular ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{plan.nameAr}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {plan.descriptionAr}
                      </CardDescription>
                    </div>
                    {plan.icon}
                  </div>

                  {/* Price */}
                  <div className="my-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-cyan-400">
                        {billingCycle === 'monthly'
                          ? plan.price === 0
                            ? 'مجاني'
                            : `$${plan.price}`
                          : plan.price === 0
                          ? 'مجاني'
                          : `$${getAnnualPrice(plan.price)}`}
                      </span>
                      {plan.price > 0 && (
                        <span className="text-gray-400">
                          /{billingCycle === 'monthly' ? 'شهر' : 'سنة'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full font-semibold ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                  >
                    {plan.ctaAr}
                  </Button>
                </CardHeader>

                <CardContent>
                  {/* Features List */}
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? 'text-gray-200' : 'text-gray-500 line-through'
                          }`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
          <CardHeader>
            <CardTitle>مقارنة شاملة للخطط</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-cyan-500/20">
                    <th className="text-right py-3 px-4 font-semibold">الميزة</th>
                    <th className="text-center py-3 px-4 font-semibold">مجاني</th>
                    <th className="text-center py-3 px-4 font-semibold">Pro</th>
                    <th className="text-center py-3 px-4 font-semibold">Elite</th>
                    <th className="text-center py-3 px-4 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'الوصول إلى لوحة التحكم', free: true, pro: true, elite: true, enterprise: true },
                    { name: 'تحليل الفيديو', free: '3/شهر', pro: 'غير محدود', elite: 'غير محدود', enterprise: 'غير محدود' },
                    { name: 'المدرب الذكي', free: false, pro: 'محدود', elite: '24/7', enterprise: '24/7' },
                    { name: 'جلسات فيديو شخصية', free: false, pro: false, elite: 'أسبوعي', enterprise: 'يومي' },
                    { name: 'الدعم الفني', free: 'البريد', pro: 'الأولوية', elite: 'الهاتف', enterprise: '24/7' },
                    { name: 'أعضاء الفريق', free: '1', pro: '3', elite: '5', enterprise: 'غير محدود' },
                    { name: 'البرامج المخصصة', free: false, pro: 'محدود', elite: 'متقدم', enterprise: 'مخصص' },
                    { name: 'الوصول إلى API', free: false, pro: false, elite: false, enterprise: true },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-800/30">
                      <td className="py-3 px-4 text-gray-300">{row.name}</td>
                      <td className="text-center py-3 px-4">
                        {typeof row.free === 'boolean' ? (
                          row.free ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-400">{row.free}</span>
                        )}
                      </td>
                      <td className="text-center py-3 px-4">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-400">{row.pro}</span>
                        )}
                      </td>
                      <td className="text-center py-3 px-4">
                        {typeof row.elite === 'boolean' ? (
                          row.elite ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-400">{row.elite}</span>
                        )}
                      </td>
                      <td className="text-center py-3 px-4">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-400">{row.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-center">الأسئلة الشائعة</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'هل يمكنني تغيير خطتي في أي وقت؟',
                a: 'نعم، يمكنك الترقية أو التنزيل في أي وقت. سيتم احتساب الفرق تلقائياً.',
              },
              {
                q: 'هل هناك فترة تجريبية مجانية؟',
                a: 'نعم، خطة مجانية دائمة مع ميزات أساسية. بدون الحاجة لبطاقة ائتمان.',
              },
              {
                q: 'ما هي سياسة الاسترجاع؟',
                a: 'استرجاع كامل المبلغ خلال 30 يوم إذا لم تكن راضياً.',
              },
              {
                q: 'هل تقدمون خصومات للفريق؟',
                a: 'نعم، خصومات خاصة للأكاديميات والأندية والفريق الكبير.',
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
