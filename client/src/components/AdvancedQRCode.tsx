import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Copy, Share2, CheckCircle, AlertCircle } from 'lucide-react';

/**
 * نظام QR Code المتقدم
 * يتضمن التوثيق الكامل للمشروع والمؤسس
 */

interface QRCodeData {
  project: {
    name: string;
    nameArabic: string;
    version: string;
    releaseDate: string;
    status: string;
  };
  founder: {
    fullName: string;
    email: string;
    whatsapp: string;
    projectEmail: string;
  };
  platforms: number;
  languages: string[];
  security: string;
  guinness: string;
}

const AdvancedQRCode: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const qrCodeData: QRCodeData = {
    project: {
      name: 'Alpha Foot 2030',
      nameArabic: 'منصة التطوير الأكاديمي والمهني لكرة القدم المصرية',
      version: '1.0',
      releaseDate: '2026-01-22',
      status: 'Active',
    },
    founder: {
      fullName: 'محمد عماد إبراهيم حسن',
      email: 'mohab.emad3377@gmail.com',
      whatsapp: '+201061525548',
      projectEmail: 'info@alphafoot2030.com',
    },
    platforms: 12,
    languages: ['Arabic', 'English'],
    security: 'PCI DSS Level 1',
    guinness: 'Ready for World Record',
  };

  const platforms = [
    { name: 'الموقع الرسمي', url: 'https://www.alphafoot2030.com', icon: '🌐' },
    { name: 'Google Play', url: 'https://play.google.com/store/apps', icon: '📱' },
    { name: 'App Store', url: 'https://apps.apple.com', icon: '🍎' },
    { name: 'Facebook', url: 'https://facebook.com/alphafoot2030', icon: '👍' },
    { name: 'Instagram', url: 'https://instagram.com/alphafoot2030', icon: '📸' },
    { name: 'TikTok', url: 'https://tiktok.com/@alphafoot2030', icon: '🎵' },
    { name: 'YouTube', url: 'https://youtube.com/@alphafoot2030', icon: '📺' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/alphafoot2030', icon: '💼' },
    { name: 'Twitter/X', url: 'https://twitter.com/alphafoot2030', icon: '𝕏' },
    { name: 'GitHub', url: 'https://github.com/alphafoot2030', icon: '💻' },
    { name: 'WhatsApp', url: 'https://wa.me/201061525548', icon: '💬' },
    { name: 'البريد الإلكتروني', url: 'mailto:info@alphafoot2030.com', icon: '📧' },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQR = () => {
    // في التطبيق الفعلي، سيتم تحميل صورة QR Code
    alert('تحميل QR Code...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            نظام QR Code المتقدم
          </h1>
          <p className="text-gray-300 text-lg">
            ربط جميع منصات Alpha Foot 2030 في مكان واحد مع التوثيق الكامل
          </p>
        </div>

        {/* Main QR Code Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* QR Code Display */}
          <Card className="lg:col-span-1 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle className="text-center">QR Code الرئيسي</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
              <div className="w-64 h-64 bg-white p-4 rounded-lg flex items-center justify-center">
                <div className="text-center text-black">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="text-sm font-bold">Alpha Foot 2030</p>
                  <p className="text-xs mt-2">QR Code</p>
                </div>
              </div>
              <div className="w-full space-y-2">
                <Button
                  onClick={handleDownloadQR}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold"
                >
                  <Download className="w-4 h-4 mr-2" />
                  تحميل QR Code
                </Button>
                <Button
                  onClick={() => handleCopy(JSON.stringify(qrCodeData))}
                  variant="outline"
                  className="w-full border-cyan-500/50 hover:bg-cyan-500/10"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {copied ? 'تم النسخ!' : 'نسخ البيانات'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project Information */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
            <CardHeader>
              <CardTitle>معلومات المشروع</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Project Details */}
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">الاسم (عربي)</p>
                  <p className="text-white font-semibold">{qrCodeData.project.nameArabic}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">الاسم (إنجليزي)</p>
                  <p className="text-white font-semibold">{qrCodeData.project.name}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">الإصدار</p>
                    <p className="text-white font-semibold">{qrCodeData.project.version}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">تاريخ الإطلاق</p>
                    <p className="text-white font-semibold">{qrCodeData.project.releaseDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">{qrCodeData.project.status}</span>
                </div>
              </div>

              {/* Security & Standards */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">معايير الأمان:</span>
                  <span className="text-cyan-400 font-semibold">{qrCodeData.security}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">المنصات المتصلة:</span>
                  <span className="text-cyan-400 font-semibold">{qrCodeData.platforms}+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">اللغات المدعومة:</span>
                  <span className="text-cyan-400 font-semibold">{qrCodeData.languages.join(', ')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Founder Information */}
        <Card className="mb-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20">
          <CardHeader>
            <CardTitle>بيانات المؤسس والمطور</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">المعلومات الشخصية</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-sm">الاسم الكامل</p>
                    <p className="text-white font-semibold">{qrCodeData.founder.fullName}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">البريد الشخصي</p>
                    <p className="text-cyan-400 font-semibold break-all">{qrCodeData.founder.email}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">جهات الاتصال الرسمية</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp (24/7)</p>
                    <a
                      href={`https://wa.me/${qrCodeData.founder.whatsapp.replace(/[^0-9]/g, '')}`}
                      className="text-cyan-400 font-semibold hover:underline"
                    >
                      {qrCodeData.founder.whatsapp}
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">البريد الرسمي</p>
                    <a
                      href={`mailto:${qrCodeData.founder.projectEmail}`}
                      className="text-cyan-400 font-semibold hover:underline break-all"
                    >
                      {qrCodeData.founder.projectEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Connected Platforms */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">المنصات المتصلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 hover:border-cyan-400/50 cursor-pointer transition-all"
                onClick={() => setSelectedPlatform(platform.name)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{platform.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{platform.name}</h3>
                      <p className="text-gray-400 text-xs truncate">{platform.url}</p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(platform.url, '_blank');
                      }}
                      className="flex-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 text-xs"
                    >
                      فتح
                    </Button>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(platform.url);
                      }}
                      className="flex-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 text-xs"
                    >
                      نسخ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Status Footer */}
        <div className="mt-12 p-6 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <h3 className="text-lg font-bold text-green-400">جاهز للنشر العالمي</h3>
          </div>
          <p className="text-gray-300">
            تم توثيق المشروع بالكامل وفقاً لمعايير جينيس العالمية. المشروع جاهز للنشر الفوري على جميع المنصات والمتاجر العالمية.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedQRCode;
