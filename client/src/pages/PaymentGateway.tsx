import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle, CheckCircle, CreditCard, DollarSign, Zap } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function PaymentGateway() {
  const [activeTab, setActiveTab] = useState('stripe');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');

  const handleStripePayment = async () => {
    setIsProcessing(true);
    setPaymentStatus('processing');
    try {
      // محاكاة عملية الدفع عبر Stripe
      await new Promise(resolve => setTimeout(resolve, 2000));
      setPaymentStatus('success');
    } catch (error) {
      setPaymentStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleTelrPayment = async () => {
    setIsProcessing(true);
    setPaymentStatus('processing');
    try {
      // محاكاة عملية الدفع عبر Telr
      await new Promise(resolve => setTimeout(resolve, 2000));
      setPaymentStatus('success');
    } catch (error) {
      setPaymentStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">بوابة الدفع المتقدمة</h1>
          <p className="text-slate-400">نظام دفع آمن وموثوق مع Stripe و Telr</p>
        </div>

        {/* Status Alert */}
        {paymentStatus === 'success' && (
          <Alert className="mb-6 bg-green-50 border-green-200">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              تم معالجة الدفع بنجاح! شكراً لاستخدامك Alpha Foot.
            </AlertDescription>
          </Alert>
        )}

        {paymentStatus === 'error' && (
          <Alert className="mb-6 bg-red-50 border-red-200">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              حدث خطأ في معالجة الدفع. يرجى المحاولة مرة أخرى.
            </AlertDescription>
          </Alert>
        )}

        {/* Payment Methods */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800">
            <TabsTrigger value="stripe" className="data-[state=active]:bg-cyan-500">
              <CreditCard className="w-4 h-4 mr-2" />
              Stripe (دولي)
            </TabsTrigger>
            <TabsTrigger value="telr" className="data-[state=active]:bg-cyan-500">
              <DollarSign className="w-4 h-4 mr-2" />
              Telr (مصري)
            </TabsTrigger>
          </TabsList>

          {/* Stripe Tab */}
          <TabsContent value="stripe" className="space-y-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">الدفع عبر Stripe</CardTitle>
                <CardDescription className="text-slate-400">
                  نظام دفع دولي آمن يدعم جميع بطاقات الائتمان والمحافظ الرقمية
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Payment Details */}
                <div className="bg-slate-700 p-4 rounded-lg space-y-3">
                  <div className="flex justify-between text-white">
                    <span>المبلغ:</span>
                    <span className="font-bold">299 ج.م</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>الرسوم:</span>
                    <span>15 ج.م (5%)</span>
                  </div>
                  <div className="border-t border-slate-600 pt-3 flex justify-between text-white font-bold">
                    <span>الإجمالي:</span>
                    <span>314 ج.م</span>
                  </div>
                </div>

                {/* Card Details Form */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-white text-sm mb-2">رقم البطاقة</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-cyan-500 focus:outline-none"
                      disabled={isProcessing}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white text-sm mb-2">الصلاحية</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-cyan-500 focus:outline-none"
                        disabled={isProcessing}
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-cyan-500 focus:outline-none"
                        disabled={isProcessing}
                      />
                    </div>
                  </div>
                </div>

                {/* Security Info */}
                <div className="bg-cyan-500/10 border border-cyan-500/30 p-3 rounded text-cyan-400 text-sm flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>جميع المعاملات محمية بمعايير PCI DSS وتشفير 256-bit SSL</span>
                </div>

                {/* Payment Button */}
                <Button
                  onClick={handleStripePayment}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3"
                >
                  {isProcessing ? 'جاري المعالجة...' : 'إتمام الدفع عبر Stripe'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Telr Tab */}
          <TabsContent value="telr" className="space-y-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">الدفع عبر Telr</CardTitle>
                <CardDescription className="text-slate-400">
                  بوابة دفع مصرية آمنة تدعم جميع طرق الدفع المحلية
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Payment Details */}
                <div className="bg-slate-700 p-4 rounded-lg space-y-3">
                  <div className="flex justify-between text-white">
                    <span>المبلغ:</span>
                    <span className="font-bold">299 ج.م</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>الرسوم:</span>
                    <span>10 ج.م (3.5%)</span>
                  </div>
                  <div className="border-t border-slate-600 pt-3 flex justify-between text-white font-bold">
                    <span>الإجمالي:</span>
                    <span>309 ج.م</span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-2">
                  <label className="block text-white text-sm mb-3">اختر طريقة الدفع:</label>
                  <div className="space-y-2">
                    <label className="flex items-center p-3 bg-slate-700 rounded cursor-pointer hover:bg-slate-600 transition">
                      <input type="radio" name="telr-method" defaultChecked className="w-4 h-4" />
                      <span className="text-white ml-3">بطاقة ائتمان/خصم</span>
                    </label>
                    <label className="flex items-center p-3 bg-slate-700 rounded cursor-pointer hover:bg-slate-600 transition">
                      <input type="radio" name="telr-method" className="w-4 h-4" />
                      <span className="text-white ml-3">محفظة رقمية</span>
                    </label>
                    <label className="flex items-center p-3 bg-slate-700 rounded cursor-pointer hover:bg-slate-600 transition">
                      <input type="radio" name="telr-method" className="w-4 h-4" />
                      <span className="text-white ml-3">تحويل بنكي</span>
                    </label>
                  </div>
                </div>

                {/* Security Info */}
                <div className="bg-cyan-500/10 border border-cyan-500/30 p-3 rounded text-cyan-400 text-sm flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>معتمدة من البنك المركزي المصري وتدعم جميع البنوك المصرية</span>
                </div>

                {/* Payment Button */}
                <Button
                  onClick={handleTelrPayment}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3"
                >
                  {isProcessing ? 'جاري المعالجة...' : 'إتمام الدفع عبر Telr'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Invoice History */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">سجل الفواتير</CardTitle>
            <CardDescription className="text-slate-400">
              جميع فواتيرك الإلكترونية والمدفوعات
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-700 rounded">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">فاتورة #{1000 + i}</p>
                      <p className="text-slate-400 text-sm">2024-01-{15 + i}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">299 ج.م</p>
                    <p className="text-green-400 text-sm">مدفوع</p>
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
