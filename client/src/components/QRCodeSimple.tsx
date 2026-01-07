import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Copy, Share2, ExternalLink } from 'lucide-react';

interface QRCodeData {
  name: string;
  url: string;
  description: string;
  icon: string;
}

export default function QRCodeSimple() {
  const [selectedQR, setSelectedQR] = useState<string>('الموقع الرئيسي');

  // بيانات المالك والتوثيق
  const ownerData = {
    name: 'محمد عماد إبراهيم حسن',
    phone: '+201061525548',
    whatsapp: 'https://wa.me/201061525548',
    email: 'mohab.emad3377@gmail.com',
    projectEmail: 'info@alphafoot2030.com',
    website: 'https://alphafoot2030.com',
  };

  // قائمة QR Codes للمنصات المختلفة
  const qrCodes: QRCodeData[] = [
    {
      name: 'الموقع الرئيسي',
      url: `${ownerData.website}?ref=qr&owner=${ownerData.name}&contact=${ownerData.phone}`,
      description: 'رابط الموقع الرئيسي لـ Alpha Foot 2030',
      icon: '🌐',
    },
    {
      name: 'تطبيق Google Play',
      url: 'https://play.google.com/store/apps/details?id=com.alphafoot2030&referrer=utm_source%3Dqr_code%26utm_medium%3Dmarketing',
      description: 'تحميل التطبيق من Google Play',
      icon: '🤖',
    },
    {
      name: 'تطبيق App Store',
      url: 'https://apps.apple.com/app/alpha-foot-2030/id123456789?mt=8',
      description: 'تحميل التطبيق من App Store',
      icon: '🍎',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/alphafoot2030',
      description: 'صفحة Alpha Foot على Facebook',
      icon: '📘',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/alphafoot2030',
      description: 'حساب Alpha Foot على Instagram',
      icon: '📷',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@alphafoot2030',
      description: 'قناة Alpha Foot على TikTok',
      icon: '🎵',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/c/alphafoot2030',
      description: 'قناة Alpha Foot على YouTube',
      icon: '📺',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/alphafoot2030',
      description: 'صفحة Alpha Foot على LinkedIn',
      icon: '💼',
    },
    {
      name: 'Twitter/X',
      url: 'https://twitter.com/alphafoot2030',
      description: 'حساب Alpha Foot على Twitter',
      icon: '𝕏',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/alphafoot2030',
      description: 'مستودع Alpha Foot على GitHub',
      icon: '💻',
    },
    {
      name: 'WhatsApp',
      url: ownerData.whatsapp,
      description: 'التواصل عبر WhatsApp',
      icon: '💬',
    },
    {
      name: 'البريد الإلكتروني',
      url: `mailto:${ownerData.projectEmail}?subject=استفسار عن Alpha Foot 2030`,
      description: 'إرسال بريد إلكتروني للمشروع',
      icon: '📧',
    },
  ];

  const currentQR = qrCodes.find(qr => qr.name === selectedQR) || qrCodes[0];

  // دالة لإنشاء QR Code باستخدام API خارجي
  const generateQRImageUrl = (url: string) => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentQR.url);
    alert('تم نسخ الرابط بنجاح!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">نظام QR Code المتقدم</h1>
          <p className="text-gray-400 text-lg">ربط جميع منصات Alpha Foot 2030 في مكان واحد</p>
        </div>

        {/* Owner Information */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 mb-8">
          <CardHeader>
            <CardTitle>بيانات المالك والتوثيق</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-400">الاسم</p>
                <p className="text-lg font-semibold text-cyan-400">{ownerData.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">رقم الهاتف</p>
                <p className="text-lg font-semibold text-cyan-400">{ownerData.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">البريد الإلكتروني الشخصي</p>
                <p className="text-lg font-semibold text-cyan-400">{ownerData.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">بريد المشروع الرسمي</p>
                <p className="text-lg font-semibold text-cyan-400">{ownerData.projectEmail}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* QR Code Display */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>{currentQR.name}</CardTitle>
                <CardDescription>{currentQR.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center gap-6">
                  {/* QR Code Image */}
                  <div className="bg-white p-6 rounded-lg">
                    <img
                      src={generateQRImageUrl(currentQR.url)}
                      alt={`QR Code for ${currentQR.name}`}
                      className="w-80 h-80"
                    />
                  </div>

                  {/* URL Display */}
                  <div className="w-full">
                    <p className="text-sm text-gray-400 mb-2">الرابط:</p>
                    <div className="bg-black/30 p-3 rounded-lg break-all text-sm text-cyan-400 max-h-24 overflow-y-auto">
                      {currentQR.url}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 w-full flex-wrap">
                    <Button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = generateQRImageUrl(currentQR.url);
                        link.download = `alphafoot-${selectedQR.replace(/\s+/g, '-')}-qr.png`;
                        link.click();
                      }}
                      className="flex-1 min-w-32 bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      تحميل
                    </Button>
                    <Button
                      onClick={copyToClipboard}
                      variant="outline"
                      className="flex-1 min-w-32 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      نسخ الرابط
                    </Button>
                    <Button
                      onClick={() => window.open(currentQR.url, '_blank')}
                      variant="outline"
                      className="flex-1 min-w-32 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      فتح
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* QR Code List */}
          <div>
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
              <CardHeader>
                <CardTitle>قائمة المنصات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {qrCodes.map((qr) => (
                    <button
                      key={qr.name}
                      onClick={() => setSelectedQR(qr.name)}
                      className={`w-full text-left p-3 rounded-lg transition ${
                        selectedQR === qr.name
                          ? 'bg-cyan-500/20 border border-cyan-500/50'
                          : 'bg-black/20 border border-transparent hover:border-cyan-500/30'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{qr.icon}</span>
                        <div>
                          <p className="font-semibold text-sm">{qr.name}</p>
                          <p className="text-xs text-gray-400 truncate">{qr.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Documentation */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 mt-8">
          <CardHeader>
            <CardTitle>معلومات التوثيق</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">المالك المسجل</h3>
                <p className="text-sm text-gray-300">{ownerData.name}</p>
                <p className="text-sm text-gray-400">رقم التواصل: {ownerData.phone}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">جهات الاتصال</h3>
                <p className="text-sm text-gray-300">البريد الشخصي: {ownerData.email}</p>
                <p className="text-sm text-gray-300">بريد المشروع: {ownerData.projectEmail}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">المنصات المتصلة</h3>
                <p className="text-sm text-gray-300">عدد المنصات: {qrCodes.length}</p>
                <p className="text-sm text-gray-300">آخر تحديث: 22 يناير 2026</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">الحالة</h3>
                <p className="text-sm text-green-400">✅ جاهز للنشر العالمي</p>
                <p className="text-sm text-cyan-400">🌍 متوافق مع جميع المنصات</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
