/**
 * نظام الترجمات الثنائي اللغة
 * يدعم العربية والإنجليزية مع حفظ التفضيل
 */

export type Language = 'ar' | 'en';

export const translations = {
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      about: 'عن المشروع',
      features: 'المميزات',
      pricing: 'الأسعار',
      contact: 'التواصل',
      dashboard: 'لوحة التحكم',
      logout: 'تسجيل الخروج',
      login: 'تسجيل الدخول',
    },

    // Home Page
    home: {
      title: 'التطوير الأكاديمي والمهني لكرة القدم المصرية',
      subtitle: 'منصة متقدمة تجمع بين التدريب التقليدي والعصبي مع الذكاء الاصطناعي',
      cta: 'ابدأ الآن',
      learnMore: 'اعرف المزيد',
      tagline: 'رفع الكفاءات البشرية بالذكاء الاصطناعي',
    },

    // Subscription Plans
    subscriptionPlans: {
      title: 'خطط الاشتراك',
      subtitle: 'اختر الخطة المناسبة لك وابدأ رحلتك نحو الاحترافية',
      monthly: 'شهري',
      annual: 'سنوي (توفير 20%)',
      mostPopular: 'الأكثر شهرة',
      getStarted: 'ابدأ الآن',
      subscribeNow: 'اشترك الآن',
      contactSales: 'تواصل معنا',
      faq: 'الأسئلة الشائعة',
      
      plans: {
        free: {
          name: 'مجاني',
          description: 'مثالي للبدء والتعرف على المنصة',
          features: {
            dashboard: 'الوصول إلى لوحة التحكم',
            videoAnalysis: 'تحليل الفيديو (3 فيديوهات/شهر)',
            community: 'الوصول إلى المجتمع',
            reports: 'التقارير الأساسية',
            email: 'دعم البريد الإلكتروني',
          },
        },
        pro: {
          name: 'Pro',
          description: 'للاعبين والمدربين الجادين',
          features: {
            dashboard: 'الوصول الكامل إلى لوحة التحكم',
            videoAnalysis: 'تحليل الفيديو غير محدود',
            analytics: 'التحليلات المتقدمة',
            reports: 'التقارير المفصلة',
            aiCoach: 'المدرب الذكي (محدود)',
            support: 'دعم البريد الأولوية',
            webinars: 'الندوات الشهرية',
            programs: 'برامج التدريب',
          },
        },
        elite: {
          name: 'Elite',
          description: 'للتطوير الاحترافي المتقدم',
          features: {
            everything: 'جميع ميزات Pro',
            aiCoach24: 'المدرب الذكي (24/7)',
            personalSessions: 'جلسات فيديو شخصية',
            nutrition: 'خطط التغذية المتقدمة',
            phoneSupport: 'دعم الهاتف الأولوية',
            weeklyCoaching: 'جلسات تدريب أسبوعية',
            customPrograms: 'برامج مخصصة',
            teamCollaboration: 'التعاون الفريقي (5 أعضاء)',
            exclusiveContent: 'محتوى حصري',
          },
        },
        enterprise: {
          name: 'Enterprise',
          description: 'للأكاديميات والأندية',
          features: {
            everything: 'جميع الميزات غير محدودة',
            unlimitedMembers: 'أعضاء فريق غير محدودين',
            apiAccess: 'الوصول إلى API',
            accountManager: 'مدير حساب مخصص',
            advancedAnalytics: 'لوحة تحليلات متقدمة',
            customIntegrations: 'تكاملات مخصصة',
            whiteLabel: 'خيارات التسمية البيضاء',
            support24: 'دعم 24/7',
            training: 'التدريب والتأهيل',
            sla: 'اتفاقية مستوى الخدمة المخصصة',
          },
        },
      },
    },

    // Payment Management
    paymentManagement: {
      title: 'إدارة الدفع والاشتراكات',
      subtitle: 'إدارة اشتراكك وطرق الدفع والفواتير',
      overview: 'نظرة عامة',
      invoices: 'الفواتير',
      paymentMethods: 'طرق الدفع',
      
      currentSubscription: 'الاشتراك الحالي',
      subscriptionPlan: 'خطة الاشتراك',
      monthlyPrice: 'السعر الشهري',
      nextBilling: 'التجديد التالي',
      upgradePlan: 'ترقية الخطة',
      cancelSubscription: 'إلغاء الاشتراك',
      
      usageStats: 'إحصائيات الاستخدام',
      videoAnalysis: 'تحليل الفيديو',
      teamMembers: 'أعضاء الفريق',
      storage: 'التخزين',
      
      upcomingInvoice: 'الفاتورة القادمة',
      amountDue: 'المبلغ المستحق',
      payNow: 'دفع الآن',
      
      downloadPDF: 'تحميل PDF',
      copyLink: 'نسخ الرابط',
      open: 'فتح',
      
      noInvoices: 'لا توجد فواتير',
      addPaymentMethod: 'إضافة طريقة دفع جديدة',
      setAsDefault: 'تعيين كافتراضية',
      delete: 'حذف',
      defaultMethod: 'الطريقة الافتراضية',
      expiresIn: 'ينتهي في',
    },

    // QR Code
    qrCode: {
      title: 'نظام QR Code المتقدم',
      subtitle: 'ربط جميع منصات Alpha Foot 2030 في مكان واحد',
      ownerInfo: 'بيانات المالك والتوثيق',
      platformsList: 'قائمة المنصات',
      qrCodeInfo: 'معلومات التوثيق',
      
      platforms: {
        website: 'الموقع الرئيسي',
        googlePlay: 'تطبيق Google Play',
        appStore: 'تطبيق App Store',
        facebook: 'Facebook',
        instagram: 'Instagram',
        tiktok: 'TikTok',
        youtube: 'YouTube',
        linkedin: 'LinkedIn',
        twitter: 'Twitter/X',
        github: 'GitHub',
        whatsapp: 'WhatsApp',
        email: 'البريد الإلكتروني',
      },
      
      download: 'تحميل',
      copyLink: 'نسخ الرابط',
      open: 'فتح',
      registeredOwner: 'المالك المسجل',
      contactInfo: 'جهات الاتصال',
      connectedPlatforms: 'المنصات المتصلة',
      status: 'الحالة',
      readyForPublish: 'جاهز للنشر العالمي',
      compatible: 'متوافق مع جميع المنصات',
    },

    // Common
    common: {
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      whatsapp: 'WhatsApp',
      personalEmail: 'البريد الشخصي',
      projectEmail: 'بريد المشروع الرسمي',
      website: 'الموقع الرسمي',
      status: 'الحالة',
      active: 'نشط',
      inactive: 'غير نشط',
      loading: 'جاري التحميل...',
      error: 'حدث خطأ',
      success: 'تم بنجاح',
      cancel: 'إلغاء',
      save: 'حفظ',
      delete: 'حذف',
      edit: 'تعديل',
      close: 'إغلاق',
      back: 'رجوع',
      next: 'التالي',
      previous: 'السابق',
      submit: 'إرسال',
      confirm: 'تأكيد',
      language: 'اللغة',
      arabic: 'العربية',
      english: 'English',
    },

    // Footer
    footer: {
      copyright: 'جميع الحقوق محفوظة © 2026 Alpha Foot',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الخدمة',
      contactUs: 'تواصل معنا',
      followUs: 'تابعنا على',
    },

    // Errors
    errors: {
      notFound: 'الصفحة غير موجودة',
      unauthorized: 'غير مصرح',
      forbidden: 'ممنوع الوصول',
      serverError: 'خطأ في الخادم',
      tryAgain: 'حاول مرة أخرى',
    },
  },

  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      features: 'Features',
      pricing: 'Pricing',
      contact: 'Contact',
      dashboard: 'Dashboard',
      logout: 'Logout',
      login: 'Login',
    },

    // Home Page
    home: {
      title: 'Academic and Professional Development for Egyptian Football',
      subtitle: 'An advanced platform combining traditional training, neurological training, and artificial intelligence',
      cta: 'Get Started',
      learnMore: 'Learn More',
      tagline: 'Elevating Human Potential with AI',
    },

    // Subscription Plans
    subscriptionPlans: {
      title: 'Subscription Plans',
      subtitle: 'Choose the right plan for you and start your journey to professionalism',
      monthly: 'Monthly',
      annual: 'Annual (Save 20%)',
      mostPopular: 'Most Popular',
      getStarted: 'Get Started',
      subscribeNow: 'Subscribe Now',
      contactSales: 'Contact Sales',
      faq: 'Frequently Asked Questions',
      
      plans: {
        free: {
          name: 'Free',
          description: 'Perfect for getting started',
          features: {
            dashboard: 'Basic Dashboard Access',
            videoAnalysis: 'Limited Video Analysis (3 per month)',
            community: 'Community Access',
            reports: 'Basic Performance Reports',
            email: 'Email Support',
          },
        },
        pro: {
          name: 'Pro',
          description: 'For serious athletes and coaches',
          features: {
            dashboard: 'Full Dashboard Access',
            videoAnalysis: 'Unlimited Video Analysis',
            analytics: 'Advanced Analytics',
            reports: 'Detailed Performance Reports',
            aiCoach: 'AI Coach (Limited)',
            support: 'Priority Email Support',
            webinars: 'Monthly Webinars',
            programs: 'Training Programs',
          },
        },
        elite: {
          name: 'Elite',
          description: 'For professional development',
          features: {
            everything: 'Everything in Pro',
            aiCoach24: 'AI Coach (24/7)',
            personalSessions: 'One-on-One Video Sessions',
            nutrition: 'Advanced Nutrition Plans',
            phoneSupport: 'Priority Phone Support',
            weeklyCoaching: 'Weekly Coaching Sessions',
            customPrograms: 'Custom Performance Plans',
            teamCollaboration: 'Team Collaboration (Up to 5)',
            exclusiveContent: 'Exclusive Content',
          },
        },
        enterprise: {
          name: 'Enterprise',
          description: 'For academies and clubs',
          features: {
            everything: 'Everything Unlimited',
            unlimitedMembers: 'Unlimited Team Members',
            apiAccess: 'Custom API Access',
            accountManager: 'Dedicated Account Manager',
            advancedAnalytics: 'Advanced Analytics Dashboard',
            customIntegrations: 'Custom Integrations',
            whiteLabel: 'White Label Options',
            support24: '24/7 Priority Support',
            training: 'Training & Onboarding',
            sla: 'Custom SLA',
          },
        },
      },
    },

    // Payment Management
    paymentManagement: {
      title: 'Payment and Subscription Management',
      subtitle: 'Manage your subscription, payment methods, and invoices',
      overview: 'Overview',
      invoices: 'Invoices',
      paymentMethods: 'Payment Methods',
      
      currentSubscription: 'Current Subscription',
      subscriptionPlan: 'Subscription Plan',
      monthlyPrice: 'Monthly Price',
      nextBilling: 'Next Billing Date',
      upgradePlan: 'Upgrade Plan',
      cancelSubscription: 'Cancel Subscription',
      
      usageStats: 'Usage Statistics',
      videoAnalysis: 'Video Analysis',
      teamMembers: 'Team Members',
      storage: 'Storage',
      
      upcomingInvoice: 'Upcoming Invoice',
      amountDue: 'Amount Due',
      payNow: 'Pay Now',
      
      downloadPDF: 'Download PDF',
      copyLink: 'Copy Link',
      open: 'Open',
      
      noInvoices: 'No invoices',
      addPaymentMethod: 'Add New Payment Method',
      setAsDefault: 'Set as Default',
      delete: 'Delete',
      defaultMethod: 'Default Method',
      expiresIn: 'Expires in',
    },

    // QR Code
    qrCode: {
      title: 'Advanced QR Code System',
      subtitle: 'Connect all Alpha Foot 2030 platforms in one place',
      ownerInfo: 'Owner and Documentation Information',
      platformsList: 'Platforms List',
      qrCodeInfo: 'Documentation Information',
      
      platforms: {
        website: 'Main Website',
        googlePlay: 'Google Play App',
        appStore: 'App Store',
        facebook: 'Facebook',
        instagram: 'Instagram',
        tiktok: 'TikTok',
        youtube: 'YouTube',
        linkedin: 'LinkedIn',
        twitter: 'Twitter/X',
        github: 'GitHub',
        whatsapp: 'WhatsApp',
        email: 'Email',
      },
      
      download: 'Download',
      copyLink: 'Copy Link',
      open: 'Open',
      registeredOwner: 'Registered Owner',
      contactInfo: 'Contact Information',
      connectedPlatforms: 'Connected Platforms',
      status: 'Status',
      readyForPublish: 'Ready for Global Publishing',
      compatible: 'Compatible with All Platforms',
    },

    // Common
    common: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone Number',
      whatsapp: 'WhatsApp',
      personalEmail: 'Personal Email',
      projectEmail: 'Official Project Email',
      website: 'Official Website',
      status: 'Status',
      active: 'Active',
      inactive: 'Inactive',
      loading: 'Loading...',
      error: 'An error occurred',
      success: 'Success',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      close: 'Close',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      submit: 'Submit',
      confirm: 'Confirm',
      language: 'Language',
      arabic: 'العربية',
      english: 'English',
    },

    // Footer
    footer: {
      copyright: 'All rights reserved © 2026 Alpha Foot',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      contactUs: 'Contact Us',
      followUs: 'Follow Us',
    },

    // Errors
    errors: {
      notFound: 'Page not found',
      unauthorized: 'Unauthorized',
      forbidden: 'Access forbidden',
      serverError: 'Server error',
      tryAgain: 'Try again',
    },
  },
};

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return the key if translation not found
    }
  }

  return typeof value === 'string' ? value : key;
}
