import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, CreditCard, Download, Plus, Trash2 } from 'lucide-react';

interface Invoice {
  id: string;
  amount: number;
  currency: string;
  status: 'paid' | 'pending' | 'failed';
  date: Date;
  description: string;
}

interface PaymentMethod {
  id: string;
  type: 'card' | 'bank';
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
  default: boolean;
}

export default function PaymentManagement() {
  const [activeTab, setActiveTab] = useState<'overview' | 'invoices' | 'payment-methods'>('overview');
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: 'inv_001',
      amount: 2999,
      currency: 'usd',
      status: 'paid',
      date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      description: 'Subscription to Elite plan',
    },
    {
      id: 'inv_002',
      amount: 2999,
      currency: 'usd',
      status: 'paid',
      date: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
      description: 'Subscription to Elite plan',
    },
  ]);

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: 'pm_001',
      type: 'card',
      brand: 'visa',
      last4: '4242',
      expMonth: 12,
      expYear: 2025,
      default: true,
    },
  ]);

  const [subscription] = useState({
    planId: 'elite',
    planName: 'Elite',
    status: 'active',
    currentPeriodStart: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    currentPeriodEnd: new Date(Date.now() + 0 * 24 * 60 * 60 * 1000),
    nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    amount: 29.99,
  });

  const [usageStats] = useState({
    videoAnalysisUsed: 45,
    videoAnalysisLimit: -1, // unlimited
    teamMembersUsed: 3,
    teamMembersLimit: 5,
    storageUsed: 450,
    storageLimit: 1000,
  });

  const handleDeletePaymentMethod = (id: string) => {
    setPaymentMethods(paymentMethods.filter(pm => pm.id !== id));
  };

  const handleSetDefaultPaymentMethod = (id: string) => {
    setPaymentMethods(
      paymentMethods.map(pm => ({
        ...pm,
        default: pm.id === id,
      }))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">إدارة الدفع والاشتراكات</h1>
          <p className="text-gray-400">إدارة اشتراكك وطرق الدفع والفواتير</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-cyan-500/20">
          {[
            { id: 'overview', label: 'نظرة عامة' },
            { id: 'invoices', label: 'الفواتير' },
            { id: 'payment-methods', label: 'طرق الدفع' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-3 font-semibold transition border-b-2 ${
                activeTab === tab.id
                  ? 'border-cyan-500 text-cyan-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Current Subscription */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>الاشتراك الحالي</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-400 mb-2">خطة الاشتراك</p>
                    <p className="text-2xl font-bold text-cyan-400">{subscription.planName}</p>
                    <p className="text-sm text-green-400 mt-2">✅ نشط</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">السعر الشهري</p>
                    <p className="text-2xl font-bold text-cyan-400">${subscription.amount}</p>
                    <p className="text-sm text-gray-400 mt-2">
                      التجديد التالي: {subscription.nextBillingDate.toLocaleDateString('ar-EG')}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex gap-4">
                  <Button className="bg-cyan-500 hover:bg-cyan-600">ترقية الخطة</Button>
                  <Button variant="outline" className="border-cyan-500/50 text-cyan-400">
                    إلغاء الاشتراك
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Usage Statistics */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>إحصائيات الاستخدام</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Video Analysis */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="text-sm font-semibold">تحليل الفيديو</p>
                      <p className="text-sm text-gray-400">
                        {usageStats.videoAnalysisUsed}
                        {usageStats.videoAnalysisLimit !== -1 && ` / ${usageStats.videoAnalysisLimit}`}
                      </p>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                        style={{
                          width: usageStats.videoAnalysisLimit === -1
                            ? '100%'
                            : `${(usageStats.videoAnalysisUsed / usageStats.videoAnalysisLimit) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Team Members */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="text-sm font-semibold">أعضاء الفريق</p>
                      <p className="text-sm text-gray-400">
                        {usageStats.teamMembersUsed} / {usageStats.teamMembersLimit}
                      </p>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                        style={{
                          width: `${(usageStats.teamMembersUsed / usageStats.teamMembersLimit) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Storage */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="text-sm font-semibold">التخزين</p>
                      <p className="text-sm text-gray-400">
                        {usageStats.storageUsed} MB / {usageStats.storageLimit} MB
                      </p>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-yellow-500 to-orange-600 h-2 rounded-full"
                        style={{
                          width: `${(usageStats.storageUsed / usageStats.storageLimit) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Invoice */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>الفاتورة القادمة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-400 mb-2">المبلغ المستحق</p>
                    <p className="text-3xl font-bold text-cyan-400">${subscription.amount}</p>
                    <p className="text-sm text-gray-400 mt-2">
                      في {subscription.nextBillingDate.toLocaleDateString('ar-EG')}
                    </p>
                  </div>
                  <Button className="bg-cyan-500 hover:bg-cyan-600">دفع الآن</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Invoices Tab */}
        {activeTab === 'invoices' && (
          <div className="space-y-4">
            {invoices.length === 0 ? (
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
                <CardContent className="pt-6">
                  <p className="text-center text-gray-400">لا توجد فواتير</p>
                </CardContent>
              </Card>
            ) : (
              invoices.map(invoice => (
                <Card
                  key={invoice.id}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20"
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-semibold">{invoice.description}</p>
                          {invoice.status === 'paid' && (
                            <CheckCircle className="w-5 h-5 text-green-400" />
                          )}
                          {invoice.status === 'pending' && (
                            <AlertCircle className="w-5 h-5 text-yellow-400" />
                          )}
                          {invoice.status === 'failed' && (
                            <AlertCircle className="w-5 h-5 text-red-400" />
                          )}
                        </div>
                        <p className="text-sm text-gray-400">
                          {invoice.date.toLocaleDateString('ar-EG')}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-cyan-400">
                          ${(invoice.amount / 100).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-400 capitalize">{invoice.status}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-cyan-500/50 text-cyan-400"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        تحميل PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}

        {/* Payment Methods Tab */}
        {activeTab === 'payment-methods' && (
          <div className="space-y-4">
            {paymentMethods.map(method => (
              <Card
                key={method.id}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <CreditCard className="w-8 h-8 text-cyan-400" />
                      <div>
                        <p className="font-semibold capitalize">{method.brand}</p>
                        <p className="text-sm text-gray-400">
                          •••• •••• •••• {method.last4}
                        </p>
                        <p className="text-sm text-gray-400">
                          ينتهي في {method.expMonth}/{method.expYear}
                        </p>
                        {method.default && (
                          <p className="text-sm text-green-400 mt-1">✅ الطريقة الافتراضية</p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {!method.default && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleSetDefaultPaymentMethod(method.id)}
                          className="border-cyan-500/50 text-cyan-400"
                        >
                          تعيين كافتراضية
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeletePaymentMethod(method.id)}
                        className="border-red-500/50 text-red-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Add Payment Method */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardContent className="pt-6">
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600">
                  <Plus className="w-4 h-4 mr-2" />
                  إضافة طريقة دفع جديدة
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
